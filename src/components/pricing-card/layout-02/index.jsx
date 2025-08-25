import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Check, X, Heart, ArrowRight } from "react-feather";
import Button from "@/components/ui/button";
import { FormGroup, Input } from "@/components/ui/form-elements";

const PricingCard = ({ title, subtitle, price, orderLink, features }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        amount: '',
        name: '',
        email: '',
        frequency: 'one-time',
        itemType: '',
        description: '',
        quantity: ''
    });
    
    const isMaterialDonation = title === 'MATERIAL DONATION';

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (isMaterialDonation) {
            // Handle material donation submission
            console.log('Material donation submitted:', formData);
            alert('Thank you! We will contact you about your material donation.');
            setShowForm(false);
        } else {
            // Handle Stripe payment for monetary donations
            const donationData = {
                amount: parseFloat(formData.amount) * 100, // Convert to cents
                currency: 'gbp',
                frequency: formData.frequency,
                donor: {
                    name: formData.name,
                    email: formData.email
                }
            };
            
            try {
                // Process donation
                const response = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(donationData)
                });
                
                const result = await response.json();
                alert(`Thank you ${formData.name}! Your £${formData.amount} donation will help our mission.`);
                setShowForm(false);
            } catch (error) {
                console.error('Donation error:', error);
                alert('Thank you for your interest! Please contact us directly to complete your donation.');
            }
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
                    <Button onClick={() => setShowForm(true)} className="btn-theme">
                        <span>DONATE NOW</span>
                        <Heart size={16} />
                    </Button>
                </div>
            ) : (
                <div className="donation-form">
                    <form onSubmit={handleSubmit} className="rnt-contact-form">
                        {isMaterialDonation ? (
                            <>
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
                            </>
                        ) : (
                            <>
                                <FormGroup>
                                    <select 
                                        name="frequency" 
                                        value={formData.frequency} 
                                        onChange={handleInputChange}
                                        className="form-control form-control-lg"
                                    >
                                        <option value="one-time">One-time</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        placeholder="Amount (£)"
                                        value={formData.amount}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </FormGroup>
                            </>
                        )}
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
                                <span>{isMaterialDonation ? 'SUBMIT' : 'DONATE NOW'}</span>
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
};

PricingCard.defaultProps = {
    features: [],
    orderLink: "#!",
};

export default PricingCard;
