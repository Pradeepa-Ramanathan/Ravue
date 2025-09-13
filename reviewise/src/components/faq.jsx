import React, { useState } from 'react';
import arrowDown from '../assests/arrow-down.png';  // Your arrow down image
import arrowUp from '../assests/arrow-up.png';      // Your arrow up image
import faqimg from "../assests/faq.png";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

const faqData = [
  { question: 'How to use Ravue?', answer: 'You can start by registering and submitting a product for verification.' },
  { question: 'What kind of products can Ravue verify?', answer: 'Ravue verifies electronics, fashion, books, and more.' },
  { question: 'How accurate are Ravue’s results?', answer: 'We provide a probability-based analysis with high accuracy.' },
  { question: 'What should I do if Ravue says a product is fake?', answer: 'We recommend not purchasing the product and contacting support.' },
  { question: 'How can I contact Ravue support?', answer: 'You can contact support via the contact form on our website.' },
  { question: 'Can I request verification for a specific product or website?', answer: 'Yes, you can submit a request for product or website verification.' },
  { question: 'Does Ravue guarantee a product is real or fake?', answer: 'We provide a probability-based analysis. While we aim for accuracy, final purchase decisions should be made with your own discretion.' },
  { question: 'Why does Ravue sometimes show “No data found”?', answer: 'This occurs when there is insufficient information for a reliable analysis.' },
  
  // New questions
  { question: 'How long does it take for Ravue to verify a product?', answer: 'Most verifications are completed within 24 to 48 hours, depending on the product type and available data.' },
  { question: 'Is there a fee for product verification on Ravue?', answer: 'Basic product verification is free, but we offer premium verification services for detailed analysis at a small fee.' },
  { question: 'Can I verify multiple products at once?', answer: 'Currently, Ravue supports single product verification per request. Bulk verification is under development for future releases.' },
  { question: 'What data does Ravue use to verify a product?', answer: 'Ravue analyzes data from trusted sources, manufacturer details, customer reviews, and online databases to assess product authenticity.' },
  { question: 'Can I dispute a verification result if I think it is incorrect?', answer: 'Yes, you can contact Ravue support to dispute a result. Our team will review the case and update the status if necessary.' },
];
const styles={
    heading: {
      fontSize: "1.6em",
      fontWeight: "600",
      background: "linear-gradient(to right, #1E3D58, #057DCD, #43B0F1)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "10px",
      textAlign: 'center'
    },
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div style={{ marginBottom: '15px' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#DCEEFF',
          padding: '15px',
          borderRadius: isOpen ? '8px 8px 0 0' : '8px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 'bold',
          
        }}
      >
        {question}
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt="Toggle Arrow"
          style={{ width: '20px', height: '20px' }}
        />
      </div>
      {isOpen && (
        <div
          style={{
            backgroundColor: '#E8EEF1',
            padding: '15px',
            borderRadius: '0 0 8px 8px',
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const Navigate=useNavigate();
  return (
    <div>
   
    <div style={{ width: '100%', overflow: 'hidden' }}>
        <img
          src={faqimg}
          alt="FAQ Header"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </div>
    <div style={{ maxWidth: '700px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Full-width Image */}
       

      <h2 style={styles.heading}>FAQ</h2>

      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    <h2 style={styles.heading}>If you have any queries please contact us 
</h2>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          style={{
            backgroundColor: '#003366',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() =>Navigate("/contact")}
        >
          Contact us
        </button>
      </div>
    </div>
    </div>
  );
}

export default FAQ;
 