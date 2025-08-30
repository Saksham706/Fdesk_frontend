import React from 'react';
import './SourceIncome.css';

const SourceIncome = () => {
  return (
    <div className="source-container">
      <h2 className="source-title">ITR-U: Fix Errors & Update Your Income Tax Return with Ease</h2>
      <p className="source-subtitle">
        Updated return (ITR-U), as the name suggests, under section 139(8A) allows individuals to rectify any filing
        errors and update the previous income tax return or file a missed return.
      </p>

      <div className="eligibility-box">
        <h3>Eligibility</h3>
        <p>An Updated Return can be filed if:</p>

        <div className="cards-grid">
          <div className="card">
            <div className="icon">📄</div>
            <p>Return previously not filed</p>
          </div>

          <div className="card">
            <div className="icon">📝</div>
            <p>Income not reported correctly</p>
          </div>

          <div className="card">
            <div className="icon">🤝</div>
            <p>Wrong heads of income chosen</p>
          </div>

          <div className="card">
            <div className="icon">📉</div>
            <p>Reduction of carried forward loss</p>
          </div>

          <div className="card">
            <div className="icon">📊</div>
            <p>Reduction of tax credit u/s 115JB/115JC</p>
          </div>

          <div className="card">
            <div className="icon">📈</div>
            <p>Wrong rate of tax</p>
          </div>
        </div>

        <p className="note">
          A taxpayer can file only one updated return for each assessment year(<strong>AY</strong>).
        </p>
      </div>
    </div>
  );
};

export default SourceIncome;
