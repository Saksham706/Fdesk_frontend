import React, { useState } from 'react';
import './HraCalculator.css';

const HraCalculator = () => {
  const [isMetro, setIsMetro] = useState(false);
  const [basicSalary, setBasicSalary] = useState('');
  const [hraReceived, setHraReceived] = useState('');
  const [rentPaid, setRentPaid] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const calculateHRA = () => {
    const salary = parseFloat(basicSalary);
    const hra = parseFloat(hraReceived);
    const rent = parseFloat(rentPaid);

    if (isNaN(salary) || isNaN(hra) || isNaN(rent)) {
      alert('Please enter valid numbers in all fields.');
      return;
    }

    const tenPercentSalary = 0.1 * salary;
    const rentMinusTenPercent = rent - tenPercentSalary;
    const percentOfSalary = isMetro ? 0.5 * salary : 0.4 * salary;

    const hraExemption = Math.min(hra, rentMinusTenPercent, percentOfSalary);
    setResult(hraExemption > 0 ? hraExemption.toFixed(2) : 0);
  };

  return (
    <div className="hra-container">
      <div className="hra-left">
        <h2>Calculate Your HRA Exemption</h2>
        <p>
          The calculation is done by taking the salary as Basic Pay + D.A. (if considered for retirement benefits)
        </p>
        <ul>
          <li>Actual HRA received</li>
          <li>Rent paid less 10% of Salary</li>
          <li>
            40% of Salary (50% of Salary in Mumbai, Delhi, Chennai and Kolkata)
          </li>
        </ul>
      </div>

      <div className="hra-right">
        <div className="city-toggle">
          <label>
            <input
              type="radio"
              name="city"
              checked={isMetro}
              onChange={() => setIsMetro(true)}
            />
            Metro City <span className="small-text">(Delhi, Kolkata, Mumbai, Chennai)</span>
          </label>
          <label>
            <input
              type="radio"
              name="city"
              checked={!isMetro}
              onChange={() => setIsMetro(false)}
            />
            Other City <span className="small-text">(Other than Metro City)</span>
          </label>
        </div>

        <input
          type="number"
          placeholder="Basic Salary + DA + Commission Received"
          value={basicSalary}
          onChange={(e) => setBasicSalary(e.target.value)}
        />
        <input
          type="number"
          placeholder="HRA Received"
          value={hraReceived}
          onChange={(e) => setHraReceived(e.target.value)}
        />
        <input
          type="number"
          placeholder="Actual Rent Paid"
          value={rentPaid}
          onChange={(e) => setRentPaid(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={calculateHRA}>Submit</button>

        {result !== null && (
          <div className="hra-result">
            <strong>HRA Exemption: ₹{result}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default HraCalculator;
