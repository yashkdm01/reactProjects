import { useEffect, useRef, useState } from 'react'
import '../../styles/Contact.css'

function Contact() {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const socials = [
    { name: 'GitHub', url: '#', icon: '⚙️' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Email', url: 'mailto:your@email.com', icon: '📧' }
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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact" ref={contactRef}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-form glass-effect slide-in-left">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="button button-primary">Send Message</button>
            </form>
          </div>

          <div className="contact-info slide-in-right">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities.</p>

            <div className="socials">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  title={social.name}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>

            <div className="contact-details">
              <p>Email: <strong>your@email.com</strong></p>
              <p>Phone: <strong>+1 (123) 456-7890</strong></p>
              <p>Location: <strong>City, Country</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
