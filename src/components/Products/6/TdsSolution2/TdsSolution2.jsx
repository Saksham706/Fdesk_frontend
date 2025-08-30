import React from 'react';
import './TdsSolution2.css';

const TdsSolution2 = () => {
  return (
    <div className="features-container">
      <h2 className="features-title">Features</h2>
      <div className="underline"></div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="icon">👥</div>
          <h4>Multiple Logins</h4>
          <p>Allows to work on multiple clients simultaneously.</p>
        </div>

        <div className="feature-card">
          <div className="icon">🔄</div>
          <h4>Auto Status Update</h4>
          <p>Shares the filing status with you and your clients.</p>
        </div>

        <div className="feature-card">
          <div className="icon">🖥️</div>
          <h4>Registration on Govt Portal</h4>
          <p>Does Deductor Registration at TRACES and ITD Portal.</p>
        </div>

        <div className="feature-card">
          <div className="icon">✅</div>
          <h4>PAN Verification</h4>
          <p>Alerts for Duplicate PAN, Name or Blank Name</p>
        </div>
      </div>
    </div>
  );
};

export default TdsSolution2;
