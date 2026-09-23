import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-logo">Portfolio</div>
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <Link to="/" className="sidebar-link">
                <span className="sidebar-icon">🏠</span>
                <span className="sidebar-text">Home</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/about" className="sidebar-link">
                <span className="sidebar-icon">👨‍💻</span>
                <span className="sidebar-text">About</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/skills" className="sidebar-link">
                <span className="sidebar-icon">🛠️</span>
                <span className="sidebar-text">Skills</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/services" className="sidebar-link">
                <span className="sidebar-icon">💼</span>
                <span className="sidebar-text">Services</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/projects" className="sidebar-link">
                <span className="sidebar-icon">🚀</span>
                <span className="sidebar-text">Projects</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/education" className="sidebar-link">
                <span className="sidebar-icon">🎓</span>
                <span className="sidebar-text">Education</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/achievements" className="sidebar-link">
                <span className="sidebar-icon">🏆</span>
                <span className="sidebar-text">Achievements</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/resume" className="sidebar-link">
                <span className="sidebar-icon">📄</span>
                <span className="sidebar-text">Resume</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/contact" className="sidebar-link">
                <span className="sidebar-icon">📩</span>
                <span className="sidebar-text">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
