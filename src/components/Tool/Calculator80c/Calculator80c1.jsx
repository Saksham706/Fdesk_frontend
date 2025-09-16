import React, { useState } from 'react';
import './Calculator80c1.css';

const deductionLimit = 150000;

const Calculator80c1 = () => {
  const [financialYear, setFinancialYear] = useState('');
  const [status, setStatus] = useState('');
  const [investments, setInvestments] = useState({
    lifeInsurance: '',
    providentFund: '',
    fixedDeposit: '',
  });
  const [others, setOthers] = useState([{ label: '', amount: '' }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestments((prev) => ({ ...prev, [name]: value }));
  };

  const handleOtherChange = (index, field, value) => {
    const updatedOthers = [...others];
    updatedOthers[index][field] = value;
    setOthers(updatedOthers);
  };

  const addMore = () => {
    setOthers([...others, { label: '', amount: '' }]);
  };

  const remove = () => {
    if (others.length > 1) {
      const updatedOthers = [...others];
      updatedOthers.pop();
      setOthers(updatedOthers);
    }
  };

  const totalInvested = () => {
    const fixedFieldsTotal = Object.values(investments).reduce(
      (sum, val) => sum + (parseInt(val) || 0), 0
    );
    const othersTotal = others.reduce(
      (sum, item) => sum + (parseInt(item.amount) || 0), 0
    );
    return fixedFieldsTotal + othersTotal;
  };

  const deductionAvailable = () => {
    return Math.min(totalInvested(), deductionLimit);
  };

  return (
    <div className="calculator80c-main">
      <div className="calculator80c-formboxs">
        <h1>80c Calculator</h1>
        {/* First Row */}
        <div className="calc80c-row">
          <select
            value={financialYear}
            onChange={(e) => setFinancialYear(e.target.value)}
            className="calc80c-select"
          >
            <option value="">Select Financial Year</option>
            <option>2024-2025</option>
            <option>2023-2024</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="calc80c-select"
          >
            <option value="">Select Status</option>
            <option>Individual</option>
            <option>HUF</option>
          </select>
        </div>

        {/* Main Investment Fields */}
        <div className="calc80c-row">
          <div className="calc80c-inputgrp">
            <label>Life insurance premium paid</label>
            <div className="calc80c-inputbox">
              <span className="calc80c-currency"></span>
              <input
                type="number"
                name="lifeInsurance"
                value={investments.lifeInsurance}
                onChange={handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="calc80c-inputgrp">
            <label>Deposit in provident fund</label>
            <div className="calc80c-inputbox">
              <span className="calc80c-currency"></span>
              <input
                type="number"
                name="providentFund"
                value={investments.providentFund}
                onChange={handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="calc80c-inputgrp">
            <label>Investment in fixed deposit/Bonds</label>
            <div className="calc80c-inputbox">
              <span className="calc80c-currency"></span>
              <input
                type="number"
                name="fixedDeposit"
                value={investments.fixedDeposit}
                onChange={handleChange}
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Other Investment Fields */}
        {others.map((item, idx) => (
          <div className="calc80c-row" key={idx}>
            <select
              value={item.label}
              onChange={(e) => handleOtherChange(idx, 'label', e.target.value)}
              className="calc80c-select"
            >
              <option value="">Select Others</option>
              <option value="NPS">Investment in NSC</option>
              <option value="Tuition Fees">Tuition Fee of two children</option>
              <option value="Home Loan Principal">Repayment of housing loan (principal component)</option>
            </select>
            <div className="calc80c-inputbox calc80c-inputbox-small">
              <span className="calc80c-currency"></span>
              <input
                type="number"
                placeholder="Amount"
                value={item.amount}
                onChange={(e) => handleOtherChange(idx, 'amount', e.target.value)}
              />
            </div>
          </div>
        ))}

        {/* Add/Remove buttons */}
        <div className="calc80c-btnrow">
          <button type="button" className="add-btn" onClick={addMore}>Add More</button>
          <button type="button" className="remove-btn" onClick={remove}>Remove</button>
        </div>

        {/* Results Row */}
        <div className="calc80c-results">
          <div className="calc80c-resultbox">
            <div>Total amount invested</div>
            <h3>₹ {totalInvested()}</h3>
          </div>
          <div className="calc80c-resultbox">
            <div>Deduction available under section 80C</div>
            <h3>₹ {deductionAvailable()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator80c1;
