import Left from '../components/Left';
import Right from '../components/Right';

const Home = () => {
  return (
    <div className="h-screen  flex items-center justify-between z-10">
      <Left />
      <Right />
    </div>
  );
};

export default Home;
