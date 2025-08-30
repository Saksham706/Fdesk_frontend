import React, { useState } from "react";
import "./TransportAllowanceCalculator.css";

const TransportAllowanceCalculator = () => {
  const [amount, setAmount] = useState("");
  const [isHandicapped, setIsHandicapped] = useState(null);
  const [taxFreeAmount, setTaxFreeAmount] = useState(null);
  const [taxableAllowance, setTaxableAllowance] = useState(null);

  const DISABLED_LIMIT = 3200 * 12;
  const NORMAL_LIMIT = 1600 * 12;

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!amount || isHandicapped === null) return;

    const yearlyAmount = parseFloat(amount);
    const exemptionLimit = isHandicapped ? DISABLED_LIMIT : NORMAL_LIMIT;

    const taxFree = Math.min(yearlyAmount, exemptionLimit);
    const taxable = yearlyAmount > exemptionLimit ? yearlyAmount - exemptionLimit : 0;

    setTaxFreeAmount(taxFree);
    setTaxableAllowance(taxable);
  };

  return (
    <div className="ta-bg">
      <div className="ta-container">
        {/* Eligibility Info */}
        <div className="ta-eligibility">
          <h3>Who is eligible for Transport Allowance?</h3>
          <p>
            Transport allowance is granted to the employees to meet their expenditure made on commuting between their residence and place of duty and to the employees working in the transport business.
          </p>
        </div>

        {/* Calculator Form */}
        <form className="ta-form" onSubmit={handleCalculate}>
          <div className="ta-form-group">
            <label>Total Yearly Transport allowance :</label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              min="0"
              step="1"
              placeholder="Amount"
              required
            />
          </div>
          <div className="ta-form-group">
            <label>Whether the Assessee is handicapped</label>
            <div className="ta-radio-group">
              <label>
                <input
                  type="radio"
                  name="handicapped"
                  value="yes"
                  checked={isHandicapped === true}
                  onChange={() => setIsHandicapped(true)}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="handicapped"
                  value="no"
                  checked={isHandicapped === false}
                  onChange={() => setIsHandicapped(false)}
                  required
                />
                No
              </label>
            </div>
          </div>
          <button type="submit" className="ta-calculate-btn">
            Calculate
          </button>
        </form>

        {/* Results */}
        <div className="ta-result">
          <div className="ta-circle">
            <span className="ta-taxfree-title">Tax Free Amount</span>
            <span className="ta-taxfree-value">
              ₹{taxFreeAmount !== null ? taxFreeAmount.toLocaleString() : "--"}
            </span>
          </div>
          <div className="ta-taxable-text">
            Taxable Transport Allowance
            <div className="ta-taxable-value">
              ₹{taxableAllowance !== null ? taxableAllowance.toLocaleString() : "--"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportAllowanceCalculator;
