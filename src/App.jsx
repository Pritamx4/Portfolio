import Navbar from './components/Navbar';
import About from './pages/About';
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
      </div>
    </>
  );
};

export default App;
