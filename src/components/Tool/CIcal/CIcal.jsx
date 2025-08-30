import './CIcal.css';
import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CIcal = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [duration, setDuration] = useState('');
  const [frequency, setFrequency] = useState('');

  const freqMap = {
    yearly: 1,
    halfYearly: 2,
    quarterly: 4,
    monthly: 12,
    daily: 365
  };

  const n = freqMap[frequency] || 1;
  const principalNum = parseFloat(principal) || 0;
  const rateNum = parseFloat(rate) || 0;
  const durationNum = parseFloat(duration) || 0;
  const r = rateNum / 100;

  const A = principalNum * Math.pow((1 + r / n), n * durationNum);
  const totalInterest = A - principalNum;
  const progressValue = principalNum === 0 ? 0 : (totalInterest / A) * 100;

  return (
    <div className="ci-container">
      <h2>Compound Interest Calculator</h2>
      <p className="description">
        Compound interest comes up in almost every investment scenario. Enter your information and get the result instantly.
      </p>
      
      <div className="calculator-box">
        <div className="input-section">
          <label>Principal amount</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal"
          />

          <label>Rate of interest</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
          />

          <label>Compounding Frequency</label>
          <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="">Select</option>
            <option value="yearly">Yearly</option>
            <option value="halfYearly">Half-Yearly</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
            <option value="daily">Daily</option>
          </select>

          <label>Duration (Years)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter duration"
          />
        </div>

        <div className="circle-section">
          <CircularProgressbar
            value={progressValue}
            text={`${Math.round(progressValue)}%`}
            styles={buildStyles({
              textColor: "#333",
              pathColor: "#34c84a",
              trailColor: "#eee",
              textSize: "24px"
            })}
          />
        </div>
      </div>

      <div className="results">
        <p><strong>Periodical rate of interest:</strong> {(rateNum / n).toFixed(2)}%</p>
        <p><strong>Principal Amount:</strong> ₹ {principalNum.toLocaleString()}</p>
        <p><strong>Total Interest:</strong> ₹ {totalInterest.toFixed(2)}</p>
        <p><strong>Total Value:</strong> ₹ {A.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CIcal;
