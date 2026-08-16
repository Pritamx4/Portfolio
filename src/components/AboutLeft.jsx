import RepelText from './RepelText';

const AboutLeft = () => {
  return (
    <div className="font-body flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-[6vw] lg:py-0">
      <div className="mx-auto w-full max-w-md lg:mx-0">
        <span className="font-ui text-[11px] font-medium uppercase tracking-[0.35em] text-(--paper)/60">
          Operator Profile
        </span>

        <h1 className="font-name uppercase mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] xl:text-[2.8rem] whitespace-nowrap text-(--paper) tracking-[0.06em] leading-[1.15] cursor-default inline-block">
          <RepelText text="Pritam Singh" radius={80} force={30} />
        </h1>

        <h6 className="font-ui mt-3 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-(--paper)/70 font-medium">
          Frontend Developer &amp; UI Enthusiast
        </h6>

        <p className="mt-6 text-[15px] sm:text-base leading-[1.75] text-(--paper)/75">
          I&rsquo;m passionate about building web experiences that feel fast,
          intuitive, and enjoyable to use. Every project is an opportunity to
          learn, improve, and solve real-world problems through thoughtful
          design and code.
        </p>

        {/* Stats — hairline-divided */}
        <div className="mt-10 grid grid-cols-3 border-t border-(--paper)/12 pt-6">
          <div className="flex flex-col items-start border-r border-(--paper)/12 pr-4">
            <span className="font-heading text-2xl sm:text-3xl text-(--paper) tracking-normal">
              2024
            </span>
            <span className="font-ui mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-(--paper)/55 font-medium">
              Since
            </span>
          </div>
          <div className="flex flex-col items-start border-r border-(--paper)/12 px-4">
            <span className="font-heading text-2xl sm:text-3xl text-(--paper) tracking-normal">
              4<span className="text-base sm:text-lg text-(--paper)/75 ml-0.5 font-mono">+</span>
            </span>
            <span className="font-ui mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-(--paper)/55 font-medium">
              Projects
            </span>
          </div>
          <div className="flex flex-col items-start pl-4">
            <span className="font-heading text-2xl sm:text-3xl text-(--paper) tracking-normal">
              12<span className="text-base sm:text-lg text-(--paper)/75 ml-0.5 font-mono">+</span>
            </span>
            <span className="font-ui mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-(--paper)/55 font-medium">
              Tech Stack
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;