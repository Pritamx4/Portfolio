import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Home.css'

function Home() {
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const ctaRef = useRef(null)

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

  const featuredProjects = [
    {
      id: 'hyper-architecture',
      title: 'Hyper_Architecture v2',
      description: 'A complete digital transformation for a boutique architecture firm. Focus on extreme performance and grid-based visual storytelling.',
      image: '/images/project-architecture.png',
      tags: ['WEB DESIGN', 'DEVELOPMENT', 'BRANDING'],
      year: '2024',
    },
    {
      id: 'sonic-interface',
      title: 'Sonic_Interface',
      description: 'Experimental user interface for a digital audio workstation.',
      image: '/images/project-sonic.png',
      tags: ['UI/UX', 'INTERACTION', 'AUDIO'],
      year: '2024',
    },
    {
      id: 'color-system',
      title: 'Color_System_01',
      description: 'A generative color exploration library.',
      image: '/images/project-color.png',
      tags: ['GENERATIVE', 'CODE', 'COLOR'],
      year: '2023',
    },
    {
      id: 'grid-master',
      title: 'Grid_Master_Framework',
      description: 'Open source CSS layout engine for editorial sites.',
      image: '/images/project-grid.png',
      tags: ['OPEN SOURCE', 'CSS', 'FRAMEWORK'],
      year: '2023',
    },
  ]

  return (
    <div className="home-page">
      {/* === HERO SECTION === */}
      <section className="hero" ref={heroRef} id="hero-section">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-tag animate-target">
              <span className="tag-dot"></span>
              <span>STUDENT DESIGNER & DEVELOPER</span>
            </div>
            <h1 className="hero-title animate-target">
              Designer
              <span className="hero-ampersand">&amp;&amp;</span>
              <br />
              Developer
            </h1>
            <p className="hero-desc animate-target body-lg">
              I build high-impact digital experiences that merge raw brutalist 
              aesthetics with professional technical execution. Currently a 
              senior design student at the intersection of code and craft.
            </p>
            <div className="hero-actions animate-target">
              <Link to="/work" className="btn btn-primary" id="hero-cta-work">
                <span>View Work</span>
                <span className="material-icons btn-icon">arrow_forward</span>
              </Link>
              <Link to="/contact" className="btn btn-outline" id="hero-cta-contact">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
          <div className="hero-visual animate-target">
            <div className="hero-image-window">
              <div className="window-titlebar">
                <span>PORTRAIT_01.JPG</span>
                <div className="window-controls">
                  <span className="window-ctrl"></span>
                  <span className="window-ctrl"></span>
                  <span className="window-ctrl close"></span>
                </div>
              </div>
              <div className="window-body">
                <img src="/images/hero-portrait.png" alt="Designer portrait" className="hero-portrait" />
              </div>
            </div>
            <div className="hero-stats-window">
              <div className="window-titlebar">
                <span>STATUS_</span>
              </div>
              <div className="window-body stats-body">
                <div className="stat-item">
                  <span className="stat-value">4+</span>
                  <span className="stat-label">Years Exp.</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value">20+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value">15+</span>
                  <span className="stat-label">Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="ticker">
          <div className="ticker-track">
            {[...Array(3)].map((_, i) => (
              <div className="ticker-content" key={i}>
                <span>DESIGN</span>
                <span className="ticker-dot">■</span>
                <span>DEVELOP</span>
                <span className="ticker-dot">■</span>
                <span>DEPLOY</span>
                <span className="ticker-dot">■</span>
                <span>ITERATE</span>
                <span className="ticker-dot">■</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FEATURED WORK SECTION === */}
      <section className="featured-work" ref={projectsRef} id="featured-work">
        <div className="section-inner">
          <div className="section-header animate-target">
            <div className="section-label">
              <span className="section-num">01</span>
              <span className="section-line"></span>
              <span>FEATURED WORK</span>
            </div>
            <h2 className="headline-lg">Selected Projects_</h2>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <article
                className={`project-card animate-target ${index === 0 ? 'featured' : ''}`}
                key={project.id}
                id={`project-${project.id}`}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <Link to="/work" className="project-view-btn">
                      <span className="material-icons">open_in_new</span>
                    </Link>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="project-title headline-md">{project.title}</h3>
                  <p className="project-desc body-md">{project.description}</p>
                  <Link to="/work" className="project-link">
                    <span>View Case Study</span>
                    <span className="material-icons">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="view-all-wrapper animate-target">
            <Link to="/work" className="btn btn-primary btn-lg" id="view-all-work">
              <span>View All Projects</span>
              <span className="material-icons btn-icon">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="home-cta" ref={ctaRef} id="home-cta">
        <div className="cta-window animate-target">
          <div className="window-titlebar">
            <span>NEW_MESSAGE.EXE</span>
            <div className="window-controls">
              <span className="window-ctrl"></span>
              <span className="window-ctrl"></span>
              <span className="window-ctrl close"></span>
            </div>
          </div>
          <div className="window-body cta-body">
            <h2 className="headline-lg cta-title">Let's Build Something</h2>
            <p className="body-lg cta-desc">
              I'm currently looking for internship opportunities and freelance 
              projects for the Summer 2024 season. If you like what you see, reach out.
            </p>
            <div className="cta-actions">
              <a href="mailto:hello@studio.portfolio" className="btn btn-primary btn-lg" id="cta-email">
                <span>Email Me Directly</span>
                <span className="material-icons btn-icon">mail</span>
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg" id="cta-schedule">
                <span>Schedule a Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
