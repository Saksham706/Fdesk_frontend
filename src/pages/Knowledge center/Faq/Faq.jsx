import React, { useState } from 'react';
import './Faq.css';
import faqData from '../../../data/Faq';

const Faq = () => {
  const [selectedCategory, setSelectedCategory] = useState('Capital Gains');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setExpandedQuestion(null);
  };

  const toggleAnswer = (index) => {
    setExpandedQuestion(prev => (prev === index ? null : index));
  };

  return (
    <div className="faq-wrapper">
    <h1>FAQ</h1>
    <div className="faq-container">
      <div className="faq-sidebar">
        {Object.keys(faqData).map((category) => (
          <div
            key={category}
            className={`faq-category ${category === selectedCategory ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="faq-content">
        <h2>{selectedCategory}</h2>
        {faqData[selectedCategory].map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              Q. {item.question}
            </div>
            {expandedQuestion === index && (
              <div className="faq-answer">
                {item.answer.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Faq;