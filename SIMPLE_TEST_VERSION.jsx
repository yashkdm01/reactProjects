/**
 * SIMPLIFIED TEST VERSION - Copy this entire file and replace src/App.jsx
 * This version removes all animations to test if basic rendering works
 */
import { useState, useEffect } from 'react'
import './App.css'

// Simplified Navigation
function SimpleNavigation({ activeSection, setActiveSection }) {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' }
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(15, 23, 42, 0.95)',
      zIndex: 1000,
      padding: '15px 0',
      borderBottom: '1px solid rgba(148, 163, 184, 0.2)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>
        <h1 style={{ color: '#6366f1' }}>My Portfolio</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id)
                const element = document.getElementById(section.id)
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === section.id ? '#6366f1' : '#cbd5e1',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

// Simplified Hero
function SimpleHero() {
  return (
    <section id="home" style={{
      marginTop: '80px',
      padding: '60px 20px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'var(--dark-bg)'
    }}>
      <div>
        <h1 style={{ fontSize: '3.5rem', color: '#6366f1', marginBottom: '20px' }}>
          Welcome to My Portfolio
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1' }}>
          I'm a Full Stack Developer
        </p>
        <button style={{
          marginTop: '20px',
          padding: '12px 24px',
          background: '#6366f1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          View My Work
        </button>
      </div>
    </section>
  )
}

// Simplified About
function SimpleAbout() {
  return (
    <section id="about" style={{
      padding: '60px 20px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#020617'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#6366f1', marginBottom: '20px', textAlign: 'center' }}>
          About Me
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8' }}>
          I'm a passionate full-stack developer with expertise in React, JavaScript, and web technologies. 
          I love building beautiful, responsive websites and applications.
        </p>
      </div>
    </section>
  )
}

// Simplified Projects
function SimpleProjects() {
  return (
    <section id="projects" style={{
      padding: '60px 20px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--dark-bg)'
    }}>
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#6366f1', marginBottom: '40px', textAlign: 'center' }}>
          My Projects
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              background: '#1e293b',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid rgba(148, 163, 184, 0.2)'
            }}>
              <h3 style={{ color: '#6366f1', marginBottom: '10px' }}>Project {i}</h3>
              <p style={{ color: '#cbd5e1' }}>Amazing project description here</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main App
function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    console.log("[v0] Simplified test version loaded - basic rendering test")
  }, [])

  return (
    <div style={{ background: 'var(--dark-bg)', color: 'var(--text-primary)' }}>
      <SimpleNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <SimpleHero />
      <SimpleAbout />
      <SimpleProjects />
    </div>
  )
}

export default App
