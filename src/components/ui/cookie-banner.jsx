"use client";
import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner" role="banner" aria-label="Cookie consent">
      <div className="cookie-content">
        <p>
          We use cookies to enhance your experience and analyze site usage. 
          <a href="/privacy-policy" className="cookie-link">Learn more</a>
        </p>
        <div className="cookie-buttons">
          <button onClick={acceptCookies} className="btn-accept">
            Accept All
          </button>
          <button onClick={declineCookies} className="btn-decline">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;