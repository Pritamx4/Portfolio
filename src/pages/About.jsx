import React from 'react';
import AboutLeft from '../components/AboutLeft';
import AboutRight from '../components/AboutRight';

const About = () => {
  return (
    <div className="h-screen w-full bg-black justify-center">
      <h1 className="h-20 w-full font-[ZeroMaster] text-7xl text-white items-center justify-center flex absolute left-0 z-20">
        About Me
      </h1>
      <div className='flex'>
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  );
};

export default About;
