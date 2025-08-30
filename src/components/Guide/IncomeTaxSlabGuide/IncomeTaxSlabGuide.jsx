import React from 'react';
import './IncomeTaxSlabGuide.css';

const SlabSection = ({ title, content }) => {
  return (
    <div className="slab-section">
      <h2 className="slab-question">{title}</h2>
      <ul className="slab-answer">
        {content.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const IncomeTaxSlabGuide = () => {
  const sections = [
    {
      title: 'What is Income Tax Slab?',
      content: [
        'Income tax slabs define how much tax individuals pay based on their income.',
        'They apply a progressive rate – higher income results in higher tax percentage.',
        'Different slabs apply under old and new regimes.'
      ]
    },
    {
      title: 'Income Tax Slab Under New Regime for FY 2025-26 (AY 2026-27)',
      content: [
        '₹0 – ₹3,00,000: Nil',
        '₹3,00,001 – ₹6,00,000: 5%',
        '₹6,00,001 – ₹9,00,000: 10%',
        '₹9,00,001 – ₹12,00,000: 15%',
        '₹12,00,001 – ₹15,00,000: 20%',
        'Above ₹15,00,000: 30%'
      ]
    },
    {
      title: 'Increased Tax Rebate Limits in Budget 2025',
      content: [
        'Rebate under Section 87A increased to ₹7,00,000 under new regime.',
        'Individuals with income up to ₹7L pay zero tax (after rebate).'
      ]
    },
    {
      title: 'Comparing the Tax Rates of Old Tax Regime and New Tax Regime',
      content: [
        'Old regime offers deductions and exemptions; tax rates higher.',
        'New regime offers lower tax rates but no major deductions.',
        'Best regime depends on your income structure and investments.'
      ]
    },
    {
      title: 'Old Tax Regime Vs. New Tax Regime',
      content: [
        'Old regime: Good for people claiming deductions like 80C, HRA, etc.',
        'New regime: Simple, beneficial if you don’t have many deductions.',
        'Can switch regimes annually for salaried taxpayers.'
      ]
    },
    {
      title: 'Senior and Super Senior Citizens Income Tax Slabs',
      content: [
        'Senior Citizens (60–80 yrs): No tax up to ₹3L (old regime).',
        'Super Senior Citizens (80+ yrs): No tax up to ₹5L (old regime).',
        'No special slab under new regime – same for all individuals.'
      ]
    },
    {
      title: 'Surcharge on Income Tax',
      content: [
        '10% on income > ₹50L up to ₹1 crore.',
        '15% on ₹1 crore to ₹2 crore.',
        '25% on ₹2 crore to ₹5 crore.',
        '37% on above ₹5 crore (old regime only).',
        'New regime caps surcharge at 25%.'
      ]
    },
    {
      title: 'Exemptions/Deductions Unavailable Under New Regime',
      content: [
        'HRA (House Rent Allowance)',
        'Standard Deduction',
        'Section 80C, 80D, etc.',
        'Leave Travel Allowance (LTA)',
        'Home loan interest (Section 24(b))'
      ]
    },
    {
      title: 'Exemptions/Deductions Available Under New Regime',
      content: [
        'Employer’s NPS contribution under 80CCD(2)',
        'EPF/VPF interest and maturity – tax exempt up to limits',
        'Gratuity, Leave encashment, and retirement benefits',
        'Transport Allowance for disabled employees',
        'Standard Deduction (from FY 2023–24 onward): ₹50,000'
      ]
    },
    {
      title: 'How Can You Calculate Income Tax Liability Under the Old Tax Regime?',
      content: [
        'Step 1: Calculate Gross Total Income.',
        'Step 2: Claim deductions under Chapter VI-A (e.g., 80C, 80D).',
        'Step 3: Apply slab rates for old regime.',
        'Step 4: Add cess (4%) and surcharge (if applicable).'
      ]
    },
    {
      title: 'Example: How to Calculate Income Tax from Slabs?',
      content: [
        'Total Income: ₹9,00,000',
        'Under new regime:',
        '0 – 3L: 0%',
        '3 – 6L: 5% = ₹15,000',
        '6 – 9L: 10% = ₹30,000',
        'Total = ₹45,000 + 4% cess = ₹46,800'
      ]
    },
    {
      title: 'Important Points While Opting for New Tax Regime',
      content: [
        'Must opt at the time of filing ITR if not salaried.',
        'Once chosen for business/profession income, can’t switch back easily.',
        'Check which regime saves more using online tax calculators.'
      ]
    }
  ];

    return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Income Tax Slabs Guide</h1>
      {sections.map((item, index) => (
        <div key={index} className="itr-guide-box">
          <h3 className="itr-question">{item.title}</h3>
          <ul className="itr-answer">
            {item.content.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IncomeTaxSlabGuide;
