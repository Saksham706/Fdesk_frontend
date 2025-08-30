import React, { useState } from 'react';
import './Cal80U.css';

const Cal80U = () => {
  const [year, setYear] = useState('2024-2025');
  const [status, setStatus] = useState('Resident Individual');
  const [disability, setDisability] = useState('');
  const [deduction, setDeduction] = useState(0);

  const handleDisabilityChange = (value) => {
    setDisability(value);
    if (value === '40-79') {
      setDeduction(75000);
    } else if (value === '80+') {
      setDeduction(125000);
    } else {
      setDeduction(0);
    }
  };

  return (
    <div className="cal80u-container">
      <div className="cal80u-card">
        <h1>80U Deduction Calculator</h1>
        <p className="subtitle">
          Calculate deductions for resident individuals with disabilities under Section 80U.
        </p>

        <div className="form-group">
          <label>Financial Year</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option>2021-2022</option>
            <option>2022-2023</option>
            <option>2023-2024</option>
            <option>2024-2025</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Resident Individual</option>
            <option>HUF</option>
          </select>
        </div>

        <div className="form-group">
          <label>Percentage of Disability</label>
          <select value={disability} onChange={(e) => handleDisabilityChange(e.target.value)}>
            <option value="">Select</option>
            <option value="less-40">Less than 40%</option>
            <option value="40-79">40% to 79%</option>
            <option value="80+">80% or above</option>
          </select>
        </div>

        <div className="deduction-display">
          <span>Deduction Amount:</span>
          <span className="deduction-value">₹ {deduction.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Cal80U;
