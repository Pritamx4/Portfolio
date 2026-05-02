const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-transparent h-16 text-white p-2 z-50">
      <div className="h-10 w-10 rounded-full">
        <img
          src="https://th.bing.com/th/id/OIP.6TvQoZ7IS1fd-Y4AzUOFZwHaHa?w=108&h=108&c=1&bgcl=7b381c&r=0&o=7&pid=ImgRC&rm=3"
          alt=""
        />
      </div>
      <div className="flex justify-between gap-4 px-4 py-2">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Project</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Navbar;
