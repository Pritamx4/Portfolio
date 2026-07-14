const ContactLeft = () => {
  return (
    <>
      <div className="flex h-122 w-md flex-col items-start justify-evenly border border-(--paper)/15 bg-(--ink) p-8 shadow-2xl shadow-black/40">
        <a
          href="https://www.linkedin.com/in/pritamx4"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-base font-semibold uppercase tracking-[0.14em] text-(--paper) transition-all duration-300 hover:tracking-[0.18em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/qgebwute.json"
            trigger="in"
            delay="1500"
            trigger="hover"
            state="hover-draw"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '28px', height: '28px' }}
          />
          LINKEDIN // NETWORK
        </a>
        <a
          href="https://github.com/pritamx4"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-base font-semibold uppercase tracking-[0.14em] text-(--paper) transition-all duration-300 hover:tracking-[0.18em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jjxzcivr.json"
            trigger="in"
            delay="1500"
            trigger="hover"
            state="hover-roll"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '28px', height: '28px' }}
          />
          GITHUB // PORTFOLIO
        </a>
        <a
          href="https://www.youtube.com/@pritamx4?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-base font-semibold uppercase tracking-[0.14em] text-(--paper) transition-all duration-300 hover:tracking-[0.18em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/lyjuidpq.json"
            trigger="morph"
            state="morph-logotype"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '28px', height: '28px' }}
          />
          YOUTUBE // TUTORIALS
        </a>
        <a
          href="https://www.instagram.com/pritamx4/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-base font-semibold uppercase tracking-[0.14em] text-(--paper) transition-all duration-300 hover:tracking-[0.18em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/tgyvxauj.json"
            trigger="hover"
            state="hover-rotate"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '28px', height: '28px' }}
          />
          INSTAGRAM // SOCIAL
        </a>
        <a
          href="https://twitter.com/pritamx4_"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui flex items-center gap-3 text-base font-semibold uppercase tracking-[0.14em] text-(--paper) transition-all duration-300 hover:tracking-[0.18em]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/yizwahhw.json"
            trigger="in"
            delay="1500"
            trigger="hover"
            state="hover-draw"
            colors="primary:#f4f1ea,secondary:#ddd7cc"
            style={{ width: '28px', height: '28px' }}
          />
          X // SOCIAL
        </a>
      </div>
    </>
  );
};

export default ContactLeft;
