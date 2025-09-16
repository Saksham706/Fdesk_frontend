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

  // Close menu and navigate on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
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
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li className="dropdown">
          Products <span>▼</span>
          <ul className="dropdown-menu">
            <li><Link to='/file-return' onClick={handleLinkClick}>File Your Return</Link></li>
            <li><Link to='/form16' onClick={handleLinkClick}>Upload Form 16</Link></li>
            <li><Link to='/ca-request' onClick={handleLinkClick}>CA Assisted Tax filling</Link></li>
            <li><Link to='/tdssolution' onClick={handleLinkClick}>TDS Solution</Link></li>
            <li><Link to='/nritax' onClick={handleLinkClick}>NRI Taxes & ITR Filling</Link></li>
            <li><Link to='/taxConsltancy' onClick={handleLinkClick}>Tax Advisory Services</Link></li>
            <li><Link to='/capitalgaintax' onClick={handleLinkClick}>Capital Gain Tax Filling</Link></li>
            <li><Link to='/incometaxnotice' onClick={handleLinkClick}>Income Tax Notices</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          Tools <span>▼</span>
          <ul className="dropdown-menu tools-menu">
            <div className="tools-columns">
              <div className="tools-column">
                <li><Link to='/income-tax-calculator' onClick={handleLinkClick}>Income Tax Calculator</Link></li>
                <li><Link to='/hra-calculator' onClick={handleLinkClick}>HRA Calculator</Link></li>
                <li><Link to='/itr-eligibilty' onClick={handleLinkClick}>ITR Eligibility Checker</Link></li>
                <li><Link to='/section234f-calculator' onClick={handleLinkClick}>Calculator in Section 234F</Link></li>
                <li><Link to='/80c-Calculator' onClick={handleLinkClick}>80C Calculator</Link></li>
                <li><Link to='/crypto-currency-tax-calculator' onClick={handleLinkClick}>Cryptocurrency Tax Calculator</Link></li>
                <li><Link to='/simple-interest-calculator' onClick={handleLinkClick}>Simple Interest Calculator</Link></li>
                <li><Link to='/80dd-calculator' onClick={handleLinkClick}>80DD Calculator</Link></li>
                <li><Link to='/compound-interest-calculator' onClick={handleLinkClick}>Compound Interest Calculator</Link></li>
              </div>
              <div className="tools-column">
                <li><Link to='/form12BB' onClick={handleLinkClick}>Form 12BB</Link></li>
                <li><Link to='/gratuity-calculator' onClick={handleLinkClick}>Gratuity Calculator</Link></li>
                <li><Link to='/tds-calculator' onClick={handleLinkClick}>TDS Calculator</Link></li>
                <li><Link to='/transport-allowance-calculator' onClick={handleLinkClick}>Transport Allowance Calculator</Link></li>
                <li><Link to='/house-property-calculator' onClick={handleLinkClick}>House Property Calculator</Link></li>
                <li><Link to='/80d-calculator' onClick={handleLinkClick}>80D Calculator</Link></li>
                <li><Link to='/80tta-calculator' onClick={handleLinkClick}>80TTA Calculator</Link></li>
                <li><Link to='/80u-calculator' onClick={handleLinkClick}>80U Calculator</Link></li>
              </div>
            </div>
          </ul>
        </li>

        <li className="dropdown">
          Knowledge Center <span>▼</span>
          <ul className="dropdown-menu">
            <li><Link to='faq' onClick={handleLinkClick}>FAQ</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          Guides <span>▼</span>
          <ul className="dropdown-menu tools-menu">
            <div className="tools-columns">
              <div className="tools-column">
                <p>Income Tax Guides</p>
                <li><Link to='/aadhar' onClick={handleLinkClick}>Aadhar</Link></li>
                <li><Link to='/capital-gain-income' onClick={handleLinkClick}>Capital Gains Income</Link></li>
                <li><Link to='/E-Filling' onClick={handleLinkClick}>E-filling of ITR</Link></li>
                <li><Link to='/house-property' onClick={handleLinkClick}>House Property</Link></li>
                <li><Link to='/income-tax-Notice' onClick={handleLinkClick}>Income Tax Notics</Link></li>
                <li><Link to='/income-tax-refund' onClick={handleLinkClick}>Income Tax Refund</Link></li>
                <li><Link to='/income-tax-slabs' onClick={handleLinkClick}>Income Tax Slabs</Link></li>
                <li><Link to='/income-tax-verification' onClick={handleLinkClick}>Income Tax Verification</Link></li>
                <li><Link to='/pan-card' onClick={handleLinkClick}>Pan Card</Link></li>
                <li><Link to='/salary-incomeI' onClick={handleLinkClick}>Salary Income</Link></li>
                <li><Link to='/section80' onClick={handleLinkClick}>Section 80 Deductions</Link></li>
                <li><Link to='/TDS' onClick={handleLinkClick}>TDS</Link></li>
              </div>
              <div className="tools-column">
                <p> GST Guides</p>
                <li><Link to='/gst' onClick={handleLinkClick}>GST</Link></li>
                <li><Link to='/gst-system' onClick={handleLinkClick}>GST System </Link></li>
                <li><Link to='/gst-registration' onClick={handleLinkClick}>GST Registration</Link></li>
                <li><Link to='/input-tax-credit' onClick={handleLinkClick}>Input Tax Credit</Link></li>
                <li><Link to='/gst-procedure' onClick={handleLinkClick}>GST Procedure</Link></li>
                <li><Link to='/gst-return' onClick={handleLinkClick}>GST Returns</Link></li>
                <li><Link to='/gst-eway-bills' onClick={handleLinkClick}>GST eWay Bill</Link></li>
                <li><Link to='/gst-rates' onClick={handleLinkClick}>GST Rates</Link></li>
              </div>
            </div>
          </ul>
        </li>

        <li><Link to='contact' onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
