import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="h-screen w-full bg-black text-white">
        <Home />
        <About />
      </div>
    </>
  );
};

export default App;
