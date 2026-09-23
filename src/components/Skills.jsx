import React, { useState } from 'react'

function Skills() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const skills = [
    { name: 'HTML', level: 95, description: 'Structure web content with semantic markup, forms, and accessibility features.' },
    { name: 'CSS', level: 90, description: 'Style web pages with layouts, animations, responsive design, and modern CSS features.' },
    { name: 'JavaScript', level: 90, description: 'Create interactive web applications with ES6+, DOM manipulation, and asynchronous programming.' },
    { name: 'React', level: 85, description: 'Build component-based UIs with hooks, state management, and virtual DOM for performance.' },
    { name: 'Tailwind CSS', level: 85, description: 'Rapidly build custom designs with utility-first CSS framework and responsive utilities.' },
    { name: 'Material UI', level: 80, description: 'Implement Google Material Design components with pre-built React UI library.' },
    { name: 'Node.js', level: 80, description: 'Build server-side applications with JavaScript runtime, event-driven architecture, and npm ecosystem.' },
    { name: 'Java', level: 75, description: 'Develop enterprise applications with object-oriented programming, JVM, and robust libraries.' },
    { name: 'PHP', level: 75, description: 'Create dynamic web applications with server-side scripting, database integration, and CMS development.' },
    { name: 'Python', level: 75, description: 'Build applications with clean syntax, extensive libraries for web development, data analysis, and automation.' },
    { name: 'MySQL', level: 75, description: 'Manage relational databases with SQL queries, indexing, transactions, and data integrity.' },
    { name: 'MongoDB', level: 75, description: 'Work with NoSQL document databases, flexible schemas, and scalable data storage for modern apps.' },
    { name: 'Git', level: 85, description: 'Version control with branching, merging, collaboration workflows, and code history management.' },
    { name: 'GitHub', level: 85, description: 'Host repositories, collaborate with pull requests, issue tracking, and CI/CD integration.' },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className={`skill-item expandable-card ${expandedCards[index] ? 'expanded' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="card-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="expand-icon">▼</span>
                </div>
                <div className="card-content">
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Skills
