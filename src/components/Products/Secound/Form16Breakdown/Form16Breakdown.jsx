import React from 'react';
import './Form16Breakdown.css';

function Form16Breakdown({ salary, deductions, tds }) {
  if (!salary || !deductions || !tds) return null;
  return (
    <div className="form16-container">
      <h3 className="section-title">Salary Breakdown</h3>
      <ul className="salary-list">
        <li className="salary-item">
          Basic: <span className="amount">₹{salary.basic}</span>
        </li>
        <li className="salary-item">
          HRA: <span className="amount">₹{salary.hra}</span>
        </li>
        <li className="salary-item">
          Allowances: <span className="amount">₹{salary.allowances}</span>
        </li>
        <li className="salary-item">
          Perquisites: <span className="amount">₹{salary.perquisites}</span>
        </li>
      </ul>

      <h3 className="section-title">Deductions</h3>
      <ul className="deductions-list">
        <li className="deduction-item">
          Section 80C: <span className="amount">₹{deductions.section80C}</span>
        </li>
        <li className="deduction-item">
          Section 80D: <span className="amount">₹{deductions.section80D}</span>
        </li>
      </ul>

      <h3 className="section-title">TDS Summary</h3>
      <ul className="tds-list">
        {tds.map((entry, idx) => (
          <li className="tds-item" key={idx}>
            {entry.quarter}: <span className="amount">₹{entry.tdsPaid}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form16Breakdown;
