import HomeLeft from '../components/HomeLeft';
import HomeRight from '../components/HomeRight';

const Home = () => {
  return (
    <div className="h-screen  flex items-center justify-between">
      <HomeLeft />
      <HomeRight />
    </div>
  );
};

export default Home;
