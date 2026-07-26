import Button from './Button';
const Left = () => {
  return (
    <div className="font-body lg:h-screen lg:w-1/2 h-1/2 w-full lg:px-20 lg:py-40 text-(--paper) px-8 py-16">
      <div className="flex flex-col items-center">
        <div className="p-8 text-center">
          <h6 className="font-ui uppercase tracking-[0.22em] text-sm font-extralight">
            [Stable Connection]
          </h6>
          <h1 className="font-display lg:text-7xl text-5xl font-bold">Pritamx4</h1>
          <p className="text-lg mt-4">
            Architechting high-performance digital ecosystems witha a focus on immersive UX and
            hardware-level precision. Bridging ideas to life.
          </p>
        </div>
        <div className="flex h-20 w-full items-center justify-start gap-6 px-8 py-10">
          <Button text="Projects" />
          <Button text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Left;
