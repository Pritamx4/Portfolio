import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/work', label: 'WORK' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className="navbar" id="main-nav">
      <div className="navbar-inner">
        <Link to="/" className="nav-logo" id="nav-logo">
          <span className="logo-bracket">[</span>
          STUDIO_
          <span className="logo-highlight">PORTFOLIO</span>
          <span className="logo-bracket">]</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="menu-toggle"
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
                id={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
                {location.pathname === item.path && <span className="nav-indicator"></span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
