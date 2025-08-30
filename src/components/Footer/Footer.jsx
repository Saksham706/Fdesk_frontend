import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact">
          <span>📞 +91 9582042440</span>
          <span> 📧 contact@fdesk.in</span>
        </div>
      </div>

      <div className="footer-columns-6">
        {/* Column 1 */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Tax Glossary</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li>File Income Tax Return</li>
            <li>Upload Form 16</li>
            <li>CA Assisted ITR Filing</li>
            <li>TDS Solution</li>
            <li>NRI Taxes & ITR Filing</li>
            <li>Tax Advisory Services</li>
            <li>Capital Gain Tax Filing</li>
            <li>Income Tax Notices</li>
          </ul>
        </div>

        {/* Column 3 (Tax Tools - divided into 3 mini-columns inside) */}
        <div className="footer-column">
          <h4>Tax Tools</h4>
          <div className="tax-tools-grid">
            <ul>
              <li>Income Tax Calculator</li>
              <li>House Property Calculator</li>
              <li>Rent Receipt Generator</li>
              <li>Tax Saving Calculator</li>
              <li>Simple Interest Calculator</li>
              <li>80TTA Calculator</li>
              <li>Compound Interest Calculator</li>
            </ul>
            <ul>
              <li>Form 12BB</li>
              <li>HRA Calculator</li>
              <li>TDS Calculator</li>
              <li>Calculator on Section 234F</li>
              <li>SSY Calculator</li>
              <li>Cryptocurrency Tax Calculator</li>
              <li>80DD Calculator</li>
            </ul>
            <ul>
              <li>Gratuity Calculator</li>
              <li>Transport Allowance Calculator</li>
              <li>ITR Eligibility Checker</li>
              <li>80D Calculator</li>
              <li>80U Calculator</li>
            </ul>
          </div>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h4>Services for Individuals</h4>
          <ul>
            <li>Income Tax Returns Filing</li>
            <li>TDS Returns Filing</li>
            <li>Tax Planning & Saving</li>
            <li>Digital Signature Certificate</li>
            <li>PAN Card Services</li>
          </ul>

          <h4>Services for Businesses</h4>
          <ul>
            <li>GST Registration</li>
            <li>Income Tax Returns filing</li>
            <li>GST Returns filing</li>
            <li>TDS Returns filing</li>
            <li>Company Registration</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="footer-column">
          <h4>Income Tax Guides</h4>
          <ul>
            <li>Income Tax Return</li>
            <li>Deductions</li>
            <li>Form 16</li>
            <li>Rent Receipt</li>
            <li>House Property tax</li>
            <li>How to Link Aadhaar with PAN</li>
            <li>Income Tax Slab Rate 2023-24</li>
            <li>Pan Card</li>
            <li>Aadhar</li>
            <li>TDS</li>
            <li>Capital Gains Income</li>
            <li>e-verify Income Tax Return</li>
            <li>Revised Income Tax Return</li>
          </ul>
        </div>

        {/* Column 6 */}
        <div className="footer-column">
          <h4>GST Guides</h4>
          <ul>
            <li>GST</li>
            <li>GST System</li>
            <li>GST Registration</li>
            <li>Input Tax Credit</li>
            <li>GST Procedure</li>
            <li>GST Returns</li>
            <li>GST eWay Bill</li>
            <li>GST Rates</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-singleline">
        <span>ISO 27001:2013 | ISO 9001:2015</span>
        <span> | </span>
        <a href="#">Terms & Conditions</a>
        <span> | </span>
        <a href="#">Privacy Policy</a>
        <span> | </span>
        <span>© 2025 FdeskSolutions. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
