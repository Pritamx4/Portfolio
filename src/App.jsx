import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import FullScreenNav from './components/FullScreenNav';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import TechMarquee from './components/TechMarquee';
import NavContext from './context/NavContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import useActiveSection from './hooks/useActiveSection';

const AppContent = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  useActiveSection();

  return (
    <>
      {/* {!loadingComplete && (
        <Preloader onComplete={() => setLoadingComplete(true)} />
      )} */}
      <CustomCursor />
      <Navbar />
      <FullScreenNav />
      {/* Ambient Film Grain Layer */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-grain" />
      <div className="min-h-screen w-full bg-(--ink) text-(--paper)">
        <Home />
        <About />
        <TechMarquee />
        <Project />
        <Contact />
      </div>
    </>
  );
};

const App = () => {
  return (
    <NavContext>
      <AppContent />
    </NavContext>
  );
};

export default App;
