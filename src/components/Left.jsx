import Button from './Button';
const Left = () => {
  return (
    <div className="h-screen w-1/2 text-white py-40 px-20">
      <div className="flex flex-col items-center ">
        <div className="p-8">
          <h6>[Stable Connection]</h6>
          <h1 className="text-7xl font-bold font-[ZeroMaster]">Pritamx4</h1>
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Explicabo quasi dolor sed  <br />voluptatem nulla corporis mollitia illum ipsum maiores quidem!</p>
        </div>
        <div className="flex items-center justify-start gap-25 h-20 w-full py-10 px-8">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Left;
