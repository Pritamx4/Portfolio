import HomeLeft from '../components/HomeLeft';
import HomeRight from '../components/HomeRight';

const Home = () => {
  return (
    <div
      id="home"
      className="flex h-screen lg:flex-row flex-col items-center justify-between bg-(--ink)"
    >
      <HomeLeft />
      <HomeRight />
    </div>
  );
};

export default Home;
