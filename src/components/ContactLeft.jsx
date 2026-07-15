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
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-(--paper)/10 pb-4">
        <div>
          <p className="font-ui text-[0.65rem] uppercase tracking-[0.35em] text-(--paper)/50">
            Elsewhere on the Internet
          </p>
          <h2 className="font-display mt-2 text-3xl text-(--paper)">
            Where I Exist
          </h2>
        </div>
        <span className="h-2 w-2 rounded-full bg-(--paper) shadow-[0_0_18px_rgba(244,241,234,0.6)]" />
      </div>

      {/* Social links */}
      <div className="flex flex-col">
        {socials.map((s, i) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border-b border-(--paper)/[0.06] py-5 transition-all duration-300 hover:bg-(--paper)/[0.02] hover:pl-2"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center">
              <lord-icon
                src={s.icon}
                trigger={s.trigger}
                state={s.state}
                colors="primary:#f4f1ea,secondary:#ddd7cc"
                style={{ width: '32px', height: '32px' }}
              />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="font-ui text-sm font-semibold uppercase tracking-[0.18em] text-(--paper)">
                {s.name} <span className="text-(--paper)/35">// {s.tag}</span>
              </p>
              <p className="font-body mt-1 text-xs leading-relaxed text-(--paper)/40">
                {s.desc}
              </p>
            </div>

            {/* Arrow */}
            <svg
              className="h-4 w-4 shrink-0 text-(--paper)/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-(--paper)/60"
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

      {/* Decorative quote */}
      <p className="font-body mt-8 text-sm italic text-(--paper)/30">
        "Let's build something{' '}
        <span className="font-semibold not-italic text-(--paper)/50">
          enduring
        </span>{' '}
        together."
      </p>
    </div>
  );
};

export default ContactLeft;
