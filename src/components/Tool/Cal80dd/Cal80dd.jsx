import React, { useState } from 'react';
import './Cal80dd.css';

const Cal80dd = () => {
  const [financialYear, setFinancialYear] = useState('');
  const [status, setStatus] = useState('');
  const [claimed80U, setClaimed80U] = useState('');
  const [disability, setDisability] = useState('');

  const getDeductionAmount = () => {
    if (claimed80U === 'Yes') return 0;
    if (disability === 'Severe(80% or more)') return 125000;
    if (disability === 'Less than 80%') return 75000;
    return 0;
  };

  return (
    <div className="eightydd-container">
      <h1>80DD Calculator</h1>
      <p className="subtext">
        Calculate the tax deduction for disabled dependents using our 80DD calculator. Check out 80DD deductions, how to claim deductions, eligibility & more.
      </p>

      <div className="form-box">
        <div className="form-row">
          <label className="form-label">Financial year</label>
          <select
            value={financialYear}
            onChange={(e) => setFinancialYear(e.target.value)}
            className="form-select"
          >
            <option value="">Select</option>
            <option value="2021-2022">2021-2022</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
          </select>
        </div>

        <div className="form-row">
          <label className="form-label">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-select"
          >
            <option value="">Select</option>
            <option value="Resident Individual">Resident Individual</option>
            <option value="Resident HUF">Resident HUF</option>
          </select>
        </div>

        {financialYear && status && (
          <div className="form-row">
            <label className="form-label">Deductions claimed under section 80U by disabled dependent?</label>
            <select
              value={claimed80U}
              onChange={(e) => setClaimed80U(e.target.value)}
              className="form-select"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        )}

        {claimed80U === 'Yes' && (
          <div className="alert">
            ❌ Deduction u/s 80DD is not available if dependent is claiming deduction u/s 80U
          </div>
        )}

        {claimed80U === 'No' && (
          <>
            <div className="form-row">
              <label className="form-label">Percentage of disability</label>
              <select
                value={disability}
                onChange={(e) => setDisability(e.target.value)}
                className="form-select"
              >
                <option value="">Select</option>
                <option value="Less than 80%">Less than 80%</option>
                <option value="Severe(80% or more)">Severe(80% or more)</option>
              </select>
            </div>

            {disability && (
              <div className="form-row deduction">
                <label className="form-label">Deduction amount</label>
                <p className="amount">₹ {getDeductionAmount().toLocaleString('en-IN')}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cal80dd;
