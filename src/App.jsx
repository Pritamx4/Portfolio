import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="h-screen w-full bg-black text-white">
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
