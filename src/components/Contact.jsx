import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  })
  const [messageSent, setMessageSent] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const mailtoLink = `mailto:filexkim06@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\n\nMessage:\n${formData.message}`)}`
    
    // Create a temporary link element to trigger the mailto
    const link = document.createElement('a')
    link.href = mailtoLink
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setMessageSent(true)
    
    setTimeout(() => {
      setMessageSent(false)
      setFormData({ name: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3 className="contact-label">Email</h3>
              <a href="mailto:filexkim06@gmail.com" className="contact-value">filexkim06@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3 className="contact-label">WhatsApp</h3>
              <a href="https://wa.me/254706918671" target="_blank" rel="noopener noreferrer" className="contact-value">Chat on WhatsApp</a>
            </div>
            <div className="contact-item">
              <h3 className="contact-label">GitHub</h3>
              <a href="https://github.com/Fi-KimZ" target="_blank" rel="noopener noreferrer" className="contact-value">github.com/Fi-KimZ</a>
            </div>
            <div className="contact-item">
              <h3 className="contact-label">LinkedIn</h3>
              <a href="https://linkedin.com/in/Filex Kimtai" target="_blank" rel="noopener noreferrer" className="contact-value">linkedin.com/in/filex</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
            {messageSent && (
              <div className="success-message">
                ✓ Message sent successfully! Your email client should open shortly.
              </div>
            )}
          </form>
      </div>
    </section>
  )
}

export default Contact
