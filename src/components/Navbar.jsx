import React from 'react';
import Logo from '../assets/px4 main logo.svg';
import MenuIcon from './MenuIcon';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-101 flex h-16 w-full justify-between bg-transparent text-(--paper)">
      {/* Brand Logo with micro-identity */}
      <a
        href="#home"
        className="group flex items-center gap-3.5 pl-4 sm:pl-6 pt-2 transition-opacity duration-300 hover:opacity-85"
        aria-label="PX4 Home"
      >
        <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center">
          <img src={Logo} alt="PX4 logo" className="h-full w-full object-contain" />
        </div>
        {/* Optional Brand Typography (Saved for future use)
        <div className="flex flex-col">
          <span className="font-heading text-[11px] sm:text-xs uppercase tracking-[0.2em] text-(--paper)/90 leading-none">
            Pritam
          </span>
          <span className="font-ui text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-(--paper)/40 mt-1">
            Edition 2025
          </span>
        </div>
        */}
      </a>

      {/* Menu Icon positioned flush at the right and top edge */}
      <MenuIcon />
    </div>
  );
};

export default Navbar;
