import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import profileAvatar from '../assets/default-avatar.png';
import phoneIcon from '../assets/PhoneLogo.png';
import mailIcon from '../assets/MailLogo.png';
import facebookIcon from '../assets/FacebookLogo.png';
import instagramIcon from '../assets/InstagramLogo.png';
import youtubeIcon from '../assets/YouTubeLogo.png';
import ravueLogo from '../assets/RavueLogo.png';
import './Navbar.css';

const robotoStyle = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '20px',
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(token && token !== "undefined" && token !== "null");
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const handleLoginClick = () => {
    navigate('/userlogin');
  };

  const handleDashboard = () => {
    setDropdownOpen(false);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    setIsLoggedIn(false);
    setDropdownOpen(false);
    navigate('/userlogin');
  };

  return (
    <header>
      {/* Top Contact Bar */}
      <div style={{ backgroundColor: '#E8EEF1', color: '#1E3D58' }} className="py-2 px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4">
          <span className="d-flex align-items-center gap-2">
            <img src={phoneIcon} alt="Phone" width="30" height="30" />
            <span className="px-2">|</span>
            <span>+1-234-5678</span>
          </span>
          <span className="d-flex align-items-center gap-2">
            <img src={mailIcon} alt="Mail" width="30" height="30" />
            <span className="px-2">|</span>
            <span>ravuequeries@gmail.com</span>
          </span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <a href="https://www.facebook.com"><img src={facebookIcon} alt="Facebook" width="30" /></a>
          <a href="https://www.instagram.com"><img src={instagramIcon} alt="Instagram" width="30" /></a>
          <a href="https://www.youtube.com"><img src={youtubeIcon} alt="Youtube" width="30" /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ backgroundColor: 'white', paddingTop: '0px', paddingBottom: '4px' }} className="navbar navbar-expand-lg px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand logo" href="#">
            <img src={ravueLogo} alt="logo" width="150" height="60" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
            <ul className="navbar-nav d-flex flex-row gap-5 mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link text-dark" style={robotoStyle} to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" style={robotoStyle} to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" style={robotoStyle} to="/analyze">Get Review</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" style={robotoStyle} to="/contact">Contact Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" style={robotoStyle} to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Login/Profile Section */}
          {isLoggedIn ? (
            <div style={{ position: 'relative' }}>
              <img
                src={profileAvatar}
                alt="Profile"
                className="profile-icon"
                onClick={() => setDropdownOpen((prev) => !prev)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  objectFit: 'cover'
                }}
              />
              {dropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '10px',
                    marginTop: '5px',
                    zIndex: 1000,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <div
                    style={{ padding: '5px 0', cursor: 'pointer' }}
                    onClick={handleDashboard}
                  >
                    Dashboard
                  </div>
                  <div
                    style={{ padding: '5px 0', cursor: 'pointer' }}
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              className="btn login-button"
              onClick={handleLoginClick}
              style={{
                backgroundColor: '#E8EEF1',
                color: 'black',
                border: '2px solid black',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                fontSize: '20px',
                borderRadius: '6px',
              }}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
