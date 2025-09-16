import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span><strong>Fdesk</strong><span className="green-text">Solutions</span></span>
      </div>

      {/* Mobile Hamburger */}
      <button 
        className="mobile-menu-icon" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li className="dropdown">
          Products <span>▼</span>
          <ul className="dropdown-menu">
            <li><Link to='/file-return'>File Your Return</Link></li>
            <li><Link to='/form16'>Upload Form 16</Link></li>
            <li><Link to='/ca-request'>CA Assisted Tax filling</Link></li>
            <li><Link to='/tdssolution'>TDS Solution</Link></li>
            <li><Link to='/nritax'>NRI Taxes & ITR Filling</Link></li>
            <li><Link to='/taxConsltancy'>Tax Advisory Services</Link></li>
            <li><Link to='/capitalgaintax'>Capital Gain Tax Filling</Link></li>
            <li><Link to='/incometaxnotice'>Income Tax Notices</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          Tools <span>▼</span>
          <ul className="dropdown-menu tools-menu">
            <div className="tools-columns">
              <div className="tools-column">
                <li><Link to='/income-tax-calculator'>Income Tax Calculator</Link></li>
                <li><Link to='/hra-calculator'>HRA Calculator</Link></li>
                <li><Link to='/itr-eligibilty'>ITR Eligibility Checker</Link></li>
                <li><Link to='/section234f-calculator'>Calculator in Section 234F</Link></li>
                <li><Link to='/80c-Calculator'>80C Calculator</Link></li>
                <li><Link to='/crypto-currency-tax-calculator'>Cryptocurrency Tax Calculator</Link></li>
                <li><Link to='/simple-interest-calculator'>Simple Interest Calculator</Link></li>
                <li><Link to='/80dd-calculator'>80DD Calculator</Link></li>
                <li><Link to='/compound-interest-calculator'>Compound Interest Calculator</Link></li>
              </div>
              <div className="tools-column">
                <li><Link to='/form12BB'>Form 12BB</Link></li>
                <li><Link to='/gratuity-calculator'>Gratuity Calculator</Link></li>
                <li><Link to='/tds-calculator'>TDS Calculator</Link></li>
                <li><Link to='/transport-allowance-calculator'>Transport Allowance Calculator</Link></li>
                <li><Link to='/house-property-calculator'>House Property Calculator</Link></li>
                <li><Link to='/80d-calculator'>80D Calculator</Link></li>
                <li><Link to='/80tta-calculator'>80TTA Calculator</Link></li>
                <li><Link to='/80u-calculator'>80U Calculator</Link></li>
              </div>
            </div>
          </ul>
        </li>

        <li className="dropdown">
          Knowledge Center <span>▼</span>
          <ul className="dropdown-menu">
            <li><Link to='faq'>FAQ</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          Guides <span>▼</span>
          <ul className="dropdown-menu tools-menu">
            <div className="tools-columns">
              <div className="tools-column">
                <p>Income Tax Guides</p>
                <li><Link to='/aadhar'>Aadhar</Link></li>
                <li><Link to='/capital-gain-income'>Capital Gains Income</Link></li>
                <li><Link to='/E-Filling'>E-filling of ITR</Link></li>
                <li><Link to='/house-property'>House Property</Link></li>
                <li><Link to='/income-tax-Notice'>Income Tax Notics</Link></li>
                <li><Link to='/income-tax-refund'>Income Tax Refund</Link></li>
                <li><Link to='/income-tax-slabs'>Income Tax Slabs</Link></li>
                <li><Link to='/income-tax-verification'>Income Tax Verification</Link></li>
                <li><Link to='/pan-card'>Pan Card</Link></li>
                <li><Link to='/salary-incomeI'>Salary Income</Link></li>
                <li><Link to='/section80'>Section 80 Deductions</Link></li>
                <li><Link to='/TDS'>TDS</Link></li>
              </div>
              <div className="tools-column">
                <p> GST Guides</p>
                <li><Link to='/gst'>GST</Link></li>
                <li><Link to='/gst-system'>GST System </Link></li>
                <li><Link to='/gst-registration'>GST Registration</Link></li>
                <li><Link to='/input-tax-credit'>Input Tax Credit</Link></li>
                <li><Link to='/gst-procedure'>GST Procedure</Link></li>
                <li><Link to='/gst-return'>GST Returns</Link></li>
                <li><Link to='/gst-eway-bills'>GST eWay Bill</Link></li>
                <li><Link to='/gst-rates'>GST Rates</Link></li>
              </div>
            </div>
          </ul>
        </li>

        <li><Link to='contact'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
