import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-window">
          <div className="loader-titlebar">
            <span>LOADING_</span>
            <div className="loader-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="loader-body">
            <div className="loader-bar-track">
              <div className="loader-bar-fill"></div>
            </div>
            <p className="loader-text">INITIALIZING PORTFOLIO...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
