import React from 'react';
import './TaxConsultancy1.css';

const services = [
  {
    title: 'Advance Tax Calculation',
    description: 'Get ahead of your taxes with our precise calculations'
  },
  {
    title: 'Tax Saving on Salary Income',
    description: 'Maximize your savings on your salary'
  },
  {
    title: 'Tax Saving on Capital Gains',
    description: 'Optimize tax on your investment gains'
  },
  {
    title: 'Responding to Income Tax Notices',
    description: 'Expert help when you need it most'
  },
  {
    title: 'Pre-book ITR Filing for FY 2024-25',
    description: 'Secure early filing slots for peace of mind'
  },
  {
    title: 'Tailored Tax Regime Selection',
    description: 'Choose the best tax regime for you'
  },
  {
    title: 'Timely Tax Filing Reminders',
    description: 'Stay on top of your deadlines'
  },
  {
    title: 'Stay Updated with Tax Laws and Regulations',
    description: 'Always be in the know'
  }
];

const TaxConsultancy1 = () => {
  return (
    <div className="tax-section">
      <h2 className="tax-title">
        <span className="tax-title-highlight">Plan Your Taxes Today</span> with Our Tax Consultants
      </h2>
      <p className="tax-subtitle">What Services Can You Get?</p>
      <div className="tax-service-grid">
        {services.map((service, index) => (
          <div className="tax-service-card" key={index}>
            <h3 className="tax-service-card-title">{service.title}</h3>
            <p className="tax-service-card-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxConsultancy1;
