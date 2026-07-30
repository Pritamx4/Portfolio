import Logo from '../assets/px4 main logo.svg';
const Right = () => {
  return (
    <div className="flex-1 lg:w-1/2 lg:p-40 h-1/2 w-full p-20 text-(--paper)">
      <div className="lg:h-90 lg:w-full border border-(--paper)/10 p-12">
        <img src={Logo} alt="" className="max-w-md mx-auto object-contain w-full " />
        {/* 3d model lgana hai */}
      </div>
    </div>
  );
};
export default Right;
