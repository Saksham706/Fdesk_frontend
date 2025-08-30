import React from 'react';
import './NriTax2.css';
import { CheckCircle } from 'lucide-react'; 
import Nri_image from '../../../../assets/Nri_image.webp'

const services = [
  "Residential Status Determination",
  "Income Tax Return Filing (ITR) for Indian Income",
  "DTAA (Double Tax Avoidance Agreement) Benefits",
  "Relief on Foreign Income Taxed in India",
  "Capital Gains Calculation",
  "Claiming Refunds of TDS deducted in India",
  "Tax Planning for Property Sales or Purchases",
  "Cryptocurrency Gains Assistance"
];

const NriTax2 = () => {
  return (
    <div>
      {/* Section 1: Who Needs to File */}
      <div className="nri-section">
        <h2 className="nri-title">Who Needs to File NRI Taxes?</h2>
        <p className="nri-desc">
          NRIs earning income from India, such as income from salary <span>( if services are rendered in India)</span>, rental income,
          interest on NRO accounts, dividend income from Indian companies, capital gains from sale of property situated in India and
          other Indian Income, need to file ITR.
        </p>
      </div>

      {/* Section 2: Our Services */}
      <div className="nri-tax-services">
        <h2>Our NRI Tax Filing Services Include</h2>
        <div className="nri-services-content">
          <div className="nri-services-left">
            {services.map((service, idx) => (
              <div className="nri-service-item" key={idx}>
                <CheckCircle className="check-icon" size={20} color="#00a66f" />
                <span>{service}</span>
              </div>
            ))}
          </div>
          <div className="nri-services-right">
            <img
              src={Nri_image}
              alt="Growth Chart"
              className="nri-growth-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NriTax2;
