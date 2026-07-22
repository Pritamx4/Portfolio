const AboutLeft = () => {
  return (
    <div className="font-body flex lg:h-screen lg:w-1/2 h-1/2 w-full items-center justify-center mt-40 lg:mt-0">
      <div className="lg:h-110 lg:w-140 h-100 w-100 border-t-4 border border-[#00FFD1] lg:p-10 p-4 shadow-2xl shadow-black/50  bg-white/1 backdrop-blur-2xl">
        <h6 className="font-ui uppercase tracking-[0.22em]">[ Operator profile ]</h6>
        <h1 className="font-display lg:text-6xl text-3xl">PRITAM</h1>
        <h6 className="font-ui mt-4 uppercase tracking-[0.12em]">
          Frontend Developer & UI Architect
        </h6>
        <p className="mt-2">
          Architechting high-performance digital ecosystems witha a focus on immersive UX and
          hardware-level precision. Bridging the void between brutalist structures and fluid
          interctivity.
        </p>
        <div className="mt-6 flex h-24 w-full items-center justify-center border-t-3  border-[#00FFD1]">
          <div className="flex h-full w-1/3 flex-col items-center justify-center border border-[#00FFD1] bg-white/3">
            <p className="font-ui text-xs uppercase tracking-[0.16em]">experience</p>
            <h1 className="font-bold text-3xl">2+</h1>
            <p className="font-ui mt-2 text-xs uppercase tracking-[0.16em]">Years</p>
          </div>
          <div className="flex h-full w-1/3 flex-col items-center justify-center border border-[#00FFD1] bg-white/3">
            <p className="font-ui text-xs uppercase tracking-[0.16em]">projects</p>
            <h1 className="font-bold text-3xl">3+</h1>
            <p className="font-ui mt-2 text-xs uppercase tracking-[0.16em]">Built</p>
          </div>
          <div className="flex h-full w-1/3 flex-col items-center justify-center border border-[#00FFD1] bg-white/3">
            <p className="font-ui text-xs uppercase tracking-[0.16em]">skills</p>
            <h1 className="font-bold text-3xl">10+</h1>
            <p className="font-ui mt-2 text-xs uppercase tracking-[0.16em]">Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
