import React from 'react';
import Logo from '../assets/px4 main logo.svg';

const HomeRight = () => {
  return (
    <div className="relative z-10 flex w-full flex-1 items-center justify-center px-8 py-12 lg:w-1/2 lg:px-[6vw] lg:py-0">
      <div className="relative flex h-56 w-56 items-center justify-center border border-(--paper)/12 bg-(--paper)/[0.03] lg:h-80 lg:w-80 transition-all duration-300 hover:border-(--paper)/30">
        <img
          src={Logo}
          alt="PX4 logo"
          className="h-1/2 w-1/2 object-contain opacity-90"
        />

        {/* Corner framing marks */}
        <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-(--paper)/30" />
        <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-(--paper)/30" />
      </div>
    </div>
  );
};

export default HomeRight;