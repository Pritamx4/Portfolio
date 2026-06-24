import { useState, useEffect } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-target')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! (Connect your backend to process this)')
  }

  return (
    <div className="contact-page">
      {/* === Contact Hero === */}
      <section className="contact-hero" id="contact-hero">
        <div className="contact-hero-inner">
          <div className="section-label animate-target">
            <span className="section-num">CONTACT</span>
            <span className="section-line"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="headline-xl contact-title animate-target">
            Let's Build
            <br />
            <span className="title-highlight">Something_</span>
          </h1>
          <p className="body-lg contact-subtitle animate-target">
            I'm currently looking for internship opportunities and freelance 
            projects. If you like what you see, reach out.
          </p>
        </div>
      </section>

      {/* === Contact Form & Info === */}
      <section className="contact-main" id="contact-main">
        <div className="contact-main-inner">
          <div className="contact-form-col animate-target">
            <div className="contact-form-window">
              <div className="window-titlebar">
                <span>COMPOSE_MESSAGE.EXE</span>
                <div className="window-controls">
                  <span className="window-ctrl"></span>
                  <span className="window-ctrl"></span>
                  <span className="window-ctrl close"></span>
                </div>
              </div>
              <div className="window-body form-body">
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">NAME_</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">EMAIL_</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">SUBJECT_</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">MESSAGE_</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Tell me about your project..."
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg form-submit" id="submit-btn">
                    <span>Send Message</span>
                    <span className="material-icons btn-icon">send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="contact-info-col">
            <div className="contact-info-window animate-target">
              <div className="window-titlebar">
                <span>DIRECT_CONTACT</span>
              </div>
              <div className="window-body info-body">
                <div className="info-item">
                  <span className="material-icons info-icon">mail</span>
                  <div>
                    <p className="info-label">EMAIL</p>
                    <a href="mailto:hello@studio.portfolio" className="info-value">hello@studio.portfolio</a>
                  </div>
                </div>
                <div className="info-divider"></div>
                <div className="info-item">
                  <span className="material-icons info-icon">schedule</span>
                  <div>
                    <p className="info-label">AVAILABILITY</p>
                    <p className="info-value">Mon — Fri, 9AM — 6PM EST</p>
                  </div>
                </div>
                <div className="info-divider"></div>
                <div className="info-item">
                  <span className="material-icons info-icon">location_on</span>
                  <div>
                    <p className="info-label">LOCATION</p>
                    <p className="info-value">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-social-window animate-target">
              <div className="window-titlebar">
                <span>SOCIAL_LINKS</span>
              </div>
              <div className="window-body social-body">
                <a href="#" className="social-link-item" id="contact-linkedin">
                  <span>LINKEDIN</span>
                  <span className="material-icons">arrow_forward</span>
                </a>
                <a href="#" className="social-link-item" id="contact-github">
                  <span>GITHUB</span>
                  <span className="material-icons">arrow_forward</span>
                </a>
                <a href="#" className="social-link-item" id="contact-dribbble">
                  <span>DRIBBBLE</span>
                  <span className="material-icons">arrow_forward</span>
                </a>
                <a href="mailto:hello@studio.portfolio" className="social-link-item" id="contact-email">
                  <span>EMAIL</span>
                  <span className="material-icons">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="contact-status-window animate-target">
              <div className="status-content">
                <span className="status-dot-lg"></span>
                <div>
                  <p className="status-title">CURRENTLY AVAILABLE</p>
                  <p className="status-desc">Open for freelance & internship opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
