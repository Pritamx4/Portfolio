import AboutLeft from '../components/AboutLeft';
import AboutRight from '../components/AboutRight';

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen lg:h-screen w-full flex flex-col gap-8 lg:gap-0 bg-(--ink)"
    >
      <h1 className="font-[ZeroMaster] flex h-20 w-full items-center justify-center lg:text-7xl text-4xl text-(--paper)">
        About Me
      </h1>
      <div className="flex flex-1 lg:flex-row flex-col">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  );
};

export default About;
