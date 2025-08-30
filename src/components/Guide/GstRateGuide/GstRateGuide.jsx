import React from 'react'

const GstRateGuide = () => {

     const sections = [
    {
      title: "GST Rates",
      content: [
        "GST rates in India are structured into multiple slabs: 0%, 5%, 12%, 18%, and 28%.",
        "Each slab corresponds to specific goods and services based on their nature and usage."
      ]
    },
    {
      title: "Types of GST",
      content: [
        "CGST - Central Goods and Services Tax",
        "SGST - State Goods and Services Tax",
        "IGST - Integrated Goods and Services Tax",
        "UTGST - Union Territory Goods and Services Tax"
      ]
    },
    {
      title: "GST Rate Changes in 2025 Based on 55th GST Council Meeting",
      content: [
        "Several rate adjustments were made for essential goods and services.",
        "Clarifications were provided for specific exemptions and ITC eligibility.",
        "Changes were implemented for textiles, fertilizers, and online gaming."
      ]
    },
    {
      title: "Common Nil Rated or 0% GST Products in India",
      content: [
        "Fresh vegetables and fruits",
        "Unbranded cereals and pulses",
        "Educational services and healthcare",
        "Books and newspaper printing"
      ]
    },
    {
      title: "Examples of Goods in India with 5% GST Rate",
      content: [
        "Packed food items like biscuits and branded flour",
        "Footwear priced below ₹1,000",
        "Railway transportation services"
      ]
    },
    {
      title: "Common Goods Featuring GST Rate of 12%",
      content: [
        "Mobile phones",
        "Butter and ghee",
        "Fruit juices",
        "Processed food items"
      ]
    },
    {
      title: "Examples of Goods and Services Featuring 18% GST Rate",
      content: [
        "Computers and software",
        "Air conditioners and refrigerators",
        "Restaurant services (non-AC or with alcohol)"
      ]
    },
    {
      title: "Goods in India with 28% GST Rate",
      content: [
        "Luxury items like cars and motorcycles",
        "Air-conditioners and refrigerators (certain models)",
        "Tobacco products and aerated drinks"
      ]
    },
    {
      title: "GST Cess",
      content: [
        "Cess is an additional tax on luxury and sin goods like tobacco and high-end cars.",
        "It is levied over and above the 28% GST rate."
      ]
    },
    {
      title: "GST Rate under Composition Scheme",
      content: [
        "1% for traders and manufacturers",
        "5% for restaurants (not serving alcohol)",
        "6% for service providers with turnover up to ₹50 lakhs"
      ]
    },
    {
      title: "GST Tax Rates on Common Items",
      content: [
        "Milk – 0%",
        "Edible oil – 5%",
        "Smartphones – 12%",
        "Televisions above 32 inches – 28%"
      ]
    },
    {
      title: "GST Tax Rate for Goods",
      content: [
        "Classified into Harmonized System of Nomenclature (HSN) codes",
        "Different HSN codes have specific rates based on commodity type"
      ]
    },
    {
      title: "GST Rates for Services",
      content: [
        "Banking and financial services – 18%",
        "Hotel rooms under ₹1,000 – 0%",
        "Hotel rooms between ₹1,000 to ₹7,500 – 12%",
        "Hotel rooms above ₹7,500 – 18%"
      ]
    },
    {
      title: "Exemptions under GST",
      content: [
        "Certain goods and services are completely exempt from GST under Section 11 of CGST Act",
        "Examples: Education, agricultural produce, public healthcare"
      ]
    },
    {
      title: "List of Goods Exempt from GST",
      content: [
        "Unbranded cereals, milk, fresh vegetables",
        "Khadi fabrics sold through KVIC"
      ]
    },
    {
      title: "List of GST Exemption on Services",
      content: [
        "Educational institutions from pre-school to higher secondary",
        "Healthcare services",
        "Services by RBI, IRDA, SEBI, EPFO, and GST Council"
      ]
    }
  ];

 return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">GST Rate Guide</h1>
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
}

export default GstRateGuide
