import React, { useState } from "react";
import './IncomeFromHousePropertyCalculator.css'

const IncomeFromHousePropertyCalculator = () => {
  const [financialYear, setFinancialYear] = useState("");
  const [regime, setRegime] = useState("Old Regime");
  const [interestPaidOnLoan, setInterestPaidOnLoan] = useState("");
  const [totalInterestPreConstruction, setTotalInterestPreConstruction] = useState("");
  const [annualLettableValue, setAnnualLettableValue] = useState("");
  const [municipalTaxesPaid, setMunicipalTaxesPaid] = useState("");
  const [lessUnrealizedRent, setLessUnrealizedRent] = useState("");
  const [standardDeduction, setStandardDeduction] = useState(0);
  const [interestOnLoan, setInterestOnLoan] = useState("");
  const [netAnnualValue, setNetAnnualValue] = useState(0);
  const [incomeFromSelfOccupied, setIncomeFromSelfOccupied] = useState(0);
  const [incomeFromLetOutProperty, setIncomeFromLetOutProperty] = useState(0);
  const [totalIncomeHouseProperty, setTotalIncomeHouseProperty] = useState(0);

  const financialYears = [
    "Select Financial Year",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
  ];

  const regimes = ["Old Regime", "New Regime"];

  const handleCalculateLetOutIncome = () => {
    const annualValue = parseFloat(annualLettableValue) || 0;
    const municipalTaxes = parseFloat(municipalTaxesPaid) || 0;
    const unrealizedRent = parseFloat(lessUnrealizedRent) || 0;
    const netValue = annualValue - municipalTaxes - unrealizedRent;
    const validNetValue = netValue > 0 ? netValue : 0;
    setNetAnnualValue(validNetValue);

    const standardDed = validNetValue * 0.3;
    setStandardDeduction(standardDed);

    const interestLoan = parseFloat(interestOnLoan) || 0;
    const income = validNetValue - standardDed - interestLoan;
    setIncomeFromLetOutProperty(income > 0 ? income : 0);
  };

  const calculateTotalIncome = () => {
    const interestPaid = parseFloat(interestPaidOnLoan) || 0;
    const totalInterestPreCon = parseFloat(totalInterestPreConstruction) || 0;
    const selfOccupiedIncome = -(interestPaid + totalInterestPreCon);
    setIncomeFromSelfOccupied(selfOccupiedIncome);

    const totalIncome = selfOccupiedIncome + incomeFromLetOutProperty;
    setTotalIncomeHouseProperty(totalIncome);
  };

  return (
    <div className="ihp-container">
      <h2 className="ihp-title">Income From House Property Calculator</h2>
      <p className="ihp-desc">
        All types of properties are taxed under the head 'Income from house property' in the income tax return. 
        Use this calculator to figure out taxation and benefits.
      </p>

      {/* Year & Regime */}
      <div className="ihp-select-container">
        <select
          className="ihp-select"
          value={financialYear}
          onChange={e => setFinancialYear(e.target.value)}
        >
          {financialYears.map((year, idx) => (
            <option key={idx} value={year}>{year}</option>
          ))}
        </select>

        <select
          className="ihp-select"
          value={regime}
          onChange={e => setRegime(e.target.value)}
        >
          {regimes.map((reg, idx) => (
            <option key={idx} value={reg}>{reg}</option>
          ))}
        </select>
      </div>

      {/* Self-Occupied Property Section */}
      <div className="ihp-section">
        <h3>Income from Self-occupied Property</h3>

        <div className="ihp-row">
          <label>Interest Paid/Payable on Housing Loan</label>
          <input
            type="number"
            value={interestPaidOnLoan}
            onChange={e => setInterestPaidOnLoan(e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="ihp-row">
          <label>Total Interest for Pre-Construction Period</label>
          <input
            type="number"
            value={totalInterestPreConstruction}
            onChange={e => setTotalInterestPreConstruction(e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="ihp-result-box">
          Income from self-occupied house property: 
          <strong> ₹{incomeFromSelfOccupied.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}</strong>
          <small>
            This loss will be set-off from your other income and will reduce the tax liability.
          </small>
        </div>
      </div>

      {/* Let-out Property Section */}
      <div className="ihp-section">
        <h3>Income from Let-out Property</h3>

        <div className="ihp-row">
          <label>1. Annual Lettable Value</label>
          <input
            type="number"
            value={annualLettableValue}
            onChange={e => setAnnualLettableValue(e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="ihp-row">
          <label>2. Municipal Taxes Paid During the Year</label>
          <input
            type="number"
            value={municipalTaxesPaid}
            onChange={e => setMunicipalTaxesPaid(e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="ihp-calc-row">
          <div className="ihp-row" style={{ flex: 1 }}>
            <label>3. Less Unrealized Rent</label>
            <input
              type="number"
              value={lessUnrealizedRent}
              onChange={e => setLessUnrealizedRent(e.target.value)}
              placeholder="0"
            />
          </div>
          <button 
            type="button"
            className="ihp-calc-btn"
            onClick={handleCalculateLetOutIncome}
          >
            Calculate
          </button>
        </div>

        <div className="ihp-row">
          <label>4. Net Annual Value (1-2-3)</label>
          <input 
            type="number" 
            readOnly 
            value={netAnnualValue.toFixed(2)} 
          />
        </div>

        {/* Deductions */}
        <h4>Less: Deductions from Net Annual Value</h4>

        <div className="ihp-row">
          <label>5. Standard Deduction @ 30% of Net Annual Value</label>
          <input 
            type="number" 
            readOnly 
            value={standardDeduction.toFixed(2)} 
          />
        </div>

        <div className="ihp-row">
          <label>6. Interest on Housing Loan</label>
          <input
            type="number"
            value={interestOnLoan}
            onChange={e => setInterestOnLoan(e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="ihp-result-box">
          Income from Let-out House Property: 
          <strong> ₹{incomeFromLetOutProperty.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}</strong>
        </div>
      </div>

      {/* Total Income */}
      <div className="ihp-result-box">
        Total Income from House Property: 
        <strong> ₹{totalIncomeHouseProperty.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}</strong>
      </div>

      <div>
        <button 
          type="button"
          className="ihp-calc-btn big-btn"
          onClick={calculateTotalIncome}
        >
          Calculate Total Income
        </button>
      </div>
    </div>
  );
};

export default IncomeFromHousePropertyCalculator;
