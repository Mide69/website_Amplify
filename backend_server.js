// server.js - Backend server for TEK Tribe website
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:8080',
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Email configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Database simulation (replace with actual database)
const volunteers = [];
const donations = [];

// API Routes

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Stripe config endpoint (only publishable key)
app.get('/api/stripe-config', (req, res) => {
    res.json({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    });
});

// Volunteer form submission
app.post('/api/volunteer', async (req, res) => {
    try {
        const { name, email, phone, skills, availability } = req.body;
        
        // Validation
        if (!name || !email || !skills) {
            return res.status(400).json({ 
                error: 'Missing required fields: name, email, and skills are required' 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const volunteer = {
            id: Date.now().toString(),
            name,
            email,
            phone: phone || '',
            skills,
            availability: availability || '',
            submittedAt: new Date().toISOString(),
            status: 'pending'
        };

        // Save to database (replace with actual database operation)
        volunteers.push(volunteer);

        // Send confirmation email to volunteer
        const volunteerEmailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for volunteering with TEK Tribe!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #0d6efd;">Welcome to TEK Tribe!</h2>
                    <p>Dear ${name},</p>
                    <p>Thank you for your interest in volunteering with TEK Tribe. We're excited to have you join our mission of using technology for good!</p>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3>Your Application Details:</h3>
                        <p><strong>Skills:</strong> ${skills}</p>
                        <p><strong>Availability:</strong> ${availability || 'Not specified'}</p>
                    </div>
                    <p>We'll review your application and get back to you within 48 hours.</p>
                    <p>Best regards,<br>The TEK Tribe Team</p>
                </div>
            `
        };

        // Send notification email to admin
        const adminEmailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Volunteer Application - TEK Tribe',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>New Volunteer Application</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    <p><strong>Skills:</strong> ${skills}</p>
                    <p><strong>Availability:</strong> ${availability || 'Not specified'}</p>
                    <p><strong>Submitted:</strong> ${volunteer.submittedAt}</p>
                </div>
            `
        };

        await transporter.sendMail(volunteerEmailOptions);
        await transporter.sendMail(adminEmailOptions);

        res.status(201).json({ 
            message: 'Volunteer application submitted successfully!',
            id: volunteer.id
        });

    } catch (error) {
        console.error('Volunteer submission error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create payment intent for donations
app.post('/api/create-payment-intent', async (req, res) => {
    try {
        const { amount, currency = 'gbp', donorName, donorEmail, message } = req.body;

        if (!amount || amount < 1) {
            return res.status(400).json({ error: 'Invalid donation amount' });
        }

        // Create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to pence/cents
            currency: currency,
            metadata: {
                donorName: donorName || 'Anonymous',
                donorEmail: donorEmail || '',
                message: message || '',
                organization: 'TEK Tribe'
            }
        });

        res.json({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });

    } catch (error) {
        console.error('Payment intent creation error:', error);
        res.status(500).json({ error: 'Failed to create payment intent' });
    }
});

// Confirm donation and send receipt
app.post('/api/confirm-donation', async (req, res) => {
    try {
        const { paymentIntentId, donorName, donorEmail, amount, message } = req.body;

        // Verify payment with Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        
        if (paymentIntent.status !== 'succeeded') {
            return res.status(400).json({ error: 'Payment not completed' });
        }

        const donation = {
            id: Date.now().toString(),
            paymentIntentId,
            donorName: donorName || 'Anonymous',
            donorEmail: donorEmail || '',
            amount: amount,
            message: message || '',
            donatedAt: new Date().toISOString(),
            status: 'completed'
        };

        // Save to database
        donations.push(donation);

        // Send receipt email if email provided
        if (donorEmail) {
            const receiptEmailOptions = {
                from: process.env.EMAIL_USER,
                to: donorEmail,
                subject: 'Thank you for your donation to TEK Tribe!',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #0d6efd;">Thank you for your generous donation!</h2>
                        <p>Dear ${donorName || 'Friend'},</p>
                        <p>Thank you for supporting TEK Tribe's mission to use technology for good. Your contribution makes a real difference in our community.</p>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3>Donation Receipt</h3>
                            <p><strong>Amount:</strong> £${amount}</p>
                            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                            <p><strong>Transaction ID:</strong> ${paymentIntentId}</p>
                            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
                        </div>
                        <p>Your donation helps us provide free technology services to communities in need.</p>
                        <p>Best regards,<br>The TEK Tribe Team</p>
                    </div>
                `
            };

            await transporter.sendMail(receiptEmailOptions);
        }

        // Send notification to admin
        const adminNotificationOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Donation Received - TEK Tribe',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>New Donation Received!</h2>
                    <p><strong>Donor:</strong> ${donorName || 'Anonymous'}</p>
                    <p><strong>Email:</strong> ${donorEmail || 'Not provided'}</p>
                    <p><strong>Amount:</strong> £${amount}</p>
                    <p><strong>Message:</strong> ${message || 'None'}</p>
                    <p><strong>Transaction ID:</strong> ${paymentIntentId}</p>
                    <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                </div>
            `
        };

        await transporter.sendMail(adminNotificationOptions);

        res.json({ 
            message: 'Donation confirmed successfully!',
            donationId: donation.id
        });

    } catch (error) {
        console.error('Donation confirmation error:', error);
        res.status(500).json({ error: 'Failed to confirm donation' });
    }
});

// Get volunteers (admin endpoint)
app.get('/api/volunteers', (req, res) => {
    // Add authentication middleware in production
    res.json(volunteers);
});

// Get donations (admin endpoint)
app.get('/api/donations', (req, res) => {
    // Add authentication middleware in production
    res.json(donations);
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Unhandled error:', error);
    res.status(500).json({ error: 'Internal server error' });
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log('Visit http://localhost:3000 to view your website');
});

module.exports = app;