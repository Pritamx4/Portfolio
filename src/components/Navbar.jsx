import React from 'react';
import Logo from '../assets/px4 main logo.svg';
import MenuIcon from './MenuIcon';
import Magnetic from './Magnetic';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-101 flex h-16 w-full justify-between bg-transparent text-(--paper)">
      {/* Brand Logo with micro-identity */}
      <Magnetic strength={0.25} className="pl-4 sm:pl-6 pt-2">
        <a
          href="#home"
          className="group flex items-center gap-3.5 transition-opacity duration-300 hover:opacity-85"
          aria-label="PX4 Home"
        >
          <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center">
            <img src={Logo} alt="PX4 logo" className="h-full w-full object-contain" />
          </div>
        </a>
      </Magnetic>

      {/* Right Side: Resume Button + Menu Icon */}
      <div className="flex items-center gap-3 sm:gap-5">
        <Magnetic strength={0.2} className="pt-2">
          <a
            href="/resume.pdf"
            download="Pritam_Singh_Resume.pdf"
            className="font-ui group hidden sm:flex items-center gap-2 border border-(--paper)/25 bg-(--paper)/[0.03] px-3.5 py-1.5 rounded-sm text-[11px] uppercase tracking-[0.2em] font-medium text-(--paper)/80 transition-all duration-300 hover:border-(--paper) hover:bg-(--paper) hover:text-(--ink) select-none"
          >
            <svg
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span>Resume</span>
          </a>
        </Magnetic>

        {/* Menu Icon positioned flush at the right and top edge */}
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
