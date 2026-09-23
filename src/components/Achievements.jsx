import React, { useState } from 'react'

function Achievements() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const achievements = [
    {
      title: 'Diploma in Information Technology',
      description: 'Successfully completed Diploma in Information Technology at Metab Computer College with focus on programming, databases, and web technologies',
      date: '2024',
      icon: '🎓',
    },
    {
      title: 'Certificate in Graphic Design',
      description: 'Completed comprehensive graphic design certification covering Adobe Photoshop, Illustrator, UI/UX design principles, and brand identity',
      date: '2024',
      icon: '🎨',
    },
    {
      title: 'Certificate in ICT',
      description: 'Earned Certificate in Information Communication and Technology with expertise in computer basics, internet technologies, and digital communication',
      date: '2024',
      icon: '💻',
    },
    {
      title: 'Software Engineering Student',
      description: 'Currently pursuing Bachelor of Software Engineering at Zetech University, focusing on modern web development and software architecture',
      date: '2024-Present',
      icon: '🚀',
    },
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`achievement-card expandable-card ${expandedCards[index] ? 'expanded' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="card-header">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="expand-icon">▼</span>
                </div>
                <div className="card-content">
                  <p className="achievement-description">{achievement.description}</p>
                  <p className="achievement-date">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Achievements
