import { useEffect, useRef } from 'react'
import '../../styles/Certificates.css'

function Certificates() {
  const certificatesRef = useRef(null)

  const certificates = [
    {
      id: 1,
      title: 'React Advanced Patterns',
      issuer: 'Online Learning Platform',
      date: '2023',
      link: '#',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      issuer: 'Tech Academy',
      date: '2022',
      link: '#',
      icon: '🎓'
    },
    {
      id: 3,
      title: 'JavaScript Mastery',
      issuer: 'Code School',
      date: '2022',
      link: '#',
      icon: '⭐'
    },
    {
      id: 4,
      title: 'Web Design & UX',
      issuer: 'Design Institute',
      date: '2021',
      link: '#',
      icon: '🎨'
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

    if (certificatesRef.current) {
      observer.observe(certificatesRef.current)
    }

    return () => {
      if (certificatesRef.current) {
        observer.unobserve(certificatesRef.current)
      }
    }
  }, [])

  return (
    <div className="certificates" ref={certificatesRef}>
      <div className="container">
        <h2 className="section-title">Certificates & Achievements</h2>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.link}
              className="certificate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
              <span className="cert-link">View Certificate →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates
