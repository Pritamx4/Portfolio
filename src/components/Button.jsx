const Button = (props) => {
  return (
    <button className="bg-white px-8 py-3 skew-x-[-20deg] hover:bg-blue-500 transition duration-300 ease-in-out">
      <span className="block skew-x-[20deg] text-black font-medium"> {props.text}</span>
    </button>
  );
};

export default Button;
