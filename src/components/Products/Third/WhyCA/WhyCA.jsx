import React from 'react';
import './WhyCA.css';

const benefits = [
  {
    icon: '💼',
    title: 'Expert Guidance',
    description:
      'Our experienced chartered accountants and tax experts provide personalized advice and ensure your taxes are filed accurately and efficiently.',
  },
  {
    icon: '🛋️',
    title: 'Hassle-Free Convenience',
    description:
      'File your taxes and seek consultation from the comfort of your home or office with our easy-to-use online platform.',
  },
  {
    icon: '📄',
    title: 'Comprehensive Services',
    description:
      'We offer a wide range of tax-related services, including income tax, GST, Capital Gain Income, NRI taxation, and TDS filing, all in one place.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description:
      'Our clear and upfront pricing structure means you know exactly what to expect without any hidden fees.',
  },
  {
    icon: '🔒',
    title: 'Secure and Confidential',
    description:
      'Your personal and financial data is safeguarded with top-notch security measures for your peace of mind.',
  },
  {
    icon: '📈',
    title: 'Proven Track Record',
    description:
      'FdeskSolutions with over 1+ million trusted users is delivering quality service and satisfying clients year after year.',
  },
];

const WhyCA = () => {
  return (
    <div className="why-ca-container">
      <h2 className="why-ca-heading">Why FdeskSolutions for Online CA Consultation?</h2>
      <p className="why-ca-subheading">
        Effortlessly file your ITR with the help of our CA consultants and enjoy a hassle-free ITR e-filing
      </p>

      <div className="why-ca-grid">
        {benefits.map((benefit, index) => (
          <div className="why-ca-card" key={index}>
            <div className="why-ca-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyCA;
