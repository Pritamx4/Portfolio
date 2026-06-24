import { useEffect } from 'react'
import './About.css'

function About() {
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

  const skills = [
    { category: 'DESIGN', items: ['UI/UX Design', 'Visual Identity', 'Typography', 'Motion Graphics', 'Prototyping'] },
    { category: 'DEVELOPMENT', items: ['React / Next.js', 'HTML / CSS / JS', 'Node.js', 'Three.js / WebGL', 'Git / CI/CD'] },
    { category: 'TOOLS', items: ['Figma', 'Adobe Suite', 'Blender', 'VS Code', 'Framer'] },
  ]

  const achievements = [
    {
      icon: 'emoji_events',
      title: 'Red Dot Winner',
      desc: "Recipient of the 2023 Concept Award for 'Fluid Systems' interface design exploration.",
    },
    {
      icon: 'groups',
      title: 'Global Hackathon',
      desc: 'Top 3 finalist out of 500+ teams in the 2023 International UI/UX Sprint Challenge.',
    },
    {
      icon: 'star',
      title: 'Featured on Behance',
      desc: 'Interaction design case study curated by Adobe for excellence in user flow optimization.',
    },
  ]

  return (
    <div className="about-page">
      {/* === About Hero === */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-content">
            <div className="section-label animate-target">
              <span className="section-num">ABOUT</span>
              <span className="section-line"></span>
              <span>THE STUDENT</span>
            </div>
            <h1 className="headline-xl about-title animate-target">
              Digital Designer &<br />
              <span className="title-highlight">Problem Solver</span>
            </h1>
            <div className="about-desc-window animate-target">
              <div className="window-titlebar">
                <span>BIO.TXT</span>
                <div className="window-controls">
                  <span className="window-ctrl"></span>
                  <span className="window-ctrl"></span>
                  <span className="window-ctrl close"></span>
                </div>
              </div>
              <div className="window-body">
                <p className="about-desc body-lg">
                  I am a multi-disciplinary designer currently pursuing my Master's 
                  in Human-Computer Interaction. My work bridges the gap between raw 
                  aesthetic expression and rigorous functional logic, creating interfaces 
                  that demand attention while ensuring seamless usability.
                </p>
              </div>
            </div>
          </div>
          <div className="about-hero-visual animate-target">
            <div className="about-portrait-window">
              <div className="window-titlebar">
                <span>ABOUT_ME.JPG</span>
              </div>
              <div className="window-body about-portrait-body">
                <img src="/images/hero-portrait.png" alt="Portrait" className="about-portrait" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Education === */}
      <section className="about-education" id="about-education">
        <div className="section-inner">
          <div className="section-header animate-target">
            <div className="section-label">
              <span className="section-num">02</span>
              <span className="section-line"></span>
              <span>EDUCATION HISTORY</span>
            </div>
          </div>

          <div className="education-grid">
            <div className="education-card animate-target">
              <div className="edu-year-badge">2022 — 2024</div>
              <div className="edu-content-window">
                <div className="window-titlebar">
                  <span>MASTER_DEGREE</span>
                </div>
                <div className="window-body edu-body">
                  <h3 className="headline-md edu-title">MSc User Experience Design</h3>
                  <p className="body-md edu-school">Royal College of Art</p>
                  <p className="body-md edu-desc">
                    Specializing in generative systems and accessibility frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="education-card animate-target">
              <div className="edu-year-badge">2018 — 2021</div>
              <div className="edu-content-window">
                <div className="window-titlebar">
                  <span>BACHELOR_DEGREE</span>
                </div>
                <div className="window-body edu-body">
                  <h3 className="headline-md edu-title">BFA Visual Communication</h3>
                  <p className="body-md edu-school">School of Visual Arts</p>
                  <p className="body-md edu-desc">
                    Focusing on typography-driven layouts and editorial design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Expertise / Skills === */}
      <section className="about-skills" id="about-skills">
        <div className="section-inner">
          <div className="section-header animate-target">
            <div className="section-label">
              <span className="section-num">03</span>
              <span className="section-line"></span>
              <span>EXPERTISE</span>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div className="skill-window animate-target" key={skillGroup.category}>
                <div className="window-titlebar">
                  <span>{skillGroup.category}_</span>
                </div>
                <div className="window-body skill-body">
                  {skillGroup.items.map((item, i) => (
                    <div className="skill-item" key={i}>
                      <span className="skill-arrow">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Achievements === */}
      <section className="about-achievements" id="about-achievements">
        <div className="section-inner">
          <div className="section-header animate-target">
            <div className="section-label">
              <span className="section-num">04</span>
              <span className="section-line"></span>
              <span>KEY ACHIEVEMENTS</span>
            </div>
          </div>

          <div className="achievements-grid">
            {achievements.map((item, i) => (
              <div className="achievement-card animate-target" key={i}>
                <div className="achievement-icon-wrapper">
                  <span className="material-icons achievement-icon">{item.icon}</span>
                </div>
                <h4 className="headline-md achievement-title">{item.title}</h4>
                <p className="body-md achievement-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Philosophy === */}
      <section className="about-philosophy" id="about-philosophy">
        <div className="section-inner">
          <div className="philosophy-window animate-target">
            <div className="window-titlebar">
              <span>PHILOSOPHY.MD</span>
              <div className="window-controls">
                <span className="window-ctrl"></span>
                <span className="window-ctrl"></span>
                <span className="window-ctrl close"></span>
              </div>
            </div>
            <div className="window-body philosophy-body">
              <h2 className="headline-lg philosophy-title">Driven by Logic</h2>
              <p className="body-lg philosophy-text">
                Every pixel must justify its existence. I build systems that are 
                as maintainable as they are beautiful.
              </p>
              <div className="philosophy-social">
                <a href="#" className="social-btn" id="about-linkedin">
                  <span>LINKEDIN</span>
                  <span className="material-icons">open_in_new</span>
                </a>
                <a href="#" className="social-btn" id="about-github">
                  <span>GITHUB</span>
                  <span className="material-icons">open_in_new</span>
                </a>
                <a href="#" className="social-btn" id="about-dribbble">
                  <span>DRIBBBLE</span>
                  <span className="material-icons">open_in_new</span>
                </a>
                <a href="mailto:hello@studio.portfolio" className="social-btn" id="about-email">
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

export default About
