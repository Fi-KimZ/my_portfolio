import React, { useState } from 'react'

function About() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const aboutSections = [
    {
      heading: 'Background',
      text: 'I am a passionate Software Engineering student with a strong foundation in both frontend and backend development. I love creating clean, efficient, and user-friendly solutions that solve real-world problems.'
    },
    {
      heading: 'Education',
      text: 'Currently pursuing a Bachelor of Software Engineering, focusing on modern web technologies and software architecture.'
    },
    {
      heading: 'Interests',
      text: 'I\'m interested in building scalable web applications, exploring new frameworks, and contributing to open-source projects. I enjoy learning about UI/UX design and creating seamless user experiences.'
    },
    {
      heading: 'Career Goal',
      text: 'My goal is to become a full-stack developer at a tech company where I can build innovative products and continuously grow my skills in software engineering.'
    },
  ]

  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
          <div className="about-content">
            {aboutSections.map((section, index) => (
              <div 
                key={index} 
                className={`about-section expandable-card ${expandedCards[index] ? 'expanded' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="card-header">
                  <h3 className="about-heading">{section.heading}</h3>
                  <span className="expand-icon">▼</span>
                </div>
                <div className="card-content">
                  <p className="about-text">{section.text}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default About
