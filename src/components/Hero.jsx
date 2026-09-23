import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-profile-card">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <div className="profile-image">
                <img 
                  src="/profile.png" 
                  alt="Profile" 
                  className="profile-img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <span className="profile-placeholder" style={{display: 'none'}}>👨‍💻</span>
              </div>
              <div className="profile-ring"></div>
              <div className="profile-ring profile-ring-delayed"></div>
            </div>
          </div>
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Filex Cheprukei Kimtai</h1>
          <p className="hero-subtitle">Hi, I'm <strong>Filex</strong>, a Software Engineering student and <strong>Full-Stack Developer</strong> passionate about building modern, scalable, and user-friendly digital solutions. I specialize in <strong>frontend and backend development</strong>, creating responsive web applications that combine clean design, efficient functionality, and seamless user experiences.</p>
          <div className="hero-buttons">
            <Link to="/projects" className="hero-button">View Projects</Link>
            <Link to="/contact" className="hero-button secondary">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
