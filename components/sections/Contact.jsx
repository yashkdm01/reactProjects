'use client'

import { useState, useRef, useEffect } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
      alert('Message sent! Thank you for reaching out.')
    }, 1500)
  }

  const socialLinks = [
    { name: 'GitHub', icon: '⚙️', link: '#' },
    { name: 'LinkedIn', icon: '💼', link: '#' },
    { name: 'Twitter', icon: '🐦', link: '#' },
    { name: 'Email', icon: '✉️', link: 'mailto:your.email@example.com' }
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 gradient-text text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-lift hover-glow transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Social Links */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out! I'm always interested in hearing about new projects and opportunities.
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="flex items-center gap-4 p-4 glass rounded-lg hover-lift transition-all group"
                >
                  <span className="text-3xl">{social.icon}</span>
                  <span className="text-foreground font-semibold group-hover:text-accent transition-colors">
                    {social.name}
                  </span>
                  <svg className="w-5 h-5 ml-auto text-primary opacity-0 group-hover:opacity-100 transition-all">
                    <path fill="currentColor" d="M8.5 5l6.5 6.5-6.5 6.5"></path>
                  </svg>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover-lift transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
