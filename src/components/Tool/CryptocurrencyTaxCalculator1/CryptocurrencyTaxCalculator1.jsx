import React, { useState } from 'react';
import './CryptocurrencyTaxCalculator.css';

const CryptocurrencyTaxCalculator1 = () => {
  const [financialYear, setFinancialYear] = useState('');
  const [entries, setEntries] = useState([{ sale: 0, cost: 0 }]);
  const [gain, setGain] = useState(null);
  const [tax, setTax] = useState(null);

  const handleEntryChange = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index][field] = value === '' ? '' : parseFloat(value);
    setEntries(newEntries);
  };

  const handleAddEntry = () => {
    setEntries([...entries, { sale: 0, cost: 0 }]);
  };

  const handleRemoveEntry = () => {
    if (entries.length > 1) {
      const newEntries = [...entries];
      newEntries.pop();
      setEntries(newEntries);
    }
  };

  const calculateTaxableGain = () => {
    const totalSale = entries.reduce((sum, e) => sum + e.sale, 0);
    const totalCost = entries.reduce((sum, e) => sum + e.cost, 0);
    const totalGain = totalSale - totalCost;
    setGain(totalGain);

    // Apply flat 30% tax if gain is positive
    const computedTax = totalGain > 0 ? totalGain * 0.3 : 0;
    setTax(computedTax);
  };

  return (
    <div className="crypto-container">
      <h1>Crypto Tax Calculator - Taxation on Cryptocurrency, Bitcoin, Ethereum</h1>
      <p>If you have questions like "How is my cryptocurrency taxed?" or "How are my gains and losses taxed?" this tool will help you estimate your tax.</p>

      <select
        value={financialYear}
        onChange={(e) => setFinancialYear(e.target.value)}
        className="drop-down"
      >
        <option value="">Select Financial Year</option>
        <option value="2022-23">2022-23</option>
        <option value="2023-24">2023-24</option>
        <option value="2024-25">2024-25</option>
      </select>

      {entries.map((entry, index) => (
        <div className="entry-row" key={index}>
          <input
            type="number"
            placeholder="Sale value of crypto currency"
            value={entry.sale}
            onChange={(e) => handleEntryChange(index, 'sale', e.target.value)}
          />
          <input
            type="number"
            placeholder="Cost of acquisition of crypto currency"
            value={entry.cost}
            onChange={(e) => handleEntryChange(index, 'cost', e.target.value)}
          />
        </div>
      ))}

      <div className="button-group">
        <button onClick={handleAddEntry} className="add">Add More</button>
        <button onClick={handleRemoveEntry} className="remove">Remove</button>
      </div>

      <button onClick={calculateTaxableGain} className="calculate">Calculate</button>

      {gain !== null && (
        <div className="results">
          <div className="result-card">
            <p>Total Gain or Loss</p>
            <h2 className={gain < 0 ? "loss" : "gain"}>
              {gain < 0 ? '-' : ''} ₹ {Math.abs(gain).toLocaleString('en-IN')}
            </h2>
          </div>
          <div className="result-card">
            <p>Tax on crypto currency (including cess)</p>
            <h2>₹ {tax.toLocaleString('en-IN')}</h2>
          </div>
        </div>
      )}

      {gain < 0 && (
        <div className="note">
          Loss from crypto currency is not allowed to set off from any other income.
        </div>
      )}
    </div>
  );
};

export default CryptocurrencyTaxCalculator1;
