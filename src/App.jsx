import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-(--ink) pt-16 text-(--paper)">
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
