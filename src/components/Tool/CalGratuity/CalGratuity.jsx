import React, { useState } from 'react';
import './CalGratuity.css';

const CalGratuity = () => {
  const [employerType, setEmployerType] = useState('Government or Local Authorities');
  const [basicPay, setBasicPay] = useState('');
  const [da, setDa] = useState('');
  const [yearsOfService, setYearsOfService] = useState('');
  const [gratuityReceived, setGratuityReceived] = useState('');
  const [result, setResult] = useState(null);

  const calculateGratuity = () => {
    const basic = parseFloat(basicPay) || 0;
    const dearness = parseFloat(da) || 0;
    const years = parseFloat(yearsOfService) || 0;
    const received = parseFloat(gratuityReceived) || 0;
    const totalPay = basic + dearness;

    let exemption = 0;

    if (employerType === 'Government or Local Authorities') {
      exemption = received;
    } else {
      const gratuityLimit = 2000000;
      const gratuityCalc = (15 * totalPay * years) / 26;
      exemption = Math.min(received, gratuityCalc, gratuityLimit);
    }

    setResult(`Gratuity Exemption Amount: ₹${exemption.toFixed(2)}`);
  };

  return (
    <div className="gratuity-container">
      <div className="gratuity-left">
        <h2>Gratuity Calculator</h2>
        <p>This Gratuity Calculator lets you calculate Gratuity Tax Exemption.<br />
        Gratuity is the amount of payment made by an employer to an employee in appreciation of past services rendered.<br />
        The maximum gratuity tax exemption is Rs. 20,00,000.</p>
        <p><strong>Gratuity-Exemption is dependent upon two criteria:</strong></p>
        <ul>
          <li>Status of Employee, i.e., whether Government or Non-Government.</li>
          <li>Whether covered under Gratuity Act, 1972 or not.</li>
        </ul>
      </div>
      <div className="gratuity-right">
        <div className="form-group">
          <label>Employer Type:</label>
          <select value={employerType} onChange={(e) => setEmployerType(e.target.value)}>
            <option>Government or Local Authorities</option>
            <option>Non-Government - Covered under Gratuity Act</option>
            <option>Non-Government - Not Covered under Gratuity Act</option>
          </select>
        </div>

        <div className="form-group-inline">
          <div>
            <label>Basic Pay:</label>
            <input type="number" placeholder="Basic Pay" value={basicPay} onChange={(e) => setBasicPay(e.target.value)} />
          </div>
          <div>
            <label>Dearness Allowance:</label>
            <input type="number" placeholder="D.A." value={da} onChange={(e) => setDa(e.target.value)} />
          </div>
        </div>

        <div className="form-group-inline">
          <div>
            <label>Number of years of Service:</label>
            <input type="number" placeholder="Service Years" value={yearsOfService} onChange={(e) => setYearsOfService(e.target.value)} />
          </div>
          <div>
            <label>Gratuity received:</label>
            <input type="number" placeholder="Gratuity Received" value={gratuityReceived} onChange={(e) => setGratuityReceived(e.target.value)} />
          </div>
        </div>

        <button className="calculate-btn" onClick={calculateGratuity}>Calculate</button>

        {result && <div className="result-box">{result}</div>}
      </div>
    </div>
  );
};

export default CalGratuity; 
