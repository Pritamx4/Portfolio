import Button from './Button';
const Left = () => {
  return (
    <div className="font-body h-screen w-1/2 px-20 py-40 text-(--paper)">
      <div className="flex flex-col items-center">
        <div className="p-8">
          <h6 className="font-ui uppercase tracking-[0.22em]">[Stable Connection]</h6>
          <h1 className="font-display text-7xl font-bold">Pritamx4</h1>
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
