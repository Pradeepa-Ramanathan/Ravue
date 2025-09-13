import React from 'react';
import './HeroSection.css'; // External CSS for styling
import whoimg from "../../assests/whoimg.png"
import searchIcon from "../../assests/Search.png";
import clipboardIcon from "../../assests/Pass Fail.png";
import usersIcon from "../../assests/Users.png";
import bagIcon from "../../assests/Shopping Bag.png";
import jhonsonImg from "../../assests/jhonson.png";
import reenaImg from "../../assests/reena.png";
import smithImg from "../../assests/smith.png";
import alexImg from "../../assests/alex.png";
import promoImage from "../../assests/Rectangle 29.png"
import Testimonials from './testimonial';
import Navbar from "../Navbar";
import { useNavigate } from 'react-router-dom';

const features = [
  { icon: searchIcon, title: "Real time", subtitle: "url analysis" },
  { icon: clipboardIcon, title: "AI powered", subtitle: "review evaluation" },
  { icon: usersIcon, title: "Community", subtitle: "reports" },
  { icon: bagIcon, title: "Market place", subtitle: "coverage" },
];
const teamMembers = [
  { name: "Jhonson", role: "Founder", photo: jhonsonImg },
  { name: "Reena", role: "CEO", photo: reenaImg },
  { name: "Smith", role: "Product Manager", photo: smithImg },
  { name: "Alex", role: "Data Scientist", photo: alexImg },
];
 const testimonials = [
    { text: "This site saved me from buying a product with fake reviews. Super helpful!", author: "-Smith" },
    { text: "I love how it filters out deceptive ratings. Shopping online feels safer now!", author: "-Rao" },
    { text: "Finally, a tool that helps me spot fake reviews before I waste my money!", author: "-James" },
    { text: "I was shocked at how many fake reviews exist—this site is a lifesaver!", author: "-Julia" },
  ];
const HeroSection = () => {
  const navigate=useNavigate();
  return (
  
    <div style={{background:'#ffff'}}>
  
    <section className="hero">
      <div className="hero-text">
        <h1>Who We Are</h1>
        <p>
          At Revue, we believe every shopper deserves transparency. That’s why we built a smart platform that helps users instantly verify the authenticity of any product — just by pasting the product’s URL. From fake electronics to counterfeit cosmetics, we’ve got your back.
        </p>
      </div>
      <div className="hero-image">
        <img src={whoimg} alt="Revue Platform Illustration" />
      </div>
    </section>
  <div className="features-row">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img src={feature.icon} alt={feature.title} className="feature-icon" />
          <div className="feature-text">
            <div className="feature-title">{feature.title}</div>
            <div className="feature-subtitle">{feature.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="team-section">
      <h2 className="team-title">
        Our Team Behind the Ravue
      </h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <div className="team-name">{member.name}</div>
            <div className="team-role">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
     <div className="promo-container">
        <img src={promoImage} alt="Reviewise Promo" className="promo-image" />
        <div className="promo-overlay">
          <div className="promo-text">
            Join thousands of users who trust Reviewise to verify their purchases.
          </div>
          <button className="promo-button" onClick={() => navigate('/analyze')}>TRY IT NOW</button>
        </div>
    
    </div>
    <Testimonials/>
    </div>
  );
};

export default HeroSection;
