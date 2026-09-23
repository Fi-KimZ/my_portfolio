import React, { useState } from 'react'

function Services() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'I design and develop responsive, modern websites and web applications that work across computers, tablets, and mobile devices.',
      items: ['Business websites', 'Personal and professional portfolios', 'E-commerce websites', 'Landing pages', 'Web applications', 'Responsive website design', 'Website maintenance and updates', 'API integration', 'Database-driven applications'],
      tech: 'Technologies: HTML, CSS, JavaScript, React, Node.js, REST APIs, and databases'
    },
    {
      icon: '💻',
      title: 'Software Development',
      description: 'I develop customized software solutions designed to solve specific business and organizational needs.',
      items: ['Custom software development', 'Management systems', 'Customer management systems', 'Hospital management systems', 'School management systems', 'Inventory management systems', 'Task management systems', 'Booking and appointment systems', 'Authentication and authorization systems', 'Admin dashboards'],
    },
    {
      icon: '🛒',
      title: 'E-Commerce & Business Solutions',
      description: 'I help businesses establish and manage their digital presence through customized online solutions.',
      items: ['E-commerce websites', 'Online product catalogs', 'Shopping cart systems', 'WhatsApp ordering systems', 'M-Pesa payment integration', 'Order management systems', 'Product search and categorization', 'Customer accounts', 'Business dashboards'],
    },
    {
      icon: '🎨',
      title: 'UI/UX & Web Interface Design',
      description: 'I create clean, modern, and user-friendly interfaces that provide a smooth experience across different devices.',
      items: ['Website UI design', 'Dashboard design', 'Mobile-friendly interfaces', 'Landing page design', 'User experience improvements', 'Wireframes and prototypes', 'Website redesigns', 'Responsive layouts'],
    },
    {
      icon: '✏️',
      title: 'Graphic Design & Branding',
      description: 'I provide creative design services that help individuals and businesses build a professional visual identity.',
      items: ['Logo design', 'Business cards', 'Posters and flyers', 'Brochures', 'Social media graphics', 'Banners', 'Business profiles', 'Marketing materials', 'Brand identity designs', 'Presentation designs'],
    },
    {
      icon: '🔧',
      title: 'IT Support & Technical Services',
      description: 'I provide technical support and IT solutions for individuals, businesses, and organizations.',
      items: ['Computer setup and configuration', 'Operating system installation', 'Software installation and configuration', 'Computer troubleshooting', 'Hardware and software support', 'Network setup and configuration', 'Data backup solutions', 'System maintenance', 'Basic security configuration'],
    },
    {
      icon: '🗄️',
      title: 'Database & Backend Solutions',
      description: 'I design and develop reliable backend systems and databases to support modern applications.',
      items: ['Database design', 'Database management', 'MySQL/MariaDB solutions', 'CRUD systems', 'REST APIs', 'Backend development', 'User authentication', 'Data management', 'Admin management systems'],
    },
    {
      icon: '📱',
      title: 'Digital & Communication Solutions',
      description: 'I help individuals and businesses use technology effectively to improve communication and digital operations.',
      items: ['Business email setup', 'Website and social media integration', 'Digital documentation', 'Online forms', 'Communication systems', 'WhatsApp business integrations', 'Digital content management'],
    },
  ]

  return (
    <section id="services" className="services">
      <div className="section-container">
        <h2 className="section-title">My Services</h2>
        <div className="services-intro">
          <p className="services-intro-text">
            I provide professional software development, IT, graphic design, and digital solutions tailored to individuals, startups, and businesses. My goal is to transform ideas into reliable, modern, and user-friendly digital solutions.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card expandable-card ${expandedCards[index] ? 'expanded' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <span className="expand-icon">▼</span>
              </div>
              <div className="card-content">
                <p className="service-description">{service.description}</p>
                <ul className="service-list">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                {service.tech && <p className="service-tech">{service.tech}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="why-work-with-me">
          <h3 className="section-title">Why Work With Me?</h3>
          <p className="why-work-text">
            I combine software engineering, IT, graphic design, and ICT skills to provide complete digital solutions rather than focusing on only one area.
          </p>
        </div>

        <div className="what-i-offer">
          <h3 className="section-title">What I Offer</h3>
          <div className="offer-grid">
            <div className="offer-item">
              <div className="offer-icon">✓</div>
              <h4 className="offer-title">Professional Solutions</h4>
              <p className="offer-description">Solutions designed around the specific needs of each client.</p>
            </div>
            <div className="offer-item">
              <div className="offer-icon">✓</div>
              <h4 className="offer-title">Modern Technology</h4>
              <p className="offer-description">Use of modern development tools and technologies.</p>
            </div>
            <div className="offer-item">
              <div className="offer-icon">✓</div>
              <h4 className="offer-title">Responsive Design</h4>
              <p className="offer-description">Websites and applications designed to work across different screen sizes.</p>
            </div>
            <div className="offer-item">
              <div className="offer-icon">✓</div>
              <h4 className="offer-title">User-Friendly Interfaces</h4>
              <p className="offer-description">Clean and intuitive designs that are easy to use.</p>
            </div>
            <div className="offer-item">
              <div className="offer-icon">✓</div>
              <h4 className="offer-title">Reliable Support</h4>
              <p className="offer-description">Technical support, maintenance, and continuous improvements.</p>
            </div>
            <div className="offer-item">
              <div className="offer-icon">✓</div>
              <h4 className="offer-title">Complete Digital Solutions</h4>
              <p className="offer-description">From design and development to deployment and maintenance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
