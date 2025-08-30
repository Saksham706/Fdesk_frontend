import React from 'react';
import './Capitalgaintax2.css';

const items = [
  "Capital Gain Income from shares and property",
  "Cryptocurrency or virtual digital assets income",
  "Declaration of directorship in any Indian Company",
  "Includes salary income from more than 1 employer",
  "Income u/s 44AD & 44ADA. (Presumptive Income)",
  "Profit or loss from the sale of stocks, mutual funds",
  "Multiple house property income",
  "Capital Gain Income from shares and property",
  "Income from lottery",
  "Income from other sources"
];

const Capitalgaintax2 = () => {
  return (
    <div className="capital-gain-container">
      <h2 className="capital-gain-title">
        Who Can Buy this Assisted Capital Gains Plan?
      </h2>

      <div className="capital-gain-grid">
        {items.map((text, index) => (
          <div key={index} className="capital-gain-card">
            <div className="icon-placeholder">📄</div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capitalgaintax2;
