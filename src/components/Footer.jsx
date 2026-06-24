import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">STUDIO_PORTFOLIO</span>
            <p className="footer-tagline">Designing the raw future of digital.</p>
          </div>
          <div className="footer-nav">
            <div className="footer-col">
              <h4 className="footer-col-title">NAVIGATION</h4>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/work" className="footer-link">Work</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">SOCIAL</h4>
              <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">Dribbble</a>
              <a href="mailto:hello@studio.portfolio" className="footer-link">Email</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-status">
            <span className="status-dot"></span>
            <span>AVAILABLE FOR WORK</span>
          </div>
          <p className="footer-copy">© 2024 STUDIO_PORTFOLIO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
