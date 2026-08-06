const AboutLeft = () => {
  return (
    <div className="font-body flex lg:h-screen lg:w-1/2 w-full items-center justify-center px-4 py-16 lg:py-0">
      <div className="w-full max-w-md lg:max-w-140 lg:h-110 border-t-4 border border-[#00FFD1] p-5 lg:p-10 shadow-2xl shadow-black/50 bg-white/8 backdrop-blur-xl rounded-sm">
        <h6 className="font-body font-extralight uppercase tracking-[0.22em] text-xs lg:text-sm">
          [ Operator profile ]
        </h6>
        <h1 className="font-[ZeroMaster] text-3xl lg:text-6xl mt-1">PRITAM.</h1>
        <h6 className="font-ui mt-3 lg:mt-4 uppercase tracking-[0.12em] text-xs lg:text-sm">
          Frontend Developer & UI Enthusiast
        </h6>
        <p className="mt-3 text-sm lg:text-base font-light leading-relaxed">
           I'm passionate about building web experiences that feel fast, intuitive and enjoyable to use. Every project is an opportunity to learn, improve and solve real-world problems throug thoughtful design and code.
        </p>
        <div className="mt-6 flex h-20 lg:h-24 w-full items-center justify-center border-t-3 border-[#00FFD1]">
          <div className="flex h-full w-1/3 flex-col items-center justify-center border border-[#00FFD1] bg-white/5">
            <p className="font-ui text-[10px] lg:text-xs uppercase tracking-[0.16em]">since</p>
            <h1 className="font-bold text-xl lg:text-3xl">2024</h1>
            <p className="font-ui mt-1 lg:mt-2 text-[10px] lg:text-xs uppercase tracking-[0.16em]">Years</p>
          </div>
          <div className="flex h-full w-1/3 flex-col items-center justify-center border border-[#00FFD1] bg-white/5">
            <p className="font-ui text-[10px] lg:text-xs uppercase tracking-[0.16em]">projects</p>
            <h1 className="font-bold text-xl lg:text-3xl">3+</h1>
            <p className="font-ui mt-1 lg:mt-2 text-[10px] lg:text-xs uppercase tracking-[0.16em]">Built</p>
          </div>
          <div className="flex h-full w-1/3 flex-col items-center justify-center border border-[#00FFD1] bg-white/5">
            <p className="font-ui text-[10px] lg:text-xs uppercase tracking-[0.16em]">skills</p>
            <h1 className="font-bold text-xl lg:text-3xl">10+</h1>
            <p className="font-ui mt-1 lg:mt-2 text-[10px] lg:text-xs uppercase tracking-[0.16em]">Tech.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;