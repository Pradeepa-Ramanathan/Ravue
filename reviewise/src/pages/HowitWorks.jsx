import React from "react";
import "./HowRavueWorks.css"; 
import register from "../assets/register.png";
import url from "../assets/url.png";
import analysis from "../assets/analysis.png";
import rating from "../assets/rating.png";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Get Started with Registration",
    text: "To start using our services, go to our official website. If you already have an account, simply log in with your credentials. If you're a new user, you need to complete a quick registration process to create an account. This ensures secure access and personalized experience while using our product review analysis tool.",
    image: register, 
  },
  {
    title: "Copy Product URL",
    text: "After logging in, copy the URL (link) of the product you're interested in from popular e-commerce websites like Amazon, Flipkart, etc. Then, paste this link into input box on our webpage. This allows our system to fetch the product details and begin analyzing the reviews and ratings associated with that product.",
    image: url,
  },
  {
    title: "Advanced Analysis Process",
    text: "Once you submit the product link, our system examines the reviews and ratings. It checks whether the reviews are genuine or fake. This helps ensure you're not misled by dishonest or manipulated feedback on e-commerce platforms.",
    image: analysis,
  },
  {
    title: "Get Reliability Rating",
    text: "After analyzing reviews, our system assigns a reliability grade (A, B, C, etc.) to show trustworthiness. It also provides a calculated rating based on genuine feedback. This is compared with the e-commerce site's rating to reveal any misleading differences.",
    image: rating,
  },
];

const HowRavueWorks = () => {
  return (
    <div className="howravue-container">
      <h2 className="howravue-title">How Ravue works?</h2>
      <div className="subtitle"> Review Activity</div>

      {steps.map((step, index) => (
        <div
          className={`step-container ${index % 2 === 1 ? "reverse" : ""}`}
          key={index}
        >
          <div className="step-text">
            <h5>{step.title}</h5>
            <p>{step.text}</p>
          </div>
          <div className="step-image">
            <img src={step.image} alt={step.title} />
          </div>
        </div>
      ))}
      <div className="extra-info">
        <p>
          Still have more doubts?{" "}
          <Link to="/contact" className="contact-link">
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HowRavueWorks;
