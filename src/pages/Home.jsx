import HomeLeft from '../components/HomeLeft';
import HomeRight from '../components/HomeRight';

const Home = () => {
  return (
    <div
      id="home"
      className="relative flex min-h-dvh w-full flex-col items-center overflow-hidden bg-(--ink) lg:flex-row lg:justify-between"
    >
      {/* Fine grain texture, matching About / Projects / Contact */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(244,241,234,0.035) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <HomeLeft />
      <div className="relative z-10 hidden h-3/5 w-px self-center bg-(--paper)/10 lg:block" />
      <HomeRight />
    </div>
  );
};

export default Home;