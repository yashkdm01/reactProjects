'use client'

import { useRef, useState, useEffect } from 'react'

export default function Certificates() {
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

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Jan 2024',
      image: '/aws-certificate-badge.jpg',
      verifyLink: '#'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'Dec 2023',
      image: '/web-development-certificate.jpg',
      verifyLink: '#'
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: 'Nov 2023',
      image: '/react-certificate.jpg',
      verifyLink: '#'
    },
    {
      title: 'Cloud Computing Fundamentals',
      issuer: 'Google Cloud',
      date: 'Oct 2023',
      image: '/cloud-computing-certificate.jpg',
      verifyLink: '#'
    },
    {
      title: 'JavaScript Mastery',
      issuer: 'Codecademy',
      date: 'Sep 2023',
      image: '/javascript-certificate.jpg',
      verifyLink: '#'
    },
    {
      title: 'Database Design & SQL',
      issuer: 'Coursera',
      date: 'Aug 2023',
      image: '/database-certificate.jpg',
      verifyLink: '#'
    }
  ]

  return (
    <section id="certificates" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 gradient-text text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Certificates & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`stagger-item glass rounded-lg p-6 text-center hover-lift transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              {/* Certificate Image */}
              <div className="mb-4 relative h-32 flex items-center justify-center">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Certificate Info */}
              <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-accent text-sm font-semibold mb-1">{cert.issuer}</p>
              <p className="text-muted-foreground text-xs mb-4">{cert.date}</p>

              {/* Verify Link */}
              <a
                href={cert.verifyLink}
                className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-lg hover-lift transition-all"
              >
                Verify Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
