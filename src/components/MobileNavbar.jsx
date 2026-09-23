import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="mobile-navbar">
      <div className="mobile-nav-container">
        <div className="mobile-nav-logo">Portfolio</div>
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <Link to="/" onClick={closeMenu} className="mobile-menu-link">
              <span className="mobile-menu-icon">🏠</span>
              Home
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/about" onClick={closeMenu} className="mobile-menu-link">
              <span className="mobile-menu-icon">👨‍💻</span>
              About
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/skills" onClick={closeMenu} className="mobile-menu-link">
              <span className="mobile-menu-icon">🛠️</span>
              Skills
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/services" onClick={closeMenu} className="mobile-menu-link">
              <span className="mobile-menu-icon">💼</span>
              Services
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/projects" onClick={closeMenu} className="mobile-menu-link">
              <span className="mobile-menu-icon">🚀</span>
              Projects
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/education" onClick={closeMenu} className="mobile-menu-link">
              <span className="mobile-menu-icon">🎓</span>
              Education
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/achievements" onClick={closeMenu} className="mobile-menu-link">
              <span className="mobile-menu-icon">🏆</span>
              Achievements
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/resume" onClick={closeMenu} className="mobile-menu-link">
              <span className="mobile-menu-icon">📄</span>
              Resume
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/contact" onClick={closeMenu} className="mobile-menu-link">
              <span className="mobile-menu-icon">📩</span>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileNavbar
