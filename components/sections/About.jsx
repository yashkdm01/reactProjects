'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
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

  const skills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript',
    'Next.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL',
    'REST APIs', 'GraphQL', 'Git', 'AWS'
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 gradient-text text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate developer with a love for creating intuitive, performant web applications. With 5+ years of experience, I've worked with startups and enterprises to deliver solutions that matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans full-stack development, from crafting responsive frontends to building scalable backends. I believe in writing clean, maintainable code and staying updated with the latest technologies.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Currently:</h3>
              <p className="text-muted-foreground">Open for freelance and full-time opportunities</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="stagger-item glass rounded-lg p-3 text-center font-medium text-sm sm:text-base hover-lift"
                  style={{
                    animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
