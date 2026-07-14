const AboutLeft = () => {
  return (
    <div className="font-body flex h-screen w-1/2 items-center justify-center">
      <div className="h-100 w-140 border border-(--paper)/15 bg-(--ink) p-10 shadow-lg shadow-black/40">
        <h6 className="font-ui uppercase tracking-[0.22em]">[ Operator profile ]</h6>
        <h1 className="font-display text-6xl">PRITAM</h1>
        <h6 className="font-ui mt-4 uppercase tracking-[0.12em]">Frontend Developer & UI Architect</h6>
        <p className="mt-2">
          Architechting high-performance digital ecosystems witha a focus on immersive UX and
          hardware-level precision. Bridging the void between brutalist structures and fluid
          interctivity.
        </p>
        <div className="mt-6 flex h-24 w-full items-center justify-center border-t border-(--paper)/15">
          <div className="flex h-full w-1/3 flex-col items-center justify-center border border-(--paper)/15">
            <p className="font-ui text-xs uppercase tracking-[0.16em]">exp_duration</p>
            <h1 className="font-bold text-3xl">2+</h1>
            <p className="font-ui mt-2 text-xs uppercase tracking-[0.16em]">Years</p>
          </div>
          <div className="flex h-full w-1/3 flex-col items-center justify-center border border-(--paper)/15">
            <p className="font-ui text-xs uppercase tracking-[0.16em]">data_deployed</p>
            <h1 className="font-bold text-3xl">3+</h1>
            <p className="font-ui mt-2 text-xs uppercase tracking-[0.16em]">Proj</p>
          </div>
          <div className="flex h-full w-1/3 flex-col items-center justify-center border border-(--paper)/15">
            <p className="font-ui text-xs uppercase tracking-[0.16em]">skills_mastered</p>
            <h1 className="font-bold text-3xl">10+</h1>
            <p className="font-ui mt-2 text-xs uppercase tracking-[0.16em]">Skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
