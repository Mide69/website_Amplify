"use client";
import { CheckCircle } from 'react-feather';

export default function DonationSuccess() {
  return (
    <div className="donation-success-page" style={{padding: '100px 0', textAlign: 'center'}}>
      <div className="container">
        <div className="success-content">
          <CheckCircle size={80} style={{color: '#23a811', marginBottom: '20px'}} />
          <h1 style={{color: '#ffffff', marginBottom: '20px'}}>Thank You for Your Donation!</h1>
          <p style={{color: '#c4cfde', marginBottom: '30px'}}>Your generous contribution helps us continue our mission of technology for social good.</p>
          <a href="/" className="rn-btn btn-theme">
            <span>Return Home</span>
          </a>
        </div>
      </div>
    </div>
  );
}