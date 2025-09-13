import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnalyzePage.css';

import tick from '../assets/CheckMark.png';
import errorImage from '../assets/ErrorImg.png';

const supportedSites = [
  'Amazon',
  'BestBuy',
  'SnapDeal',
  'FlipKart',
  'AliExpress',
  'Walmart',
];

const isValidURL = (url) => {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
};

const AnalyzePage = () => {
  const [url, setUrl] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (isValidURL(url.trim())) {
      setShowError(false);
      navigate('/review-result', { state: { url } });
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="analyze-container">
      {showError ? (
        <div className="full-error-view">
          <img src={errorImage} alt="404 Error" className="error-img" />
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-message">
            Oops! The product you're looking for doesn't exist or has been moved.
           </p>
        </div>
      ) : (
        <div className="analyze-content">
          <h1 className="analyze-title">Analyze a Product</h1>
          <p className="analyze-subtext">
            Enter the URL of a product or business from one of the supported websites below to begin analyzing its reviews.
            <br /><br />
            We'll extract and evaluate customer feedback using intelligent data scraping and natural language processing techniques.
          </p>

          <div className="input-group">
            <input
              type="text"
              className="analyze-input"
              placeholder="Enter URL to Analyze"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="analyze-button" onClick={handleAnalyze}>
              Analyze
            </button>
          </div>

          <h3 className="supported-title">OUR SUPPORTED WEBSITES:</h3>
          <div className="supported-grid">
            {supportedSites.map((site, i) => (
              <div key={i} className="site-item">
                <img src={tick} alt="Supported" className="tick-icon" />
                <span className="site-name">{site}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyzePage;
