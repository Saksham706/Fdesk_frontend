import React, { useState } from 'react';
import './SI1.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SI1 = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(1);
  const [time, setTime] = useState(0);
  const [unit, setUnit] = useState('');
  
  const duration = unit === 'Year(s)' ? time : unit === 'Month(s)' ? time / 12 : unit === 'Day(s)' ? time / 365 : 0;

  const interest = (principal * rate * duration) / 100;
  const total = Number(principal) + interest;
  const percentageInterest = principal === 0 ? 0 : (interest / total) * 100;

  return (
    <div className="si-container">
      <h2>Simple Interest Calculator</h2>
      <p>Calculate your interest earned on your investments and simplify your financial planning using our simple interest calculator</p>

      <div className="si-content">
        <div className="si-inputs">
          <label>Principal amount</label>
         <input
            type="number"
            value={principal === 0 ? '' : principal}
            onChange={(e) => setPrincipal(e.target.value === '' ? 0 : Number(e.target.value))}
            />

          <label>Rate of interest</label>
          <input
            type="number"
            value={rate === 0 ? '' : rate}
            onChange={(e) => setRate(e.target.value === '' ? 0 : Number(e.target.value))}
            />

          <label>Period unit</label>
          <select onChange={(e) => setUnit(e.target.value)} value={unit}>
            <option value="">Select</option>
            <option value="Day(s)">Day(s)</option>
            <option value="Month(s)">Month(s)</option>
            <option value="Year(s)">Year(s)</option>
          </select>

          <label>Duration</label>
         <input
            type="number"
            value={time === 0 ? '' : time}
            onChange={(e) => setTime(e.target.value === '' ? 0 : Number(e.target.value))}
            />
        </div>

        <div className="si-chart">
          <CircularProgressbar
            value={percentageInterest}
            text={`${Math.round(percentageInterest)}%`}
            styles={buildStyles({
              pathColor: `green`,
              textColor: 'black',
              trailColor: '#d6d6d6',
            })}
          />
          <div className="chart-legend">
            <span className="dot principal"></span> Principal Amount
            <span className="dot interest"></span> Total Interest
          </div>
        </div>
      </div>

      <div className="si-results">
        <p><strong>Principal Amount:</strong> ₹ {principal}</p>
        <p><strong>Total Interest:</strong> ₹ {interest.toFixed(2)}</p>
        <p><strong>Total Value:</strong> ₹ {total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SI1;
