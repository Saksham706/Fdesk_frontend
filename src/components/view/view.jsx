import React from 'react';
import './view.css';
import { Link } from 'react-router-dom';
import itr_logo from '../../assets/Itr_logo.jpg'
import CA_logo from '../../assets/CA_logo.jpg'

const View = () => {
  return (
    <div className="dashboard-container">
      <h2>File your ITR from here</h2>
      <p className="subtitle">You can file your ITR easily, quickly and with maximum tax savings on FdeskSolutions</p>
      
      <div className="card-container">
        <div className="card card-left">
          <img src={itr_logo} alt="Document Icon" className="icon" />
          <h3>File it yourself</h3>
          <p>Trust us, you can file your tax return on your own. It’s Easy, quick and free when you file with FdeskSolutions on your own.</p>
          <Link to='/file-return'><button className="green-btn">File ITR Now</button></Link>
        </div>

        <div className="card card-right">
          <img src={CA_logo} alt="Person Icon" className="icon" />
          <h3>Get a personal eCA</h3>
          <p>Get your personal eCA to do tax filing for you. And it is personal, convenient & fast with maximum refund calculated for you.</p>
          <Link to='/ca-request'><button className="blue-btn">Hire your eCA</button></Link>
        </div>
      </div>
    </div>
  );
};

export default View;
