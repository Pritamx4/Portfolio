const Button = (props) => {
  return (
    <button className="h-12 w-48 skew-x-[-20deg] border border-(--paper) bg-(--paper) px-8 py-3 text-(--ink) transition duration-300 ease-in-out hover:bg-(--ink) hover:text-(--paper)">
      <span className="block skew-x-20 font-medium"> {props.text}</span>
    </button>
  );
};

export default Button;
