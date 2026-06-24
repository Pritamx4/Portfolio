import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Work.css'

function Work() {
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

  const projects = [
    {
      id: 'neo-finance',
      title: 'NEO_FINANCE APP',
      description: 'A decentralized finance platform rethinking traditional banking interfaces through brutalist honesty and extreme clarity.',
      image: '/images/project-finance.png',
      tags: ['FINTECH', 'UI/UX', 'DEFI'],
      role: 'Lead Designer & Frontend Dev',
      year: '2024',
      metrics: { users: '12K+', performance: '98', awards: '2' },
    },
    {
      id: 'virtual-structure',
      title: 'VIRTUAL_STRUCTURE',
      description: 'Interactive 3D workspace gallery built for a digital-first architectural collective. Focus on spatial UI and performance.',
      image: '/images/project-3d.png',
      tags: ['3D', 'WEBGL', 'ARCHITECTURE'],
      role: 'Creative Developer',
      year: '2024',
      metrics: { users: '8K+', performance: '96', awards: '1' },
    },
    {
      id: 'kinetic-identity',
      title: 'KINETIC_IDENTITY',
      description: 'Visual identity system for a motion graphics studio, featuring a custom variable typeface and responsive brand guidelines.',
      image: '/images/project-kinetic.png',
      tags: ['BRANDING', 'TYPOGRAPHY', 'MOTION'],
      role: 'Brand Designer',
      year: '2023',
      metrics: { users: '25K+', performance: '99', awards: '3' },
    },
    {
      id: 'data-visualizer',
      title: 'DATA_VISUALIZER',
      description: 'Real-time data visualization engine designed for high-throughput network monitoring with millisecond latency.',
      image: '/images/project-data.png',
      tags: ['DATA VIZ', 'REALTIME', 'DASHBOARD'],
      role: 'Full-Stack Developer',
      year: '2023',
      metrics: { users: '5K+', performance: '97', awards: '1' },
    },
  ]

  return (
    <div className="work-page">
      {/* === Work Hero === */}
      <section className="work-hero" id="work-hero">
        <div className="work-hero-inner">
          <div className="section-label animate-target">
            <span className="section-num">WORK</span>
            <span className="section-line"></span>
            <span>PROJECTS & CASE STUDIES</span>
          </div>
          <h1 className="headline-xl work-title animate-target">
            Selected<span className="title-highlight">Works_</span>
          </h1>
          <p className="body-lg work-subtitle animate-target">
            An archive of digital experiences focusing on high-performance interfaces, 
            rigorous engineering, and uncompromising visual identity.
          </p>
        </div>
      </section>

      {/* === Projects List === */}
      <section className="work-projects" id="work-projects">
        <div className="work-projects-inner">
          {projects.map((project, index) => (
            <article className="work-project-card animate-target" key={project.id} id={`work-${project.id}`}>
              <div className="work-card-header">
                <div className="work-card-number">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="work-card-meta">
                  <span className="work-card-year">{project.year}</span>
                  <span className="work-card-role">{project.role}</span>
                </div>
              </div>

              <div className="work-card-content">
                <div className="work-card-image-col">
                  <div className="work-card-image-window">
                    <div className="window-titlebar">
                      <span>{project.title}_PREVIEW</span>
                      <div className="window-controls">
                        <span className="window-ctrl"></span>
                        <span className="window-ctrl"></span>
                        <span className="window-ctrl close"></span>
                      </div>
                    </div>
                    <div className="window-body work-image-body">
                      <img src={project.image} alt={project.title} className="work-card-image" />
                    </div>
                  </div>
                </div>

                <div className="work-card-info-col">
                  <h2 className="headline-lg work-card-title">{project.title}</h2>
                  <p className="body-md work-card-desc">{project.description}</p>

                  <div className="work-card-tags">
                    {project.tags.map((tag) => (
                      <span className="work-tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="work-card-metrics">
                    <div className="metric">
                      <span className="metric-value">{project.metrics.users}</span>
                      <span className="metric-label">USERS</span>
                    </div>
                    <div className="metric-divider"></div>
                    <div className="metric">
                      <span className="metric-value">{project.metrics.performance}</span>
                      <span className="metric-label">PERF. SCORE</span>
                    </div>
                    <div className="metric-divider"></div>
                    <div className="metric">
                      <span className="metric-value">{project.metrics.awards}</span>
                      <span className="metric-label">AWARDS</span>
                    </div>
                  </div>

                  <button className="btn btn-primary work-card-btn">
                    <span>View Case Study</span>
                    <span className="material-icons btn-icon">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* === Work CTA === */}
      <section className="work-cta" id="work-cta">
        <div className="work-cta-inner">
          <div className="work-cta-window animate-target">
            <div className="window-titlebar">
              <span>INQUIRE.EXE</span>
              <div className="window-controls">
                <span className="window-ctrl"></span>
                <span className="window-ctrl"></span>
                <span className="window-ctrl close"></span>
              </div>
            </div>
            <div className="window-body work-cta-body">
              <h2 className="headline-lg">Have a project in mind?</h2>
              <p className="body-lg work-cta-desc">
                Currently accepting freelance opportunities and collaborative 
                inquiries for Summer 2024.
              </p>
              <div className="work-cta-socials">
                <a href="#" className="social-btn" id="work-linkedin">
                  <span>LINKEDIN</span>
                  <span className="material-icons">open_in_new</span>
                </a>
                <a href="#" className="social-btn" id="work-github">
                  <span>GITHUB</span>
                  <span className="material-icons">open_in_new</span>
                </a>
                <a href="#" className="social-btn" id="work-dribbble">
                  <span>DRIBBBLE</span>
                  <span className="material-icons">open_in_new</span>
                </a>
                <a href="mailto:hello@studio.portfolio" className="social-btn" id="work-email">
                  <span>EMAIL</span>
                  <span className="material-icons">mail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
