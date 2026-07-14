import { Link } from 'react-router-dom';
import Logo from '../assets/px4 main logo.svg';
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-transparent h-16 text-white p-2 z-50">
      <div className="h-10 w-10 ">
        <img src={Logo} alt="PX4 logo" className="h-full w-full object-contain" />
      </div>
      <div className="flex justify-between gap-4 px-4 py-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
