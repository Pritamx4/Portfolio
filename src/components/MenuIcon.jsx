import { useRef } from 'react';

const MenuIcon = () => {
  const navWhiteRef = useRef(null);

  return (
    <div
      onMouseEnter={() => {
        navWhiteRef.current.style.height = '100%';
      }}
      onMouseLeave={() => {
        navWhiteRef.current.style.height = '0';
      }}
      className="h-10 relative w-48"
    >
      <div className="gap-1 flex flex-col justify-center items-end cursor-pointer p-4">
        <div className="w-12 h-0.5 bg-white"></div>
        <div className="w-8 h-0.5 bg-white"></div>
      </div>
      <div ref={navWhiteRef} className="bg-white absolute transition-all top-0 h-0 w-full"></div>
    </div>
  );
};

export default MenuIcon;
