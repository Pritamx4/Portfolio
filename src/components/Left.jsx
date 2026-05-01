import Button from './Button';
const Left = () => {
  return (
    <div className="h-screen w-1/2 text-white py-50 px-30">
      <div className="flex flex-col items-center p-10">
        <div className="p-8">
          <h6>[Stable Connection]</h6>
          <h1 className="text-7xl font-bold">Pritamx4</h1>
          <p className="text-xl">Welcome to Pritamx4</p>
        </div>
        <div className="flex justify-between gap-25 p-10">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Left;
