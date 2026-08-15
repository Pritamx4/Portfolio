import ScrambleText from './ScrambleText';

// Header strip height (px) visible when cards stack on top of each other
const HEADER_H = 76;

const PROJECTS = [
  {
    num: "01",
    title: "Project 1",
    role: "Product Design",
    year: "2025",
    type: "Mobile UI/UX",
    desc: "A redesign of a mobile banking flow focused on reducing steps to transfer money from six taps to two, without losing the confirmation safety net users trusted.",
    link: "https://example.com",
    image: "/projects/nimbus.jpg",
    tags: ["React Native", "Figma", "Fintech"],
  },
  {
    num: "02",
    title: "Project 2",
    role: "Brand Identity",
    year: "2024",
    type: "Visual Identity",
    desc: "A full identity system for a Japanese stationery brand — wordmark, packaging, and a modular grid used across print and digital touchpoints.",
    link: "https://example.com",
    image: "/projects/kioku.jpg",
    tags: ["Identity", "Typography", "Packaging"],
  },
  {
    num: "03",
    title: "Project 3",
    role: "UX / Data Viz",
    year: "2024",
    type: "Web App",
    desc: "An analytics dashboard for field researchers, rebuilt around one principle: no chart without a decision attached to it.",
    link: "https://example.com",
    image: "/projects/fieldnote.jpg",
    tags: ["Next.js", "Data Viz", "Telemetry"],
  },
  {
    num: "04",
    title: "Project 4",
    role: "Personal Project",
    year: "2026",
    type: "Experimental",
    desc: "A self-initiated type specimen exploring condensed grotesks at extreme scale — built to sharpen instincts outside of client constraints.",
    link: "https://example.com",
    image: "/projects/passage.jpg",
    tags: ["WebGL", "Kinetic Type", "Interactive"],
  },
];

const Projects = ({ title }) => {
  return (
    <div className="relative w-full bg-(--ink)">
      {/* ── Section Title Header ── */}
      {title && (
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-20 lg:py-28 text-center">
          <span className="font-ui text-[11px] font-medium uppercase tracking-[0.35em] text-(--paper)/60">
            Selected Work
          </span>
          <h1 className="font-[ZeroMaster] text-4xl sm:text-6xl lg:text-7xl text-(--paper) tracking-wide leading-none">
            {title}
          </h1>
        </div>
      )}

      {/* ── Card Stack ── */}
      <div className="relative w-full">
        {PROJECTS.map((p, i) => {
          // Mathematical height calculation:
          // Every card has height = 100vh - (i * HEADER_H).
          // With top = i * HEADER_H, every card's bottom edge sits at precisely 100vh.
          // This guarantees that ALL cards unpin simultaneously when the stack finishes.
          const cardH = `calc(100vh - ${i * HEADER_H}px)`;

          return (
            <div
              key={p.num}
              className="sticky w-full overflow-hidden bg-(--ink) border-t border-(--paper)/10"
              style={{
                top: i * HEADER_H,
                zIndex: i + 1,
                height: cardH,
              }}
            >
              {/* Background subtle dot grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(244,241,234,0.035) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                  willChange: "transform",
                }}
              />

              {/* ── Header Strip ── */}
              <div
                className="relative z-20 flex items-center justify-between border-b border-(--paper)/10 bg-(--ink) px-6 lg:px-[6vw]"
                style={{ height: HEADER_H }}
              >
                <div className="flex items-center gap-4 sm:gap-8">
                  <span className="font-heading text-xs sm:text-sm text-(--paper)/70 tracking-wider font-medium">
                    N&deg;{p.num}
                  </span>
                  <span className="hidden h-3 w-px bg-(--paper)/15 sm:block" />
                  <h3 className="font-heading text-[11px] uppercase tracking-[0.14em] text-(--paper)/90 sm:text-xs font-medium">
                    {p.title}
                  </h3>
                </div>

                {/* Visit Live Link */}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-ui group flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-(--paper)/60 transition-colors duration-300 hover:text-(--paper)"
                  >
                    <span className="relative">
                      <ScrambleText text="Visit Live" />
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-(--paper) transition-all duration-300 group-hover:w-full" />
                    </span>
                    <svg
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.25"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                )}
              </div>

              {/* ── Card Main Content Area ── */}
              <div
                className="relative z-10 w-full overflow-y-auto px-6 py-8 sm:px-10 lg:overflow-visible lg:px-[6vw] lg:py-0"
                style={{ height: `calc(100% - ${HEADER_H}px)` }}
              >
                <div className="grid h-full w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[6vw]">
                  {/* ── Left Column: Clean Editorial Typography ── */}
                  <div className="flex flex-col justify-center order-1 py-4 lg:py-0">
                    {/* Role & Year kicker */}
                    <span className="font-ui text-[11px] font-medium uppercase tracking-[0.32em] text-(--paper)/60">
                      {p.role} &mdash; {p.year}
                    </span>

                    {/* Prominent Title in font-heading */}
                    <h2 className="font-heading mt-4 sm:mt-5 text-[clamp(1.35rem,2.5vw,2.5rem)] uppercase leading-[1.15] text-(--paper) tracking-[0.04em] font-medium">
                      {p.title}
                    </h2>

                    {/* Micro divider + Type */}
                    <div className="mt-5 sm:mt-6 flex items-center gap-6">
                      <div className="h-px w-10 bg-(--paper)/30" />
                      <span className="font-ui text-[11px] font-medium uppercase tracking-[0.25em] text-(--paper)/65">
                        {p.type}
                      </span>
                    </div>

                    {/* Description with generous line-height */}
                    <p className="font-body mt-5 sm:mt-6 max-w-[480px] text-[14px] sm:text-[15px] leading-[1.8] text-(--paper)/75">
                      {p.desc}
                    </p>

                    {/* Stack tags */}
                    {p.tags && (
                      <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[11px] tracking-wider text-(--paper)/70 border border-(--paper)/15 bg-(--paper)/[0.03] px-2.5 py-1 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* ── Right Column: Showcase Preview Frame ── */}
                  <div className="flex items-center justify-center order-2 w-full pb-6 lg:pb-0">
                    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] max-h-[220px] sm:max-h-[300px] lg:max-h-[46vh] border border-(--paper)/12 bg-(--paper)/[0.03] overflow-hidden flex items-center justify-center">
                      {/* Image render if available */}
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 hover:grayscale-0"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const fallback = e.currentTarget.nextElementSibling;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                      )}

                      {/* Centered stylized project number watermark */}
                      <span
                        className="font-display absolute inset-0 flex items-center justify-center text-(--paper)/20 select-none text-7xl sm:text-8xl lg:text-9xl"
                        style={{ display: p.image ? "none" : "flex" }}
                      >
                        {p.num}
                      </span>

                      {/* Quiet editorial corner marks */}
                      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-(--paper)/30" />
                      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-(--paper)/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;