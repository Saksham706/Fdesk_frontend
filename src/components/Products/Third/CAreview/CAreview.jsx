import React from 'react';
import './CAreview.css';

const features = [
  {
    icon: '₹',
    title: 'Accurate & Tax Compliant',
    description:
      'Our platform offers automatic data import from your Form 16/Form 26AS and provides guided assistance throughout the tax return filing process.',
  },
  {
    icon: '👤',
    title: 'Fully online process',
    description:
      'A fully assisted online CA services means no need to visit the Tax Consultant office. You can also Track your e-filing through FdeskSolutions.',
  },
  {
    icon: '💰',
    title: 'Save Taxes & Build Wealth',
    description:
      "Our online CA consultants can assist you with tax-saving investments based on your tax record, and you'll also gain access to financial guides and tools that help you manage your finances more efficiently.",
  },
];

const CAreview = () => {
  return (
    <div className="ca-review-container">
      <h2 className="ca-title">FdeskSolutions Online CA for Income Tax Return (ITR) Filing</h2>
      <p className="ca-subtitle">
        Streamline your tax process with our online CA consultation services for smooth income tax return filing
      </p>

      <div className="ca-feature-boxes">
        {features.map((feature, index) => (
          <div className="ca-feature-card" key={index}>
            <div className="ca-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CAreview;
