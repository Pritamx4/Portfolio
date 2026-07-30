import Logo from '../assets/px4 main logo.svg';
import MenuIcon from './MenuIcon';
const Navbar = () => {
  return (
    <div className="font-ui fixed  flex top-0 left-0 h-16 w-full justify-between bg-transparent z-101 text-(--paper)">
      <div className="h-10 w-10 m-2 ">
        <img src={Logo} alt="PX4 logo" className="h-full w-full object-contain" />
      </div>
      <MenuIcon />
    </div>
  );
};

export default Navbar;
