import React from 'react';
import './CapitalGainGuide.css';

const capitalGainData = [
  {
    question: "What is a Capital Gain Tax?",
    answer: [
      "Capital Gains Tax is a tax levied on the profit earned from the sale or transfer of capital assets.",
      "The gain is the difference between the purchase price and the selling price of the asset.",
      "It applies to assets such as land, buildings, stocks, mutual funds, jewelry, and more.",
      "The tax is categorized into Short-Term Capital Gains (STCG) and Long-Term Capital Gains (LTCG) based on the holding period."
    ]
  },
  {
    question: "Types of Capital Gains: Short-Term vs. Long-Term",
    answer: [
      "Short-Term Capital Gains (STCG):",
      "• Arises when capital assets are sold within a short holding period.",
      "• For listed equity shares and mutual funds: holding period is less than 12 months.",
      "• For real estate and other assets: holding period is less than 36 months.",
      "• Taxed at 15% (in case of listed shares) or at applicable slab rates.",
      "",
      "Long-Term Capital Gains (LTCG):",
      "• Arises when capital assets are held for a longer duration.",
      "• Holding period: more than 12 months (shares), more than 36 months (property).",
      "• Taxed at 10% without indexation (shares) or 20% with indexation (other assets)."
    ]
  },
  {
    question: "What are Capital Assets?",
    answer: [
      "Capital assets refer to any kind of property held by an individual, whether for investment or personal use.",
      "Types include:",
      "• Real estate – residential or commercial property",
      "• Financial instruments – shares, mutual funds, bonds, debentures",
      "• Precious items – gold, jewelry, paintings",
      "• Intangible assets – patents, trademarks",
      "Excluded:",
      "• Stock-in-trade (used for business)",
      "• Personal items like furniture and clothes (except jewelry)"
    ]
  },
  {
    question: "What are the Different Types of Capital Assets?",
    answer: [
      "Based on holding period, capital assets are classified as:",
      "1. Short-Term Capital Assets:",
      "• Listed securities: held for less than 12 months",
      "• Immovable property: held for less than 36 months",
      "",
      "2. Long-Term Capital Assets:",
      "• Listed securities: held for more than 12 months",
      "• Immovable property: held for more than 36 months",
      "",
      "Based on nature:",
      "• Tangible: land, building, gold",
      "• Intangible: patents, trademarks"
    ]
  },
  {
    question: "How are Inherited Capital Assets Classified?",
    answer: [
      "• Inherited assets are treated as long-term regardless of holding period.",
      "• The period of holding is considered from the date the original owner acquired the asset.",
      "• Cost of acquisition is also taken as the cost incurred by the previous owner.",
      "• Capital gain arises only when the inherited asset is sold."
    ]
  },
  {
    question: "How to Calculate Capital Gains Tax?",
    answer: [
      "For both STCG and LTCG, the formula is:",
      "Capital Gain = Full Value of Consideration - (Cost of Acquisition + Cost of Improvement + Expenses on Transfer)",
      "",
      "Short-Term Capital Gain (STCG):",
      "• No indexation benefit",
      "• Taxed at 15% (for shares) or as per income slab",
      "",
      "Long-Term Capital Gain (LTCG):",
      "• Indexation benefit available (except for shares)",
      "• Taxed at 20% after indexation or 10% without indexation (for shares over ₹1 lakh)",
      "",
      "Steps:",
      "1. Identify asset type and holding period.",
      "2. Find purchase cost (indexed if LTCG).",
      "3. Deduct transfer and improvement expenses.",
      "4. Calculate gain and apply relevant tax rate."
    ]
  },
  {
    question: "Section 87A Rebate on Capital Gains",
    answer: [
      "• Section 87A provides a rebate of up to ₹12,500 for individuals with total income up to ₹5 lakh.",
      "• However, this rebate is NOT available on long-term capital gains under Section 112A (LTCG on listed equity shares, equity mutual funds).",
      "• If your total income consists only of LTCG above ₹5 lakh, you cannot claim this rebate.",
      "• Rebate is applicable only on normal taxable income (excluding special rates like LTCG)."
    ]
  },
  {
    question: "What are the Expenses Allowed for Capital Gains?",
    answer: [
      "Allowable expenses that can be deducted from sale price include:",
      "• Brokerage and commission",
      "• Stamp duty and registration charges",
      "• Legal fees related to sale",
      "• Cost of improvements made to the property (construction, renovation)",
      "• Expenses on advertising for sale",
      "• Transfer charges"
    ]
  },
  {
    question: "Examples of Capital Gain",
    answer: [
      "• You bought a plot of land for ₹10 lakh in 2010 and sold it in 2024 for ₹40 lakh → LTCG applies.",
      "• You bought mutual funds in 2022 and sold them in 2023 for a profit → STCG applies.",
      "• Sale of ancestral house that was inherited → LTCG after considering cost and holding period of original owner.",
      "• Sale of gold jewelry at a higher price than purchase cost → Capital gain arises."
    ]
  },
  {
    question: "Capital Gains Tax Rates",
    answer: [
      "Short-Term Capital Gains:",
      "• Listed shares/mutual funds: 15%",
      "• Other assets: Taxed as per slab",
      "",
      "Long-Term Capital Gains:",
      "• Listed shares/mutual funds (above ₹1 lakh): 10% without indexation",
      "• Property, gold, debt funds: 20% with indexation",
      "",
      "Special rates:",
      "• Non-residents: Different rates may apply",
      "• Equity-oriented ULIPs (Unit Linked Insurance Plans) are also taxed as LTCG post-2021"
    ]
  },
  {
    question: "Tax Exemption on Capital Gain",
    answer: [
      "1. Section 54: Exemption on sale of residential property if proceeds invested in another residential house.",
      "2. Section 54F: For sale of any long-term capital asset (except residential house) if full proceeds are invested in a house.",
      "3. Section 54EC: Investment in specified bonds (NHAI, REC) within 6 months – max ₹50 lakh.",
      "4. Section 54B: On sale of agricultural land if proceeds reinvested in new agricultural land.",
      "",
      "Conditions:",
      "• Must reinvest within prescribed time.",
      "• House must be located in India.",
      "• Bonds must be held for 5 years."
    ]
  },
  {
    question: "Capital Gain Account Scheme",
    answer: [
      "• If you are unable to reinvest capital gains before the due date of filing ITR, you can deposit the unutilized amount in a Capital Gains Account Scheme (CGAS).",
      "• This account must be opened with a designated bank (as per govt. notification).",
      "• Deposit must be made before filing the return.",
      "• Funds must be used only for specified purposes within the time limit (usually 2 or 3 years).",
      "• Unused funds after the period will be taxed as capital gains."
    ]
  },
  {
    question: "ITR Filing for Capital Gains",
    answer: [
      "• Individuals with capital gains must file ITR-2.",
      "• ITR-3 is used if you have business/profession income along with capital gains.",
      "• Details required:",
      "  - Sale consideration",
      "  - Purchase cost (indexed if LTCG)",
      "  - Date of purchase and sale",
      "  - Transfer expenses and improvements",
      "• Ensure accurate disclosure to avoid notices.",
      "• Capital gains statement from brokers or form 26AS helps in filing accurately."
    ]
  }
];

const CapitalGainGuide = () => {
    return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Capital Gain Guide</h1>
      {capitalGainData.map((item, index) => (
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

export default CapitalGainGuide;
