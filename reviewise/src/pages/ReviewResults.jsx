import React from 'react';
import { useLocation } from 'react-router-dom';
import './ReviewResult.css';
import productImg from '../assets/mivi.png';

const ReviewResult = () => {
  const { state } = useLocation();
  const url = state?.url || 'Unknown';

  return (
    <div className="review-container">
      <h2 className="review-title">Review Summary</h2>
      <div className="review-card">
        <img src={productImg} alt="Product" className="product-img" />

        <div className="review-details">
          <p><strong>Sold by:</strong> Cocoblu Retails</p>
          <p><strong>Total Reviews:</strong> 4,125</p>
          <p><strong>Global Ratings:</strong> 3.9/5 (3,110 ratings)</p>
          <p><strong>Features:</strong> Mivi SuperPods Immerse, Dual Mic, 3D Soundstage, 60H Playtime, AI ENC, BT v5.4</p>

          <div className="rating-breakdown">
            <p>⭐ 5 star: 68%</p>
            <p>⭐ 4 star: 6%</p>
            <p>⭐ 3 star: 5%</p>
            <p>⭐ 2 star: 1%</p>
            <p>⭐ 1 star: 20%</p>
          </div>

          <div className="our-rating">
            <p><strong>Our Rating:</strong> 3.75 ⭐</p>
          </div>

          <div className="safety-indicator safe">
            <span>Mivi SuperPods has safe reviews.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResult;
