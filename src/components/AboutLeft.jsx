const AboutLeft = () => {
  return (
    <div className="font-body flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-[6vw] lg:py-0">
      <div className="mx-auto w-full max-w-md lg:mx-0">
        <span className="font-ui text-[11px] uppercase tracking-[0.3em] text-(--paper)/35">
          Operator Profile
        </span>

        <h1 className="font-[ZeroMaster] mt-4 text-5xl text-(--paper) lg:text-6xl">
          Pritam Singh
        </h1>

        <h6 className="font-ui mt-3 text-xs uppercase tracking-[0.2em] text-(--paper)/50">
          Frontend Developer &amp; UI Enthusiast
        </h6>

        <p className="mt-6 text-[15px] leading-relaxed text-(--paper)/60">
          I&rsquo;m passionate about building web experiences that feel fast,
          intuitive, and enjoyable to use. Every project is an opportunity to
          learn, improve, and solve real-world problems through thoughtful
          design and code.
        </p>

        {/* Stats — hairline-divided, matching the quiet numbering used in Projects */}
        <div className="mt-10 grid grid-cols-3 border-t border-(--paper)/10 pt-6">
          <div className="flex flex-col items-start border-r border-(--paper)/10 pr-4">
            <span className="font-[ZeroMaster] text-3xl text-(--paper) lg:text-4xl">
              2024
            </span>
            <span className="font-ui mt-1 text-[10px] uppercase tracking-[0.2em] text-(--paper)/40">
              Since
            </span>
          </div>
          <div className="flex flex-col items-start border-r border-(--paper)/10 px-4">
            <span className="font-[ZeroMaster] text-3xl text-(--paper) lg:text-4xl">
              3+
            </span>
            <span className="font-ui mt-1 text-[10px] uppercase tracking-[0.2em] text-(--paper)/40">
              Projects
            </span>
          </div>
          <div className="flex flex-col items-start pl-4">
            <span className="font-[ZeroMaster] text-3xl text-(--paper) lg:text-4xl">
              10+
            </span>
            <span className="font-ui mt-1 text-[10px] uppercase tracking-[0.2em] text-(--paper)/40">
              Tools
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;