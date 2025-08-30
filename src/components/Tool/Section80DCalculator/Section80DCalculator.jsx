import React, { useState } from 'react';
import './Section80DCalculator.css';

const financialYears = [
  '2025-2026',
  '2024-2025',
  '2023-2024',
  '2022-2023',
];

const maxDeduction = {
  below60: 25000,
  above60: 50000,
  parentBelow60: 25000,
  parentAbove60: 50000,
  preventive: 5000,
};

const Section80DCalculator = () => {
  const [year, setYear] = useState('');
  const [newRegime, setNewRegime] = useState('No');

  // Self, spouse & dependent children
  const [selfAbove60, setSelfAbove60] = useState(false);
  const [selfPreventive, setSelfPreventive] = useState(0);
  const [selfPremium, setSelfPremium] = useState(0);
  const [selfMedical, setSelfMedical] = useState(0);

  // Parents
  const [parentAbove60, setParentAbove60] = useState(false);
  const [parentPreventive, setParentPreventive] = useState(0);
  const [parentPremium, setParentPremium] = useState(0);
  const [parentMedical, setParentMedical] = useState(0);

  // Calculation logic
  const calcDeduction = (above60, preventive, premium, medical, type) => {
    const cap = above60 ? maxDeduction[type + 'Above60'] : maxDeduction[type + 'Below60'];
    const allowedPreventive = Math.min(preventive, maxDeduction.preventive);
    return Math.min(premium + medical + allowedPreventive, cap);
  };

  const selfDeduction = calcDeduction(
    selfAbove60,
    Number(selfPreventive),
    Number(selfPremium),
    Number(selfMedical),
    'self'
  );

  const parentDeduction = calcDeduction(
    parentAbove60,
    Number(parentPreventive),
    Number(parentPremium),
    Number(parentMedical),
    'parent'
  );

  const totalDeduction = selfDeduction + parentDeduction;

  // Reset all other fields when new regime is selected
  const handleRegimeChange = (e) => {
    const value = e.target.value;
    setNewRegime(value);
    if (value === 'Yes') {
      // Optionally, clear other fields (UX improvement)
      setSelfAbove60(false);
      setSelfPreventive(0);
      setSelfPremium(0);
      setSelfMedical(0);
      setParentAbove60(false);
      setParentPreventive(0);
      setParentPremium(0);
      setParentMedical(0);
    }
  };

  return (
    <div className="FdeskSolutions-container">
      <div className="FdeskSolutions-form">
        <h1 className="FdeskSolutions-title">Section 80D Tax Deduction Calculator</h1>
        {newRegime === 'Yes' && (
          <div className="FdeskSolutions-warning">
            <span className="FdeskSolutions-warning-icon">!</span>
            You are not eligible to claim deduction u/s 80D
          </div>
        )}
        <div className="FdeskSolutions-row">
          <label>Financial year</label>
          <select
            value={year}
            onChange={e => setYear(e.target.value)}
          >
            <option value="">Select</option>
            {financialYears.map(fy => (
              <option key={fy} value={fy}>{fy}</option>
            ))}
          </select>
        </div>
        <div className="FdeskSolutions-row">
          <label>Paying taxes under new regime/115BAC?</label>
          <select
            value={newRegime}
            onChange={handleRegimeChange}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {newRegime === 'No' && (
          <>
            <div className="FdeskSolutions-group">
              <span className="FdeskSolutions-subtitle">(A) For self, spouse & dependent children</span>
              <div className="FdeskSolutions-row-inline">
                <label>Are any policy holders 60 years or above?</label>
                <span>
                  <input type="radio" checked={selfAbove60} onChange={() => setSelfAbove60(true)} /> Yes
                  <input type="radio" checked={!selfAbove60} onChange={() => setSelfAbove60(false)} style={{marginLeft:'15px'}}/> No
                </span>
              </div>
              <div className="FdeskSolutions-row">
                <label>
                  Preventive health check-up&nbsp;
                  <span title="Maximum allowed: ₹5,000" className="FdeskSolutions-tooltip">?</span>
                </label>
                <input
                  type="number"
                  min={0}
                  max={5000}
                  value={selfPreventive}
                  onChange={e => setSelfPreventive(e.target.value)}
                />
              </div>
              <div className="FdeskSolutions-row">
                <label>Medical insurance premium amount</label>
                <input
                  type="number"
                  min={0}
                  value={selfPremium}
                  onChange={e => setSelfPremium(e.target.value)}
                />
              </div>
              <div className="FdeskSolutions-row">
                <label>Medical expenditure amount</label>
                <input
                  type="number"
                  min={0}
                  value={selfMedical}
                  onChange={e => setSelfMedical(e.target.value)}
                />
              </div>
              <div className="FdeskSolutions-row FdeskSolutions-total">
                <label>Total deduction</label>
                <span className="FdeskSolutions-deduction">₹ {selfDeduction}</span>
              </div>
            </div>
            <div className="FdeskSolutions-group">
              <span className="FdeskSolutions-subtitle">(B) For parents</span>
              <div className="FdeskSolutions-row-inline">
                <label>Are any policy holders 60 years or above?</label>
                <span>
                  <input type="radio" checked={parentAbove60} onChange={() => setParentAbove60(true)} /> Yes
                  <input type="radio" checked={!parentAbove60} onChange={() => setParentAbove60(false)} style={{marginLeft:'15px'}} /> No
                </span>
              </div>
              <div className="FdeskSolutions-row">
                <label>
                  Preventive health check-up&nbsp;
                  <span title="Maximum allowed: ₹5,000" className="FdeskSolutions-tooltip">?</span>
                </label>
                <input
                  type="number"
                  min={0}
                  max={5000}
                  value={parentPreventive}
                  onChange={e => setParentPreventive(e.target.value)}
                />
              </div>
              <div className="FdeskSolutions-row">
                <label>Medical insurance premium amount</label>
                <input
                  type="number"
                  min={0}
                  value={parentPremium}
                  onChange={e => setParentPremium(e.target.value)}
                />
              </div>
              <div className="FdeskSolutions-row">
                <label>Medical expenditure amount</label>
                <input
                  type="number"
                  min={0}
                  value={parentMedical}
                  onChange={e => setParentMedical(e.target.value)}
                />
              </div>
              <div className="FdeskSolutions-row FdeskSolutions-total">
                <label>Total deduction</label>
                <span className="FdeskSolutions-deduction">₹ {parentDeduction}</span>
              </div>
            </div>
            <hr />
            <div className="FdeskSolutions-row FdeskSolutions-grandtotal">
              <label>Total eligible deduction under 80D</label>
              <span className="FdeskSolutions-grand-deduction">₹ {totalDeduction}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Section80DCalculator;
