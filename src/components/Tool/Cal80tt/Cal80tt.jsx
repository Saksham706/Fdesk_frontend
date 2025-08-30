import React, { useState } from 'react';
import './Cal80tt.css';
import { FaCalculator } from 'react-icons/fa';

const Cal80tt = () => {
  const [financialYear, setFinancialYear] = useState('');
  const [status, setStatus] = useState('');
  const [interestIncome, setInterestIncome] = useState('');
  const [deduction, setDeduction] = useState(null);

  const handleCalculate = () => {
    const interest = parseFloat(interestIncome);
    if (isNaN(interest) || interest < 0) {
      alert("Please enter a valid interest amount");
      return;
    }
    const allowedDeduction = Math.min(10000, interest);
    setDeduction(allowedDeduction);
  };

  return (
    <div className="cal80tta-container">
      <div className="header">
        <FaCalculator className="header-icon" />
        <h1>80TTA Deduction Calculator</h1>
        <p className="sub-text">
          Quickly find out how much deduction you can claim for interest earned on savings accounts under Section 80TTA.
        </p>
      </div>

      <div className="form-card">
        <div className="form-group">
          <label>Financial Year</label>
          <select value={financialYear} onChange={(e) => setFinancialYear(e.target.value)}>
            <option value="">Select Year</option>
            <option value="2024-25">2024-25</option>
            <option value="2023-24">2023-24</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value="Individual">Individual</option>
            <option value="HUF">HUF</option>
          </select>
        </div>

        <div className="form-group">
          <label>Interest Earned on Savings (₹)</label>
          <input
            type="number"
            value={interestIncome}
            onChange={(e) => setInterestIncome(e.target.value)}
            placeholder="Enter interest amount"
          />
        </div>

        <button className="calc-btn" onClick={handleCalculate}>
          Calculate Deduction
        </button>

        {deduction !== null && (
          <div className="result">
            <p>You can claim a deduction of <strong>₹{deduction}</strong> under Section 80TTA.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cal80tt;
