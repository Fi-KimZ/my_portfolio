import React, { useState } from 'react'

function Education() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      school: 'Zetech University',
      year: '2024 - 2027',
      coursework: ['Data Structures & Algorithms', 'Web Development', 'Database Management', 'Software Architecture', 'Operating Systems'],
    },
    {
      degree: 'Diploma in Information Technology',
      school: 'Metab Computer College',
      year: '2023 - 2024',
      coursework: ['Programming Fundamentals', 'Database Systems', 'Network Administration', 'System Analysis', 'Web Technologies'],
    },
    {
      degree: 'Certificate in Graphic Design',
      school: 'Metab Computer College',
      year: '2023 - 2024',
      coursework: ['Adobe Photoshop', 'Illustrator', 'UI/UX Design Principles', 'Typography', 'Brand Identity'],
    },
    {
      degree: 'Certificate in Information Communication and Technology',
      school: 'Metab Computer College',
      year: '2023 - 2024',
      coursework: ['Computer Basics', 'Internet Technologies', 'Office Applications', 'Digital Communication', 'Cybersecurity Basics'],
    },
  ]

  return (
    <section id="education" className="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`education-item expandable-card ${expandedCards[index] ? 'expanded' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="card-header">
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-school">{edu.school}</p>
                    <p className="education-year">{edu.year}</p>
                  </div>
                  <span className="expand-icon">▼</span>
                </div>
                <div className="card-content">
                  <div className="education-coursework">
                    <h4 className="coursework-title">Relevant Coursework:</h4>
                    <ul className="coursework-list">
                      {edu.coursework.map((course, courseIndex) => (
                        <li key={courseIndex} className="coursework-item">{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Education
