import React from 'react';
import './NriTax3.css';

const NriTax3 = () => {
  return (
    <div className="nri-tax-container">
      <h2 className="nri-tax-title">Why Choose FdeskSolutions for NRI Tax Filing?</h2>

      <div className="nri-tax-grid">
        <div className="nri-card">
          <div className="nri-icon">💻</div>
          <h4>Dedicated NRI Experts</h4>
          <p>Specialized tax consultants with deep knowledge of NRI taxation laws.</p>
        </div>

        <div className="nri-card">
          <div className="nri-icon">❓</div>
          <h4>End-to-End Support</h4>
          <p>From determining residential status to claiming DTAA benefits, we handle it all.</p>
        </div>

        <div className="nri-card">
          <div className="nri-icon">🛡️</div>
          <h4>Safe & Secure Filing</h4>
          <p>Authorized by ITD and compliant with the highest data security standards.</p>
        </div>

        <div className="nri-card">
          <div className="nri-icon">📍</div>
          <h4>Global Reach</h4>
          <p>Accessible from anywhere in the world, we ensure your tax obligations are met on time.</p>
        </div>
      </div>
    </div>
  );
};

export default NriTax3;
