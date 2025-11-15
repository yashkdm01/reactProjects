'use client'

import { useRef, useState, useEffect } from 'react'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory and payment integration',
      image: '/modern-ecommerce-dashboard.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      liveDemo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team management',
      image: '/task-management-app.png',
      technologies: ['Next.js', 'PostgreSQL', 'WebSocket', 'Tailwind'],
      link: '#',
      liveDemo: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization',
      image: '/data-analytics-dashboard.png',
      technologies: ['React', 'D3.js', 'Express', 'Firebase'],
      link: '#',
      liveDemo: '#'
    },
    {
      title: 'Social Media App',
      description: 'Full-featured social platform with messaging, notifications, and feed algorithms',
      image: '/social-media-app-interface.png',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis'],
      link: '#',
      liveDemo: '#'
    }
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 gradient-text text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`stagger-item glass rounded-xl overflow-hidden hover-lift transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.link}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover-lift text-center transition-all"
                  >
                    View Code
                  </a>
                  <a
                    href={project.liveDemo}
                    className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-semibold hover-lift text-center transition-all"
                  >
                    Live Demo
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
