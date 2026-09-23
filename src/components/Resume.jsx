import React from 'react'

function Resume() {
  const resumeSections = [
    {
      title: 'Summary',
      content: 'Passionate Software Engineering student with strong frontend and backend development skills. Experienced in building modern web applications using React, Node.js, and various databases. Committed to creating clean, efficient, and user-friendly solutions.'
    },
    {
      title: 'Technical Skills',
      items: [
        'Frontend: React, JavaScript, HTML5, CSS3, Tailwind CSS, Material UI',
        'Backend: Node.js, Express, Java, PHP, Python, RESTful APIs',
        'Databases: MongoDB, MySQL',
        'Tools: Git, GitHub, VS Code',
        'Other: Agile/Scrum, Problem Solving, Team Collaboration'
      ]
    },
    {
      title: 'Work Experience',
      items: [
        'Frontend Developer Intern - Tech Company (Jun 2023 - Aug 2023)',
        'Freelance Web Developer - Self-Employed (Jan 2022 - Present)'
      ]
    },
    {
      title: 'Education',
      items: [
        'Bachelor of Software Engineering - Zetech University (2024 - 2027)',
        'Diploma in Information Technology - Metab Computer College (2023 - 2024)',
        'Certificate in Graphic Design - Metab Computer College (2023 - 2024)',
        'Certificate in Information Communication and Technology - Metab Computer College (2023 - 2024)'
      ]
    },
    {
      title: 'Projects',
      items: [
        'E-Commerce Platform - Full-stack application with React, Node.js, MongoDB, and Stripe payment integration',
        'Task Management App - Real-time collaborative task manager with drag-and-drop functionality'
      ]
    }
  ]

  return (
    <section id="resume" className="resume">
      <div className="section-container">
        <h2 className="section-title">Resume</h2>
          <div className="resume-content">
            {resumeSections.map((section, index) => (
              <div key={index} className="resume-section">
                <h3 className="resume-section-title">{section.title}</h3>
                {section.content && (
                  <p className="resume-text">{section.content}</p>
                )}
                {section.items && (
                  <ul className="resume-list">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="resume-item">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="resume-download">
            <a href="#" className="resume-download-button" download>
              📥 Download Full Resume
            </a>
          </div>
      </div>
    </section>
  )
}

export default Resume
