import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <NavbarContext.Provider
      value={{ navOpen, setNavOpen, activeSection, setActiveSection }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavContext;