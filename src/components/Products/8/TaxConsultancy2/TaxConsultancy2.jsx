import React from 'react';
import './TaxConsultancy2.css';
import { FaPhoneAlt, FaFileAlt, FaRupeeSign, FaCreditCard, FaPhoneVolume } from 'react-icons/fa';

const steps = [
  { icon: <FaPhoneAlt />, label: 'Book a Call with expert' },
  { icon: <FaFileAlt />, label: 'Explain Your Query' },
  { icon: <FaRupeeSign />, label: 'Understand Pricing' },
  { icon: <FaCreditCard />, label: 'Pay the Fees' },
  { icon: <FaPhoneVolume />, label: 'Get personalized Consultation' }
];

const TaxConsultancy2 = () => {
  return (
    <div className="tax-process-section">
      <h2 className="tax-process-title">
        How to get <span className="tax-process-highlight">Tax Consultancy</span> Services?
      </h2>

      <div className="tax-steps-row">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="tax-step">
              <div className="tax-step-icon">{step.icon}</div>
              <p className="tax-step-label">{step.label}</p>
            </div>
            {index !== steps.length - 1 && <div className="tax-step-divider"></div>}
          </React.Fragment>
        ))}
      </div>

      <button className="tax-process-btn">
        Get Tax Advice! <span className="tax-process-arrow">↗</span>
      </button>
    </div>
  );
};

export default TaxConsultancy2;
