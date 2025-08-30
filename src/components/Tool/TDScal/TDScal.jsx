import React, { useState } from 'react';
import './TDScal.css';

const TDScal = () => {
  const [recipientType, setRecipientType] = useState('Individual/HUF/Sole Proprietor');
  const [panAvailable, setPanAvailable] = useState('Yes');
  const [amount, setAmount] = useState('');
  const [natureOfPayment, setNatureOfPayment] = useState('');
  const [result, setResult] = useState(null);

  const tdsRates = {
    'Professional Fees': { withPAN: 0.10, withoutPAN: 0.20 },
    'Contract': { withPAN: 0.01, withoutPAN: 0.20 },
    'Commission': { withPAN: 0.05, withoutPAN: 0.20 },
    'Rent': { withPAN: 0.10, withoutPAN: 0.20 },
    'Interest': { withPAN: 0.10, withoutPAN: 0.20 },
  };

  const handleCalculate = () => {
    const payment = parseFloat(amount) || 0;
    const rateInfo = tdsRates[natureOfPayment];
    if (!rateInfo) return setResult('Please select a valid nature of payment.');

    const rate = panAvailable === 'Yes' ? rateInfo.withPAN : rateInfo.withoutPAN;
    const tdsAmount = payment * rate;
    setResult(`TDS Deducted: ₹${tdsAmount.toFixed(2)} (${(rate * 100).toFixed(2)}%)`);
  };

  return (
    <div className="tds-container">
      <div className="tds-left">
        <h2>TDS Calculator</h2>
        <p>Tax Deducted at Source (TDS) is a specified amount deducted from payments—such as salary, rent, commission, interest, etc.—at the time of payment.</p>
        <p>This calculator helps calculate TDS for individuals, HUFs, sole proprietors, and others as per the latest rules.</p>
      </div>

      <div className="tds-right">
        <div className="financial-year">Financial Year : 2025-26</div>

        <div className="form-group-inline">
          <label>Recipient:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="recipient" value="Individual/HUF/Sole Proprietor" checked={recipientType === 'Individual/HUF/Sole Proprietor'} onChange={(e) => setRecipientType(e.target.value)} />
              Individual/HUF/Sole Proprietor
            </label>
            <label>
              <input type="radio" name="recipient" value="Others" checked={recipientType === 'Others'} onChange={(e) => setRecipientType(e.target.value)} />
              Others
            </label>
          </div>
        </div>

        <div className="form-group-inline">
          <div>
            <label>PAN of Recipient is Available:</label>
            <select value={panAvailable} onChange={(e) => setPanAvailable(e.target.value)}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label>Amount of Payment:</label>
            <input type="number" placeholder="Amount of Payment" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
        </div>

        <div className="form-group">
          <label>Nature of Payment :</label>
          <select value={natureOfPayment} onChange={(e) => setNatureOfPayment(e.target.value)}>
            <option value="">---Select---</option>
            <option value="Professional Fees">Professional Fees</option>
            <option value="Contract">Contract</option>
            <option value="Commission">Commission</option>
            <option value="Rent">Rent</option>
            <option value="Interest">Interest</option>
          </select>
        </div>

        <button className="calculate-btn" onClick={handleCalculate}>Calculate</button>

        {result && <div className="result-box">{result}</div>}
      </div>
    </div>
  );
};

export default TDScal;
