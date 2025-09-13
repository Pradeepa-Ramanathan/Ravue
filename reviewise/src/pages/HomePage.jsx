import DetectionIcon from '../assets/feature-1.png';
import VerifiedIcon from '../assets/feature-2.png';
import SearchIcon from '../assets/feature-3.png';
import SecurityIcon from '../assets/feature-4.png';
import CheckIcon from '../assets/CheckIcon.png';

import HandshakeImg from '../assets/partners.png';
import AmazonLogo from '../assets/Amazon 1.png';
import SnapdealLogo from '../assets/Snapdeal 1.png';
import MeeshoLogo from '../assets/Meesho1.png';
import MyntraLogo from '../assets/mytra 1.png';
import NykaaLogo from '../assets/nykaa 1.png';
import FlipkartLogo from '../assets/flipkart 1.png';

import './Homepage.css';
import TestimonialsCarousel from './testimonals.jsx';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
  const navigate = useNavigate();

const handleCheckNow = () => {
  navigate('/analyze');
};

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-between px-5 py-5"
        style={{
          backgroundImage: `url(${require('../assets/HeroImg.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          color: '#1E3D58',
          position: 'relative',
        }}
      >
        <div className="hero-text" style={{ maxWidth: '600px' }}>
          <h1 style={{ color: '#1e3d58', fontSize: '48px', fontWeight: '700' }}>
            Stop Fake Reviews. <br /> Shop Smarter.
          </h1>
          <p style={{ color: '#1E3D58', fontSize: '20px', marginTop: '20px' }}>
            Our AI-powered system detects fake reviews so you can make informed purchases.
          </p>
          <button
            className="btn btn-lg mt-4"
            onClick={handleCheckNow}
            style={{
              backgroundColor: '#057DCD',
              color: 'white',
              fontWeight: '600',
              padding: '12px 32px',
              borderRadius: '8px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
            }}
          >
            Check Now
          </button>
        </div>
      </section>

      <section className="features-section py-5 px-5" style={{ backgroundColor: '#ffffff' }}>
        <h2 className="text-center mb-4" style={{ color: '#1E3D58', fontWeight: 'bold', fontSize: '35px' }}>
          Features
        </h2>
        <div className="row text-center">
          {[DetectionIcon, VerifiedIcon, SearchIcon, SecurityIcon].map((icon, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <img src={icon} alt={`Feature-${index}`} width="80" className="mb-3 hover-animate" />
              <h5 style={{ color: '#1E3D58' }}>
                {['Fake product detection', 'Verified Buyer Reviews', 'One-click results', 'Secured-data'][index]}
              </h5>
              <p>
                {[
                  'Advanced algorithms to spot fake reviews instantly.',
                  'Only real reviews from actual buyers are shown.',
                  'Just enter a URL and get instant insights.',
                  'All reviews are processed securely, ensuring your personal data remains protected.',
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section py-5 px-5 text-center" style={{ backgroundColor: '#E8EEF1' }}>
        <h2 className="text-center mb-4" style={{ color: '#1E3D58', fontWeight: 'bold', fontSize: '35px' }}>
          Why Choose Us
        </h2>
        <div className="container">
          <div className="row justify-content-center">
            {[...Array(2)].map((_, colIndex) => (
              <div className="col-md-6" key={colIndex}>
                {[
                  'Cutting-edge algorithms. Identify fake reviews easily.',
                  'Simple and intuitive design. Shop smarter with ease.',
                  'Avoid scams and identify genuine products.',
                  'Get clear, unbiased, and reliable review insights.',
                  'We protect your privacy and secure your data.',
                  'Trusted by top e-commerce platforms worldwide.',
                ]
                  .slice(colIndex * 3, colIndex * 3 + 3)
                  .map((text, i) => (
                    <div className="d-flex align-items-start mb-4" key={i}>
                      <img src={CheckIcon} alt="Check" width="24" className="me-2 mt-1 hover-animate" />
                      <p>{text}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonals-section">
      <TestimonialsCarousel/>
      </section>

      {/* Trusted Platforms Section */}
      <section className="trusted-section py-5 px-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#1E3D58', fontWeight: 'bold', fontSize: '35px' }}>
            Trusted by Leading E-Commerce Platforms
          </h2>
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="row text-center">
                {[AmazonLogo, SnapdealLogo, MeeshoLogo, MyntraLogo, NykaaLogo, FlipkartLogo].map((logo, i) => (
                  <div className="col-6 col-md-4 mb-4" key={i}>
                    <img src={logo} alt={`Logo-${i}`} className="img-fluid hover-animate" style={{ maxHeight: '90px' }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={HandshakeImg}
                alt="Handshake"
                className="img-fluid hover-animate"
                style={{ maxHeight: '1000px', maxWidth: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
