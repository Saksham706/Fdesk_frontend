import React, { useState } from "react";
import "./PrepaidTax.css";
import { Link } from 'react-router-dom'

const PrepaidTax = () => {
  const [advanceTaxEnabled, setAdvanceTaxEnabled] = useState(false);
  const [advanceTaxList, setAdvanceTaxList] = useState([{ id: Date.now() }]);

  const [tdsOtherEnabled, setTdsOtherEnabled] = useState(false);
  const [tdsOtherList, setTdsOtherList] = useState([{ id: Date.now() }]);

  const [tdsRentEnabled, setTdsRentEnabled] = useState(false);
  const [tdsRentList, setTdsRentList] = useState([{ id: Date.now() }]);

  const [tcsEnabled, setTcsEnabled] = useState(false);
  const [tcsList, setTcsList] = useState([{ id: Date.now() }]);

  const handleAdd = (setList) => {
    setList((prev) => [...prev, { id: Date.now() }]);
  };

  const handleRemove = (id, setList) => {
    setList((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <>
    <h2>ENTER TAXES PAID, TDS AND TCS</h2>
    <h5>Have you paid anything before?</h5>
    <div className="prepaid-wrapper">
      {/* Advance Tax Section */}
      <div className="section-header">
        <h2>Advance Tax and Self Assessment Tax Payment</h2>
        <div className="toggle-group right">
          <button
            className={!advanceTaxEnabled ? "active" : ""}
            onClick={() => setAdvanceTaxEnabled(false)}
          >No</button>
          <button
            className={advanceTaxEnabled ? "active" : ""}
            onClick={() => setAdvanceTaxEnabled(true)}
          >Yes</button>
        </div>
      </div>

      {advanceTaxEnabled &&
        advanceTaxList.map((tax, index) => (
          <div key={tax.id} className="section-card">
            <h4>Challan {index + 1}</h4>
            <input type="text" placeholder="BSR Code *" />
            <input type="date" placeholder="Date of Challan *" />
            <input type="text" placeholder="Challan No. *" />
            <input type="number" placeholder="Tax Amount *" />
            <div className="action-btns">
              <button onClick={() => handleRemove(tax.id, setAdvanceTaxList)}>-</button>
              <button onClick={() => handleAdd(setAdvanceTaxList)}>+</button>
            </div>
          </div>
        ))}

      {/* TDS Other Than Salary Section */}
      <div className="section-header">
        <h2>Details of TDS Paid on Other Than Salary</h2>
        <div className="toggle-group right">
          <button
            className={!tdsOtherEnabled ? "active" : ""}
            onClick={() => setTdsOtherEnabled(false)}
          >No</button>
          <button
            className={tdsOtherEnabled ? "active" : ""}
            onClick={() => setTdsOtherEnabled(true)}
          >Yes</button>
        </div>
      </div>

      {tdsOtherEnabled &&
        tdsOtherList.map((item, index) => (
          <div key={item.id} className="section-card">
            <h4>Entry {index + 1}</h4>
            <select>
              <option value="">Section under which TDS deducted *</option>
              <option value="194A">194A - Interest</option>
              <option value="194C">194C - Contracts</option>
            </select>
            <input type="text" placeholder="Name of Deductor *" />
            <input type="text" placeholder="TAN of Deductor *" />
            <input type="number" placeholder="Amount on which TDS deducted *" />
            <input type="number" placeholder="Total TDS deducted *" />
            <div className="action-btns">
              <button onClick={() => handleRemove(item.id, setTdsOtherList)}>-</button>
              <button onClick={() => handleAdd(setTdsOtherList)}>+</button>
            </div>
          </div>
        ))}

      {/* TDS on Rental Income Section */}
      <div className="section-header">
        <h2>Details of TDS Paid on Rental Income</h2>
        <div className="toggle-group right">
          <button
            className={!tdsRentEnabled ? "active" : ""}
            onClick={() => setTdsRentEnabled(false)}
          >No</button>
          <button
            className={tdsRentEnabled ? "active" : ""}
            onClick={() => setTdsRentEnabled(true)}
          >Yes</button>
        </div>
      </div>

      {tdsRentEnabled &&
        tdsRentList.map((item, index) => (
          <div key={item.id} className="section-card">
            <h4>Rental Entry {index + 1}</h4>
            <input type="text" placeholder="Name of Deductor *" />
            <input type="text" placeholder="PAN of Deductor *" />
            <input type="number" placeholder="Amount on which TDS deducted *" />
            <input type="number" placeholder="Total TDS deducted *" />
            <div className="action-btns">
              <button onClick={() => handleRemove(item.id, setTdsRentList)}>-</button>
              <button onClick={() => handleAdd(setTdsRentList)}>+</button>
            </div>
          </div>
        ))}

      {/* TCS Section */}
      <div className="section-header">
        <h2>Details of Tax Collected at Source (TCS)</h2>
        <div className="toggle-group right">
          <button
            className={!tcsEnabled ? "active" : ""}
            onClick={() => setTcsEnabled(false)}
          >No</button>
          <button
            className={tcsEnabled ? "active" : ""}
            onClick={() => setTcsEnabled(true)}
          >Yes</button>
        </div>
      </div>

      {tcsEnabled &&
        tcsList.map((item, index) => (
          <div key={item.id} className="section-card">
            <h4>TCS Entry {index + 1}</h4>
            <input type="text" placeholder="Name of Collector *" />
            <input type="text" placeholder="TAN of Collector *" />
            <input type="number" placeholder="Amount on which TCS collected *" />
            <input type="number" placeholder="Total TCS Collected *" />
            <div className="action-btns">
              <button onClick={() => handleRemove(item.id, setTcsList)}>-</button>
              <button onClick={() => handleAdd(setTcsList)}>+</button>
            </div>
          </div>
        ))}
        
    </div>
    <div className="footer-buttons">
      <Link to='/ca-request'><button className="ca-button">GET CA ASSISTED</button></Link>
      <Link to='/extradetail'><button className="continue-button">CONTINUE →</button></Link>
    </div>
    </>
  );
};

export default PrepaidTax;
