import { useEffect, useRef } from 'react'
import '../../styles/About.css'

function About() {
  const aboutRef = useRef(null)

  const skills = [
    'React', 'JavaScript', 'HTML5', 'CSS3',
    'Node.js', 'MongoDB', 'SQL', 'Git',
    'Responsive Design', 'Web APIs', 'REST APIs', 'Firebase'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  return (
    <div className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text slide-in-left">
            <p>
              I'm a passionate full-stack developer with a keen interest in creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I build responsive and user-friendly applications.
            </p>
            <p>
              My journey in web development started with curiosity and has evolved into a passion for crafting quality digital experiences. 
              I believe in clean code, continuous learning, and delivering value to users.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
            </p>
          </div>

          <div className="skills-section slide-in-right">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag" style={{ animationDelay: `${index * 0.05}s` }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
