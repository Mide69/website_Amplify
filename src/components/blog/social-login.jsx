"use client";
import { useState } from 'react';

const SocialLogin = ({ onLogin }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSocialLogin = (provider) => {
    const mockUsers = {
      google: {
        name: 'John Doe',
        email: 'john@gmail.com',
        picture: 'https://via.placeholder.com/40/4285f4/white?text=G',
        provider: 'google'
      },
      facebook: {
        name: 'Jane Smith',
        email: 'jane@facebook.com',
        picture: 'https://via.placeholder.com/40/1877f2/white?text=F',
        provider: 'facebook'
      },
      twitter: {
        name: 'Mike Johnson',
        email: 'mike@twitter.com',
        picture: 'https://via.placeholder.com/40/1da1f2/white?text=T',
        provider: 'twitter'
      },
      linkedin: {
        name: 'Sarah Wilson',
        email: 'sarah@linkedin.com',
        picture: 'https://via.placeholder.com/40/0077b5/white?text=L',
        provider: 'linkedin'
      }
    };

    const user = mockUsers[provider];
    localStorage.setItem('user', JSON.stringify(user));
    onLogin(user);
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="login-btn">
        Login to Comment
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Login with Social Media</h3>
              <button onClick={() => setShowModal(false)} className="close-btn">×</button>
            </div>
            <div className="social-buttons">
              <button onClick={() => handleSocialLogin('google')} className="social-btn google-btn">
                <span className="social-icon">G</span>
                Continue with Google
              </button>
              <button onClick={() => handleSocialLogin('facebook')} className="social-btn facebook-btn">
                <span className="social-icon">f</span>
                Continue with Facebook
              </button>
              <button onClick={() => handleSocialLogin('twitter')} className="social-btn twitter-btn">
                <span className="social-icon">T</span>
                Continue with Twitter
              </button>
              <button onClick={() => handleSocialLogin('linkedin')} className="social-btn linkedin-btn">
                <span className="social-icon">in</span>
                Continue with LinkedIn
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialLogin;