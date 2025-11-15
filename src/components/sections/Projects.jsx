import { useEffect, useRef } from 'react'
import '../../styles/Projects.css'

function Projects() {
  const projectsRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      image: '/ecommerce-platform-concept.png'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      image: '/task-management-concept.png'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics and insights',
      tags: ['React', 'Charts.js', 'REST API'],
      link: '#',
      image: '/social-analytics.jpg'
    },
    {
      id: 4,
      title: 'Weather Application',
      description: 'Real-time weather app with location-based forecasts',
      tags: ['React', 'API Integration', 'Geolocation'],
      link: '#',
      image: '/weather-app-interface.png'
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [])

  return (
    <div className="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">View Project</a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
