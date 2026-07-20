import BottomCapsule from './components/BottomCapsule';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-(--ink) text-(--paper)">
        <Home />
        <About />
        {/* <Project /> */}
        {/* <Contact /> */}
      </div>
      {/* <BottomCapsule /> */}
    </>
  );
};

export default App;
