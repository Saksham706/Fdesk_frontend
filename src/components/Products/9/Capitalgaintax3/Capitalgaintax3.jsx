import React from 'react';
import './Capitalgaintax3.css';
import Capital_image from '../../../../assets/Capital_image.png'


const Capitalgaintax3 = () => {
  return (
    <div className="capital-gain-container">
      <div className="capital-gain-content">
        <h2 className="title">Our Capital Gains Services Include</h2>
        <div className="content-wrapper">
          <img src={Capital_image} alt="Capital Gain" className="gain-image" />
          <div className="services">
            <p><strong>Capital Gains Tax Filing:</strong> Expert-assisted capital-gain tax filing for individuals dealing with gains from listed shares, mutual funds, property, etc.</p>
            <p><strong>Crypto-Gains Assistance:</strong> Specialized support for calculating and filing taxes on cryptocurrency gains.</p>
            <p><strong>Expert Guidance on Exemptions:</strong> Help with utilizing exemptions under Sections 54F, 54EC and others.</p>
            <p><strong>Capital Gains Computation:</strong> Precise calculation of your capital gains and associated tax liabilities, handled by professionals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capitalgaintax3;
