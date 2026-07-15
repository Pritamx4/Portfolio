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
    href: 'https://twitter.com/pritamx4_',
    icon: 'https://cdn.lordicon.com/yizwahhw.json',
    trigger: 'hover',
    state: 'hover-draw',
  },
];

const ContactLeft = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between pb-3">
        <div>
          <p className="font-ui text-[0.6rem] uppercase tracking-[0.35em] text-(--paper)/40">
            Elsewhere on the Internet
          </p>
          <h2 className="font-display mt-1.5 text-2xl text-(--paper)">
            Where I Exist
          </h2>
        </div>
        <span className="h-1.5 w-1.5 rounded-full bg-(--paper) shadow-[0_0_14px_rgba(244,241,234,0.5)]" />
      </div>

      {/* Social links */}
      <div className="flex flex-col">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-b border-(--paper)/[0.06] py-3.5 transition-all duration-300 hover:bg-(--paper)/[0.02] hover:pl-1.5"
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
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-(--paper)">
                {s.name} <span className="text-(--paper)/30">// {s.tag}</span>
              </p>
              <p className="font-body mt-0.5 text-[0.65rem] leading-relaxed text-(--paper)/35">
                {s.desc}
              </p>
            </div>

            {/* Arrow */}
            <svg
              className="h-3.5 w-3.5 shrink-0 text-(--paper)/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-(--paper)/50"
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
