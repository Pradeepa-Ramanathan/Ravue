import React, { useState } from 'react'
import './testimonals.css'
import people1 from '../assets/people-1.jpeg';
import people2 from '../assets/people-2.jpeg';
import people3 from '../assets/people-3.jpeg';
import quote from '../assets/quote-left.png';

const testimonials = [
  {
    id: 1,
    title: "Efficient and Long-term!",
    content: "At Les Benjamins, protecting our brand image and combating counterfeit products has always been a top priority. Since partnering with Ravue, their AI-powered platform has helped us take down thousands of fake listings quickly and efficiently. Beyond short-term removal, their solution has created long-term impact by discouraging counterfeit sellers from continuing their activity. Thanks to Ravue's responsive team and powerful technology, our brand is now better protected across digital platforms.",
    author: "Marie",
    position: "Marketing and Digital Project Specialist at Les Benjamins",
    image: people1
  },
  {
    id: 2,
    title: "Outstanding Results!",
    content: "Working with this team has been transformative for our business. Their innovative approach and dedication to excellence has helped us achieve remarkable growth. The platform's capabilities exceeded our expectations and delivered measurable results that have strengthened our market position significantly.",
    author: "Micheal Chen",
    position: "Brand Manager at TechCorp",
    image: people2
  },
  {
    id: 3,
    title: "Game-changing Solution!",
    content: "The impact on our brand protection strategy has been incredible. Not only did we see immediate improvements in counterfeit detection, but the long-term benefits have been substantial. Their technology and support team have been instrumental in safeguarding our intellectual property.",
    author: "Sarah",
    position: "IP Protection Lead at GlobalBrand",
    image: people3
  }
]

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="testimonials-section">
      <header className="testimonials-header">
        
        <h2 className="testimonials-title"  style={{ color: '#1E3D58', fontWeight: 'bold', fontSize: '35px' }}>Testimonials</h2>
      </header>

      <div className="carousel-container">
        <button 
          className="carousel-nav carousel-nav-prev" 
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">
               <img
    src={quote}
    alt="Quote Icon"
    style={{
      width: '60px',
      height: '60px',
      marginBottom: '20px',
    }}
  />
            </div>
            
            <div className="testimonial-text">
              <h3 className="testimonial-title">{testimonials[currentIndex].title}</h3>
              <p className="testimonial-description">{testimonials[currentIndex].content}</p>
              
              <div className="testimonial-author">
                <strong>- {testimonials[currentIndex].author}</strong>
                <div className="author-position">{testimonials[currentIndex].position}</div>
              </div>
            </div>
          </div>

          <div className="testimonial-image">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].author}
              referrerpolicy="no-referrer"
            />
          </div>
        </div>

        <button 
          className="carousel-nav carousel-nav-next" 
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsCarousel
