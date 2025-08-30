import React from 'react';
import './SalaryGuide.css';

const salaryFaqs = [
  {
    question: "What are the Components of Salary?",
    answer: [
      "Basic Salary: Fixed portion forming the core of your salary structure.",
      "House Rent Allowance (HRA): Given to employees to meet rental expenses.",
      "Dearness Allowance (DA): Paid to offset inflation.",
      "Conveyance Allowance: Covers travel from home to office.",
      "Medical Allowance: For medical expenses (up to ₹15,000 exempt prior to FY 2018-19).",
      "Leave Travel Allowance (LTA): Covers travel within India, exempt subject to conditions.",
      "Special Allowance: Fully taxable component for various purposes.",
      "Performance Bonuses/Incentives: Variable component based on targets.",
      "Provident Fund (PF): Employer and employee contributions towards retirement.",
    ],
  },
  {
    question: "What are Retirement Benefits for Salaried Individuals?",
    answer: [
      "Employees’ Provident Fund (EPF): 12% of basic salary contributed by both employee and employer. Interest is tax-free within limits.",
      "Gratuity: Paid if employee serves more than 5 years. Tax-exempt up to ₹20 lakhs.",
      "National Pension Scheme (NPS): Optional retirement scheme with tax benefits under Sec 80CCD.",
      "Leave Encashment: Accumulated paid leave encashed at retirement; partially tax-exempt.",
      "Superannuation: Employer-contributed pension fund. Tax-exempt up to ₹1.5 lakh under 80C.",
    ],
  },
  {
    question: "How is Income Tax Calculated on Salary?",
    answer: [
      "Step 1: Compute Gross Salary (Basic + HRA + Allowances + Bonus).",
      "Step 2: Deduct Exemptions (e.g., HRA, LTA).",
      "Step 3: Apply Standard Deduction of ₹50,000 (as per FY 2024-25).",
      "Step 4: Deduct Professional Tax (if applicable).",
      "Step 5: Arrive at Net Taxable Salary.",
      "Step 6: Add Other Income (Interest, Rent, etc.).",
      "Step 7: Deduct Tax Saving Deductions (under 80C, 80D, NPS, etc.).",
      "Step 8: Apply Income Tax Slabs based on chosen regime (Old or New).",
      "Step 9: Deduct TDS already paid, and pay remaining tax if applicable.",
    ],
  },
  {
    question: "How to Save Income Tax on Salary?",
    answer: [
      "Opt for deductions under Section 80C (up to ₹1.5 lakhs): PPF, ELSS, LIC, PF, Tuition Fees, etc.",
      "Health insurance premiums under Section 80D (up to ₹25,000/₹50,000).",
      "Claim HRA exemption if staying in rented accommodation.",
      "Claim LTA exemption for eligible domestic travel.",
      "Invest in NPS (additional ₹50,000 deduction under Section 80CCD(1B)).",
      "Home loan interest under Section 24(b) and principal under Section 80C.",
      "Education loan interest under Section 80E.",
      "Use meal coupons, fuel reimbursements, and phone/internet reimbursements to reduce taxable salary.",
      "Switch to the New Tax Regime only if you don’t claim major deductions/exemptions.",
    ],
  },
];

const SalaryGuide = () => {
    return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Salary Income Guide</h1>
      {salaryFaqs.map((item, index) => (
        <div key={index} className="itr-guide-box">
          <h3 className="itr-question">{item.question}</h3>
          <ul className="itr-answer">
            {item.answer.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SalaryGuide;
