import Button from './Button';
const Left = () => {
  return (
    <div className="h-screen w-1/2 text-white py-40 px-20">
      <div className="flex flex-col items-center ">
        <div className="p-8">
          <h6>[Stable Connection]</h6>
          <h1 className="text-7xl font-bold font-[ZeroMaster]">Pritamx4</h1>
          <p className="text-lg mt-4 font-">
            Architechting high-performance digital ecosystems witha a focus on immersive UX and hardware-level precision. Bridging ideas to life.
          </p>
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
