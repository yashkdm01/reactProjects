import { useEffect, useRef } from 'react'
import '../../styles/Journey.css'

function Journey() {
  const journeyRef = useRef(null)

  const experiences = [
    {
      id: 1,
      role: 'Senior Developer',
      company: 'Tech Company Inc',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers'
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React and Node.js'
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'Web Startup Co',
      period: '2018 - 2020',
      description: 'Started journey in web development, built responsive websites and web applications'
    }
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

    if (journeyRef.current) {
      observer.observe(journeyRef.current)
    }

    return () => {
      if (journeyRef.current) {
        observer.unobserve(journeyRef.current)
      }
    }
  }, [])

  return (
    <div className="journey" ref={journeyRef}>
      <div className="container">
        <h2 className="section-title">My Journey</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-marker"></div>
              <div className="timeline-content glass-effect">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Journey
