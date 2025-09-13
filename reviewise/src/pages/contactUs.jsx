import React, { useState } from 'react'
import './contactUs.css'
import contactImg from '../assets/contactImg.jpeg'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-illustration">
            <img 
              src={contactImg}
              alt="Contact illustration"
              referrerpolicy="no-referrer"
            />
          </div>
          
          <div className="contact-form-wrapper">
            <h1 className="contact-title">Need Help?</h1>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">What's on your mind?</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Enter message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="contact-button">
                Contact
              </button>
            </form>
          </div>
        </div>
        {/* Map Section */}
<div className="map-section" style={{ marginTop: '60px' }}>
  <h2 style={{ textAlign: 'center', color: '#1E3D58', fontWeight: 'bold', marginBottom: '20px' }}>
    Visit Our Main Branch
  </h2>
  <div className="map-container" style={{ borderRadius: '12px', overflow: 'hidden' }}>
    <iframe
      title="Chrompet Radhanagar Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.317418858294!2d80.1208108747756!3d12.94982338735547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f6a6c5c1c3f%3A0x3b1b1f0e6f2b2b2b!2sRadhanagar%2C%20Chrompet%2C%20Chennai%2C%20Tamil%20Nadu%20600044!5e0!3m2!1sen!2sin!4v1694430000000!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</div>

      </div>
    </section>
  )
}

export default ContactUs;
