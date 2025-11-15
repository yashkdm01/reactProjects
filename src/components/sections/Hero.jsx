import { useEffect, useRef } from 'react'
import '../../styles/Hero.css'

function Hero() {
  const heroRef = useRef(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text fade-in">
          <h1>Welcome to My Portfolio</h1>
          <p className="hero-subtitle">Full Stack Developer | Creative Thinker | Problem Solver</p>
          <p className="hero-description">
            Crafting beautiful and functional digital experiences with cutting-edge technologies
          </p>

          <div className="hero-buttons">
            <button className="button button-primary">View My Work</button>
            <button className="button button-secondary">Get In Touch</button>
          </div>
        </div>

        <div className="hero-image slide-in-right">
          <img src="/professional-profile.png" alt="Profile" />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </div>
  )
}

export default Hero
