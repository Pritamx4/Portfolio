import React from 'react';

const AboutLeft = () => {
  return (
    <div className="h-screen w-1/2 flex items-center justify-center">
      <div className="h-100 w-140 backdrop-blur-xl  border border-t-4  p-10  shadow-lg">
        <h6>[ Operator profile ]</h6>
        <h1 className="font-[ZeroMaster] text-6xl">PRITAM</h1>
        <h6 className="mt-4">Frontend Developer & UI Architect</h6>
        <p className="mt-2">
          Architechting high-performance digital ecosystems witha a focus on immersive UX and
          hardware-level precision. Bridging the void between brutalist structures and fluid
          interctivity.
        </p>
        <div className="h-24 w-full mt-6  border-t-2 flex items-center justify-center">
          <div className="h-full w-1/3  border flex flex-col items-center justify-center">
            <p className="uppercase text-xs">exp_duration</p>
            <h1 className="font-bold text-3xl">2+</h1>
            <p className="text-xs uppercase mt-2">Years</p>
          </div>
          <div className="h-full w-1/3 border flex flex-col items-center justify-center">
            <p className="uppercase text-xs">data_deployed</p>
            <h1 className="font-bold text-3xl">3+</h1>
            <p className="text-xs uppercase mt-2">Proj</p>
          </div>
          <div className="h-full w-1/3 border flex flex-col items-center justify-center">
            <p className="uppercase text-xs">skills_mastered</p>
            <h1 className="font-bold text-3xl">10+</h1>
            <p className="text-xs uppercase mt-2">Skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
