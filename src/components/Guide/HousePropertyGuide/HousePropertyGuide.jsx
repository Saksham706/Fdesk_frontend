import React from 'react';
import './HousePropertyGuide.css';

const housePropertyData = [
  {
    question: "What is income from house property?",
    answer: [
      "It refers to the income earned from letting out a residential or commercial property.",
      "Even if the property is not rented but deemed let out (e.g., second home), notional income is taxable.",
      "Only the Net Annual Value (NAV) is taxable under 'Income from House Property'."
    ]
  },
  {
    question: "What are the Conditions for the Taxability of Income From House Property?",
    answer: [
      "The property must consist of buildings or land appurtenant thereto.",
      "The taxpayer must be the owner of the property.",
      "The property should not be used for business or profession carried on by the taxpayer."
    ]
  },
  {
    question: "Steps to Compute Income from House Property",
    answer: [
      "1. Determine Gross Annual Value (GAV).",
      "2. Deduct municipal taxes paid by owner to get Net Annual Value (NAV).",
      "3. Deduct 30% standard deduction on NAV.",
      "4. Deduct interest on borrowed capital (home loan interest).",
      "5. Result = Income from House Property."
    ]
  },
  {
    question: "Computation of Income from House Property",
    answer: [
      "Income = Net Annual Value - Standard Deduction (30%) - Interest on home loan.",
      "If NAV is negative (due to high interest), it results in a loss from house property (can be set off)."
    ]
  },
  {
    question: "How to Calculate Income for Self-Occupied House Property?",
    answer: [
      "Gross Annual Value (GAV) = ₹0 (no rent earned).",
      "Municipal taxes = ₹0 (not applicable).",
      "Standard deduction = ₹0 (since GAV is zero).",
      "Deduction under Section 24(b) = Interest on home loan (max ₹2 lakh).",
      "Resulting income = -₹2 lakh (loss set off allowed)."
    ]
  },
  {
    question: "How to Calculate Income from LetOut House Property?",
    answer: [
      "1. Calculate GAV = Higher of Actual Rent or Reasonable Rent.",
      "2. Subtract municipal taxes paid.",
      "3. Subtract 30% standard deduction from NAV.",
      "4. Subtract interest on home loan (no max limit).",
      "5. Final amount is taxable as 'Income from House Property'."
    ]
  },
  {
    question: "What are the Deductions for the Calculation of Income from House Property?",
    answer: [
      "1. Standard deduction = 30% of Net Annual Value (NAV).",
      "2. Interest on borrowed capital (home loan):",
      "   • Max ₹2 lakh for self-occupied.",
      "   • No limit for let-out properties.",
      "3. Municipal taxes (if paid by owner)."
    ]
  },
  {
    question: "What are the Tax Benefits on Home Loan?",
    answer: [
      "1. Section 24(b): Interest on home loan up to ₹2 lakh (self-occupied) is deductible.",
      "2. Section 80C: Principal repayment up to ₹1.5 lakh is deductible.",
      "3. Section 80EE/80EEA: Additional interest deduction for first-time buyers (conditions apply)."
    ]
  },
  {
    question: "What are the income tax deductions for joint owners on home loans?",
    answer: [
      "Both co-owners can claim:",
      "• Up to ₹2 lakh interest deduction under Section 24(b) individually.",
      "• Up to ₹1.5 lakh principal deduction under Section 80C individually.",
      "• Condition: Each must be co-owner and co-borrower of the loan."
    ]
  },
  {
    question: "How to Save Tax on Income from House Property?",
    answer: [
      "• Claim all eligible deductions (Section 24, 80C, etc.).",
      "• Rent out vacant property to avoid notional tax.",
      "• Opt for joint ownership to split tax benefits.",
      "• File on time to claim set-off of loss from house property."
    ]
  },
  {
    question: "Can you claim both HRA and home loan deductions?",
    answer: [
      "Yes, you can claim both if:",
      "• You live in a rented house (HRA claim) AND",
      "• You own another house and are paying its EMI (home loan benefit).",
      "• You must provide valid proof of rent paid and home loan interest."
    ]
  },
  {
    question: "Important Terminologies Related to Income from House Property",
    answer: [
      "• Gross Annual Value (GAV): Rent received or expected.",
      "• Net Annual Value (NAV): GAV – municipal taxes.",
      "• Standard Deduction: Flat 30% of NAV.",
      "• Self-Occupied Property: House used by you, not rented.",
      "• Let-Out Property: Rented house.",
      "• Deemed Let-Out: Second home not rented but considered let-out."
    ]
  }
];

const HousePropertyGuide = () => {
    return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">House Property Guide</h1>
      {housePropertyData.map((item, index) => (
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

export default HousePropertyGuide;
