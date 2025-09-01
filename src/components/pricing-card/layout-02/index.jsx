import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Check, X, Heart, ArrowRight } from "react-feather";
import Button from "@/components/ui/button";
import { FormGroup, Input } from "@/components/ui/form-elements";

const PricingCard = ({ title, subtitle, price, orderLink, features, button_text }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        itemType: '',
        description: '',
        quantity: '',
        name: '',
        email: ''
    });
    
    const isMaterialDonation = title === 'MATERIAL DONATION';
    const isMonetaryDonation = title === 'SUPPORT OUR MISSION';

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const emailData = {
            to: 'info@tektribe.org.uk',
            subject: 'Material Donation Submission',
            html: `
                <h3>New Material Donation Submission</h3>
                <p><strong>Item Type:</strong> ${formData.itemType}</p>
                <p><strong>Description:</strong> ${formData.description}</p>
                <p><strong>Quantity:</strong> ${formData.quantity}</p>
                <p><strong>Donor Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            `
        };
        
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailData)
            });
            
            if (response.ok) {
                alert('Thank you for your generous donation offer! You will hear from us soon.');
            } else {
                alert('Thank you for your interest! Please email us directly at info@tektribe.org.uk');
            }
        } catch (error) {
            alert('Thank you for your donation offer! Please contact us at info@tektribe.org.uk to complete the process.');
        }
        
        setShowForm(false);
        setFormData({ itemType: '', description: '', quantity: '', name: '', email: '' });
    };

    const handleDonateClick = () => {
        if (isMonetaryDonation && orderLink) {
            window.open(orderLink, '_blank');
        } else {
            setShowForm(true);
        }
    };

    return (
        <div className="pricing-wrapper">
            <div className="ts-header">
                <h6>{title}</h6>
                <span>{subtitle}</span>
            </div>
            <h3 className="price">{price}</h3>
            <div className="pricing-body">
                {features?.map((feature) => (
                    <div className="feature" key={feature.title}>
                        {feature.available ? <Check /> : <X className="off" />}
                        <span
                            className={cn(
                                "name",
                                feature.available === false && "off"
                            )}
                        >
                            {feature.title}
                        </span>
                    </div>
                ))}
            </div>
            
            {!showForm ? (
                <div className="pricing-footer">
                    <Button onClick={handleDonateClick} className="btn-theme">
                        <span>{button_text || 'DONATE NOW'}</span>
                        <Heart size={16} />
                    </Button>
                </div>
            ) : (
                <div className="donation-form">
                    <form onSubmit={handleSubmit} className="rnt-contact-form">
                        <FormGroup>
                            <select 
                                name="itemType" 
                                value={formData.itemType} 
                                onChange={handleInputChange}
                                className="form-control form-control-lg"
                                required
                            >
                                <option value="">Select Item Type</option>
                                <option value="laptops-computers">Laptops & Computers</option>
                                <option value="tablets-phones">Tablets & Phones</option>
                                <option value="monitors-displays">Monitors & Displays</option>
                                <option value="networking-equipment">Networking Equipment</option>
                                <option value="software-licenses">Software Licenses</option>
                                <option value="office-furniture">Office Furniture</option>
                                <option value="training-materials">Training Materials & Books</option>
                                <option value="venue-space">Venue/Meeting Space</option>
                                <option value="other">Other Equipment</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Item Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="number"
                                name="quantity"
                                id="quantity"
                                placeholder="Quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </FormGroup>
                        <div className="form-actions">
                            <Button type="submit" className="btn-theme">
                                <span>SUBMIT</span>
                                <ArrowRight size={16} />
                            </Button>
                            <Button type="button" onClick={() => setShowForm(false)} className="border-button">
                                <span>CANCEL</span>
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

PricingCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            available: PropTypes.bool.isRequired,
        })
    ).isRequired,
    orderLink: PropTypes.string.isRequired,
    button_text: PropTypes.string,
};

PricingCard.defaultProps = {
    features: [],
    orderLink: "#!",
};

export default PricingCard;
