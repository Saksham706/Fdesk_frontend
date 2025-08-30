import React from 'react';
import './CAfilling.css';

const steps = [
  {
    icon: '🔍',
    title: 'Get online CA consultation & Upload the Documents',
    description:
      'Everything you’ve loved about a CA, you’ve had all in one place. For this, all you need to do is just enter your name, email & phone no. Make a payment of our professional fees and get your personal online CA services.',
  },
  {
    icon: '📞',
    title: 'CA Consultants Reviews Your Documents & Calls You',
    description:
      'Every Document is thoroughly studied for its accuracy and completeness. Further, our CA consultants will call you to discuss your income, investments & deductions to help you get the maximum refund.',
  },
  {
    icon: '🧘‍♂️',
    title: 'Relax & Leave All Hardwork to us',
    description:
      'Leave all the hard work on us, to maximise deductions and save taxes for you. We know everything about the tax laws applicable on you. We also check Form 26AS with the Department to get you the max. benefit of your TDS.',
  },
  {
    icon: '✅',
    title: 'Approve ITR, and Filing is Done',
    description:
      'A detailed summary of your Income Tax Return is sent to you for your approval. Once you approve it, the return can be filed from the dashboard.',
  },
];

const CAfilling = () => {
  return (
    <div className="ca-filling-container">
      <h2 className="ca-filling-heading">How our CA-Assisted ITR Filing Works?</h2>
      <div className="ca-filling-grid">
        {steps.map((step, index) => (
          <div className="ca-filling-card" key={index}>
            <div className="ca-filling-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CAfilling;
