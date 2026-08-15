import React from 'react';
import Logo from '../assets/px4 main logo.svg';
import MenuIcon from './MenuIcon';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-101 flex h-16 w-full items-start justify-between bg-transparent text-(--paper)">
      {/* Brand Logo (Non-magnetic, clean) */}
      <a
        href="#home"
        className="group flex items-center gap-3.5 pl-4 sm:pl-6 pt-3 transition-opacity duration-300 hover:opacity-85"
        aria-label="PX4 Home"
      >
        <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center">
          <img src={Logo} alt="PX4 logo" className="h-full w-full object-contain" />
        </div>
      </a>

      {/* Menu Icon positioned flush at the exact right and top edge */}
      <MenuIcon />
    </div>
  );
};

export default Navbar;
