import { useState } from 'react'
import '../styles/Navigation.css'

function Navigation({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleScroll = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <span className="gradient-text">Portfolio</span>
        </div>

        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {sections.map(section => (
            <li key={section.id}>
              <button
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => handleScroll(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
