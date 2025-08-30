import React from 'react';
import './Rating.css';
import { FaStar, FaUserFriends, FaShieldAlt, FaMedal } from 'react-icons/fa';

const Rating = () => {
  const ratingData = [
    {
      icon: <FaStar className="rating-icon" />,
      text: '4.8 Google Rating',
    },
    {
      icon: <FaUserFriends className="rating-icon" />,
      text: 'Trusted by 1+ Million Users',
    },
    {
      icon: <FaShieldAlt className="rating-icon" />,
      text: 'Secure and safe',
    },
    {
      icon: <FaMedal className="rating-icon" />,
      text: 'Authorized by Income Tax Department',
    },
  ];

  return (
    <div className="rating-container">
      {ratingData.map((item, index) => (
        <div className="rating-card" key={index}>
          {item.icon}
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Rating;
