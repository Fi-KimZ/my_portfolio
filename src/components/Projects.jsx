import React, { useState } from 'react'

function Projects() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration using Stripe.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/e_commerse_app.webp',
      demo: '#',
      github: 'https://github.com/Fi-Kimz/ecommerce-platform',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and drag-and-drop functionality.',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      image: '/task_management_app.jpg',
      demo: '#',
      github: 'https://github.com/Fi-Kimz/task-management-app',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card expandable-card ${expandedCards[index] ? 'expanded' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="card-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="expand-icon">▼</span>
                </div>
                <div className="card-content">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link demo-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link github-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Projects
