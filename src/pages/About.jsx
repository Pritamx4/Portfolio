import AboutLeft from '../components/AboutLeft';
import AboutRight from '../components/AboutRight';

const About = () => {
  return (
    <div id="about" className="relative h-screen w-full justify-center bg-(--ink)">
      <h1 className="font-display absolute left-0 z-20 flex h-20 w-full items-center justify-center text-7xl text-(--paper)">
        About Me
      </h1>
      <div className="flex">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  );
};

export default About;
