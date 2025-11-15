'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="w-32 h-32 mx-auto rounded-full border-2 border-primary p-1 animate-glow">
            <img
              src="/professional-developer-portrait.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className={`space-y-4 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl sm:text-7xl font-bold">
            <span className="gradient-text">Full Stack Developer</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Crafting beautiful, functional digital experiences
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-8 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-lift hover-glow transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover-lift transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`pt-12 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
