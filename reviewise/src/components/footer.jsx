import FacebookLogo from '../assets/FacebookLogo.png';
import InstagramLogo from '../assets/InstagramLogo.png';
import YouTubeLogo from '../assets/YouTubeLogo.png';
import LinkedInLogo from '../assets/LinkedInLogo.png';
import downloads from '../assets/download.png';
import RavueLogo from '../assets/RavueLogo.png';
import PhoneIcon from '../assets/PhoneLogo.png';
import EmailIcon from '../assets/MailLogo.png';
import LocationIcon from '../assets/LocationLogo.png';
import './footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer-section py-5 px-5" style={{ backgroundColor: '#e8eef1', color: 'black' }}>
      <div className="container">
        <div className="row">
          {/* Branding */}
          <div className="col-md-3 mb-4 text-start">
            <img src={RavueLogo} alt="LOGO" width="150" />
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              We ensure transparency and trust by helping users distinguish genuine reviews from deceptive ones.
              Our advanced detection methods filter out fraudulent feedback, enabling informed purchasing decisions.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={FacebookLogo} alt="Facebook" width="45" className="footer-icon" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramLogo} alt="Instagram" width="45" className="footer-icon" />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src={YouTubeLogo} alt="YouTube" width="40" className="footer-icon" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInLogo} alt="LinkedIn" width="45" className="footer-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 style={{ fontWeight: 'bold', color: '#057DCD', fontSize: '25px' }}>Quick Links</h5>
            <ul className="list-unstyled" style={{ fontSize: '18px' }}>
             <li style={{ marginBottom: '10px' }}>
                <Link to="/"  className="footer-link">Home</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/"  className="footer-link">About Us</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/"  className="footer-link">Get Review</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/contact"  className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          
          <div className="col-md-3 mb-4 ">
  <h5 style={{ fontWeight: 'bold', color: '#057DCD', fontSize: '25px' }}>Download our App</h5>
  <div className="mt-3">
    <img
      src={downloads}
      alt="Download"
      style={{
        maxWidth: '100%',
        height: 'auto',
        padding: '10px',
        borderRadius: '8px',
      }}
    />
  </div>
</div>




          <div className="col-md-3 mb-4 text-start">
            <h5 style={{ fontWeight: 'bold', color: '#057DCD', fontSize: '25px' }}>Contact Us</h5>
            <div className="d-flex align-items-start mb-3">
              <img src={PhoneIcon} alt="Phone" width="30" className="me-2 mt-1 footer-icon" />
              <p style={{ fontSize: '16px', marginBottom: '0' }}>+1-234-5678</p>
            </div>
            <div className="d-flex align-items-start mb-3">
              <img src={EmailIcon} alt="Email" width="30" className="me-2 mt-1 footer-icon" />
              <p style={{ fontSize: '16px', marginBottom: '0' }}>ravuequeries@gmail.com</p>
            </div>
            <div className="d-flex align-items-start">
              <img src={LocationIcon} alt="Location" width="30" className="me-2 mt-1 footer-icon" />
              <p style={{ fontSize: '16px', marginBottom: '0' }}>123, Radhanager Street, Chrompet, Chennai</p>
            </div>
          </div>
        </div>

        
        <hr style={{ borderColor: '#1E3D58' }} />
        <div className="d-flex justify-content-between align-items-center flex-wrap" style={{ fontSize: '14px' }}>
          <p className="mb-0">Copyrights ©2025 Ravue. All rights reserved.</p>
          <div className="d-flex gap-4">
             <Link to="/help"  className="footer-link">Help Center</Link>
            <Link to="/privacy-policy"  className="footer-link">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
