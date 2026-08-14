import Button from './Button';

const HomeLeft = () => {
  return (
    <div className="font-body relative z-10 flex w-full flex-1 flex-col justify-center px-8 py-16 text-(--paper) lg:w-1/2 lg:px-[6vw] lg:py-40">
      <div className="mx-auto w-full max-w-lg text-center lg:mx-0 lg:text-left">
        <span className="font-ui text-[11px] uppercase tracking-[0.4em] text-(--paper)/35">
          Frontend Developer
        </span>

        <h1 className="font-[ZeroMaster] mt-4 text-4xl uppercase leading-[0.95] text-(--paper) lg:text-6xl">
          Pritam Singh
        </h1>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-(--paper)/60 lg:text-base">
          I build responsive web applications using React, Next.js, and
          Tailwind CSS. Currently learning backend development and DSA while
          building projects that solve real-world problems.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Button
            text="Projects"
            onClick={() => {
              document.getElementById('project')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          />
          <Button
            text="Contact"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          />
        </div>
      </div>

      {/* Quiet scroll cue — static, no animation */}
      <div className="mt-16 hidden items-center gap-3 lg:flex">
        <div className="h-10 w-px bg-(--paper)/25" />
        <span className="font-ui text-[10px] uppercase tracking-[0.3em] text-(--paper)/35">
          Scroll
        </span>
      </div>
    </div>
  );
};

export default HomeLeft;