import BottomCapsule from './components/BottomCapsule';
import FullScreenNav from './components/FullScreenNav';
import Navbar from './components/Navbar';
import NavContext from './context/NavContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
  return (
    <>
      <NavContext>
        <Navbar />
      <div className="min-h-screen w-full bg-(--ink) text-(--paper)">
      <FullScreenNav />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
      <BottomCapsule />
      </NavContext>
    </>
  );
};

export default App;
