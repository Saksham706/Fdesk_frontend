import React from 'react';
import './Rating2.css';

const stats = [
  {
    icon: '👥',
    value: '4.9',
    label: 'Google Rating'
  },
  {
    icon: '🛡️',
    value: '1+ Million',
    label: 'Satisfied Customers'
  },
  {
    icon: '💰',
    value: '2500 Cr.',
    label: 'Saved Already!'
  },
  {
    icon: '💼',
    value: '10+ Years',
    label: 'of Industry Experience'
  }
];

const Rating2 = () => {
  return (
    <div className="rating2-wrapper">
      <div className="rating2-top">
        {stats.map((stat, index) => (
          <div key={index} className="rating-box">
            <div className="rating-icon">{stat.icon}</div>
            <div className="rating-value">{stat.value}</div>
            <div className="rating-label">{stat.label}</div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Rating2;
