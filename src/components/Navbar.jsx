import Logo from '../assets/px4 main logo.svg';
const Navbar = () => {
  return (
    <div className="font-ui fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-transparent p-3 text-(--paper)">
      <div className="h-10 w-10 ">
        <img src={Logo} alt="PX4 logo" className="h-full w-full object-contain" />
      </div>
      <div className="flex justify-between gap-5 px-4 py-2 text-sm uppercase tracking-[0.22em]">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
