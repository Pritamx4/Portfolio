const ContactLeft = () => {
  return (
    <div className="relative flex h-122 w-md flex-col justify-between overflow-hidden border border-(--paper)/12 bg-(--ink)/55 p-8 shadow-2xl shadow-black/55 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,241,234,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(244,241,234,0.05),transparent_38%)]" />
      <div className="relative mb-2 flex items-center justify-between border-b border-(--paper)/10 pb-4">
        <div>
          <p className="font-ui text-[0.65rem] uppercase tracking-[0.35em] text-(--paper)/55">Social Feed</p>
          <h2 className="font-display mt-2 text-3xl text-(--paper)">Connect</h2>
        </div>
        <span className="h-2 w-2 rounded-full bg-(--paper) shadow-[0_0_18px_rgba(244,241,234,0.7)]" />
      </div>

      <div className="relative flex flex-1 flex-col justify-evenly gap-2">
        <a
          href="https://www.linkedin.com/in/pritamx4"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--paper) transition-all duration-300 hover:translate-x-2 hover:tracking-[0.22em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/qgebwute.json"
            trigger="in"
            delay="1500"
            trigger="hover"
            state="hover-draw"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '36px', height: '36px' }}
          />
          LINKEDIN // NETWORK
        </a>
        <a
          href="https://github.com/pritamx4"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--paper) transition-all duration-300 hover:translate-x-2 hover:tracking-[0.22em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jjxzcivr.json"
            trigger="in"
            delay="1500"
            trigger="hover"
            state="hover-roll"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '36px', height: '36px' }}
          />
          GITHUB // PORTFOLIO
        </a>
        <a
          href="https://www.youtube.com/@pritamx4?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--paper) transition-all duration-300 hover:translate-x-2 hover:tracking-[0.22em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/lyjuidpq.json"
            trigger="morph"
            state="morph-logotype"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '36px', height: '36px' }}
          />
          YOUTUBE // TUTORIALS
        </a>
        <a
          href="https://www.instagram.com/pritamx4/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--paper) transition-all duration-300 hover:translate-x-2 hover:tracking-[0.22em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/tgyvxauj.json"
            trigger="hover"
            state="hover-rotate"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '36px', height: '36px' }}
          />
          INSTAGRAM // SOCIAL
        </a>
        <a
          href="https://twitter.com/pritamx4_"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--paper) transition-all duration-300 hover:translate-x-2 hover:tracking-[0.22em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/yizwahhw.json"
            trigger="in"
            delay="1500"
            trigger="hover"
            state="hover-draw"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '36px', height: '36px' }}
          />
          X // SOCIAL
        </a>
      </div>
    </div>
  );
};

export default ContactLeft;
