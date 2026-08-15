const socials = [
  {
    name: 'LINKEDIN',
    tag: 'NETWORK',
    desc: 'Professional experience and industry connections.',
    href: 'https://www.linkedin.com/in/pritamx4',
    icon: 'https://cdn.lordicon.com/qgebwute.json',
    trigger: 'hover',
    state: 'hover-draw',
  },
  {
    name: 'GITHUB',
    tag: 'SOURCE',
    desc: 'Open source repositories and creative coding.',
    href: 'https://github.com/pritamx4',
    icon: 'https://cdn.lordicon.com/jjxzcivr.json',
    trigger: 'hover',
    state: 'hover-roll',
  },
  {
    name: 'YOUTUBE',
    tag: 'STUDIO',
    desc: 'Process videos and architectural walkthroughs.',
    href: 'https://www.youtube.com/@pritamx4?sub_confirmation=1',
    icon: 'https://cdn.lordicon.com/lyjuidpq.json',
    trigger: 'morph',
    state: 'morph-logotype',
  },
  {
    name: 'INSTAGRAM',
    tag: 'VISION',
    desc: 'Curated aesthetics and daily explorations.',
    href: 'https://www.instagram.com/pritamx4/',
    icon: 'https://cdn.lordicon.com/tgyvxauj.json',
    trigger: 'hover',
    state: 'hover-rotate',
  },
  {
    name: 'X',
    tag: 'LOG',
    desc: 'Brief thoughts on design, tech, and interactions.',
    href: 'https://x.com/pritamx4_',
    icon: 'https://cdn.lordicon.com/yizwahhw.json',
    trigger: 'hover',
    state: 'hover-draw',
  },
];

const ContactLeft = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Header */}
      <div className="lg:mb-4 flex items-center justify-between pb-3">
        <div>
          <p className="font-ui hidden lg:block text-[11px] font-medium uppercase tracking-[0.35em] text-(--paper)/60">
            Elsewhere on the Internet
          </p>
          <h2 className="font-[ZeroMaster] hidden lg:block mt-1.5 text-2xl sm:text-3xl text-(--paper) tracking-wide">
            Find Me Online
          </h2>
        </div>
      </div>

      {/* Social links: icons-only row on mobile, full list with text on desktop */}
      <div className="flex flex-row justify-center lg:justify-start lg:flex-col">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-b-0 px-2 py-2 transition-all duration-300 hover:bg-(--paper)/[0.02] lg:border-b lg:border-(--paper)/10 lg:px-0 lg:py-3.5 lg:hover:pl-2"
          >
            {/* Icon */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center">
              <lord-icon
                src={s.icon}
                trigger={s.trigger}
                state={s.state}
                colors="primary:#f4f1ea,secondary:#ddd7cc"
                style={{ width: '28px', height: '28px' }}
              />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="font-heading hidden lg:block text-xs uppercase tracking-[0.14em] text-(--paper) font-medium">
                {s.name} <span className="font-mono text-[10px] text-(--paper)/50 tracking-wider">// {s.tag}</span>
              </p>
              <p className="font-body lg:block hidden mt-0.5 text-xs leading-relaxed text-(--paper)/65">
                {s.desc}
              </p>
            </div>

            {/* Arrow */}
            <svg
              className="h-3.5 w-3.5 hidden lg:block shrink-0 text-(--paper)/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-(--paper)"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactLeft;