import React from 'react';
import './Form16Summary.css';

function Form16Summary({ details }) {
  if (!details) return null;
  return (
    <div className="form16-summary-container">
      <h2 className="form16-summary-title">Form 16 Summary</h2>
      <p className="form16-summary-employer">
        <strong>Employer:</strong> {details.employer.name} | <strong>PAN:</strong> {details.employer.pan}
      </p>
      <p className="form16-summary-employee">
        <strong>Employee:</strong> {details.employee.name} | <strong>PAN:</strong> {details.employee.pan}
      </p>
      <p className="form16-summary-period">
        <strong>Period:</strong> {details.period}
      </p>
      <p className="form16-summary-taxregime">
        <strong>Tax Regime:</strong> {details.taxRegime || 'N/A'}
      </p>
    </div>
  );
}

export default Form16Summary;
