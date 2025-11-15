'use client'

import { useRef, useState, useEffect } from 'react'

export default function Journey() {
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

  const journey = [
    {
      year: '2024',
      title: 'Senior Developer',
      company: 'Tech Innovators Inc',
      description: 'Leading development of microservices architecture and mentoring junior developers'
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      description: 'Developed and maintained multiple full-stack applications for enterprise clients'
    },
    {
      year: '2022',
      title: 'Junior Developer',
      company: 'StartUp Co',
      description: 'Built responsive web applications and collaborated with design teams'
    },
    {
      year: '2021',
      title: 'Web Developer Intern',
      company: 'Web Agency XYZ',
      description: 'Learned modern web development practices and contributed to client projects'
    }
  ]

  return (
    <section id="journey" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-16 gradient-text text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          My Journey
        </h2>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {journey.map((item, index) => (
            <div
              key={index}
              className={`stagger-item relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full mt-1 md:mt-0">
                <div className="w-full h-full rounded-full bg-primary/50"></div>
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:w-5/12' : 'md:ml-auto md:pl-12 md:w-5/12'}`}>
                <div className="glass rounded-lg p-6 hover-lift">
                  <div className="text-primary font-bold text-sm mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-accent font-semibold mb-2">{item.company}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
