import React from 'react';
import './Penalties.css';

const Penalties = () => {
  return (
    <div className="penalties-container">
      <h2 className="penalties-heading">Deadline and Penalties</h2>
      <p className="penalties-description">
        The time limit to file an updated return u/s 139 (8A) is extended to 4 years from 2 years starting April 2025 (as announced in budget 2025–26) from the end of the relevant assessment year but with additional penalties. However, utilities to file the same are yet to come
      </p>

      <div className="penalties-table">
        <div className="table-header">
          <div className="table-col">ITR-U filed within</div>
          <div className="table-col">Additional Tax</div>
        </div>

        <div className="table-row">
          <div className="table-col">12 months from the end of the relevant AY</div>
          <div className="table-col">25% of additional tax (tax + interest)</div>
        </div>

        <div className="table-row">
          <div className="table-col">24 months from the end of the relevant AY</div>
          <div className="table-col">50% of additional tax (tax + interest)</div>
        </div>

        <div className="table-row">
          <div className="table-col">36 months from the end of the relevant AY</div>
          <div className="table-col">60% of additional tax (tax + interest)</div>
        </div>

        <div className="table-row">
          <div className="table-col">48 months from the end of the relevant AY</div>
          <div className="table-col">70% of additional tax (tax + interest)</div>
        </div>
      </div>
    </div>
  );
};

export default Penalties;
