import React from 'react';
import './Taxquiers.css';

const Taxquiers = () => {
  const solutions = [
    'File Your Return',
    'CA Assisted Tax Filing',
    'Tax Planning Optimiser',
    'Income Tax Calculator',
    'Income Tax Notices',
    'Income Tax Refund',
  ];

  return (
    <div className="tax-container">
      <h2>We Have Solutions for All Your Tax Queries</h2>
      <div className="tax-buttons">
        {solutions.map((item, index) => (
          <button className="tax-button" key={index}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Taxquiers;
