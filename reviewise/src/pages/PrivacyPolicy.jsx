import React from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="privacy-content">
             
              
              <p className="intro-text">
                <h2  style={{ color: '#1E3D58', fontWeight: 'bold', fontSize: '35px',textAlign:'center' }}>Privacy Policy</h2>
                 <p className="last-updated">Last Updated: 20.03.2025</p>
                At <strong>Ravue</strong>, we are committed to protecting your privacy and ensuring transparency 
                in how we collect, use, and safeguard your personal information. This Privacy 
                Policy outlines our practices regarding data collection, security, and compliance 
                with applicable regulations.
              </p>

              <div className="policy-section gray-section">
                <h3>1. Information We Collect</h3>
                <p>We may collect the following types of data:</p>
                <ul>
                  <li>Personal Information: Name, email, and contact details (if provided).</li>
                  <li>Usage Data: Website interactions, browsing behavior, and preferences.</li>
                  <li>Technical Data: IP address, device type, and browser details.</li>
                </ul>
              </div>

              <div className="policy-section blue-section">
                <h3>2. Purpose of Data Collection</h3>
                <p>We use collected data to:</p>
                <div className="checkmark-list">
                  <div className="check-item">
                    <span className="checkmark">✓</span>
                    <span>Detect and prevent fraudulent product reviews.</span>
                  </div>
                  <div className="check-item">
                    <span className="checkmark">✓</span>
                    <span>Enhance our AI-powered detection system.</span>
                  </div>
                  <div className="check-item">
                    <span className="checkmark">✓</span>
                    <span>Improve user experience and website functionality.</span>
                  </div>
                  <div className="check-item">
                    <span className="checkmark">✓</span>
                    <span>Provide customer support and respond to inquiries.</span>
                  </div>
                </div>
              </div>

              <div className="policy-section gray-section">
                <h3>3. Data Protection & Security</h3>
                <p>
                  We implement industry-standard security measures to protect your data 
                  from unauthorized access, misuse, or disclosure
                </p>
              </div>

              <div className="policy-section blue-section">
                <h3>4. Third-Party Sharing</h3>
                <p>
                  We do not sell or share personal data with third parties, except when 
                  required by law or to improve fraud detection capabilities.
                </p>
              </div>

              <div className="policy-section gray-section">
                <h3>5. Cookies & Tracking Technologies</h3>
                <p>
                  We use cookies to enhance website functionality and analyze user 
                  behavior. You can manage cookie preferences in your browser settings.
                </p>
              </div>

              <div className="policy-section blue-section">
                <h3>6. User Rights & Control</h3>
                <p>You have the right to:</p>
                <div className="checkmark-list">
                  <div className="check-item">
                    <span className="checkmark">✓</span>
                    <span>Access, update, or delete your personal data.</span>
                  </div>
                  <div className="check-item">
                    <span className="checkmark">✓</span>
                    <span>Opt out of data collection where applicable.</span>
                  </div>
                  <div className="check-item">
                    <span className="checkmark">✓</span>
                    <span>Request details on how your data is used.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PrivacyPolicy
