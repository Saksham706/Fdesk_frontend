import React from 'react';
import './FileRating.css';
import { Link } from 'react-router-dom';

const FillRating = () => {
  return (
    <div className="fill-rating-container">
      <div className="fill-rating-top">
        <div>
          <span className="icon">👥</span>
          <strong>4.9</strong> Google Rating
        </div>
        <div>
          <span className="icon">🛡️</span>
          <strong>1+ Million</strong> Satisfied Customers
        </div>
        <div>
          <span className="icon">💰</span>
          <strong>2500 Cr.</strong> Tax Saved
        </div>
        <div>
          <span className="icon">🧑‍💻</span>
          <strong>10+ Years</strong> of Industry Experience
        </div>
      </div>

      <div className="fill-rating-box">
        <div className="fill-rating-left">
          <div className="fill-rating-icon">💬</div>
          <div className="fill-rating-text">
            <h2>Looking for a dedicated CA to handle your taxes?</h2>
            <div className="features">
              <span>✅ All-Round Support</span>
              <span>✅ Reliable and Secure</span>
              <span>✅ Lowest Filing Fees</span>
            </div>
          </div>
        </div>
        <div className="fill-rating-right">
          <Link to="/ca-request" className="connect-button">
            Connect with Experts <span className="arrow">➜</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FillRating;
