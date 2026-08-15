import RepelText from './RepelText';
import ScrambleText from './ScrambleText';

// Header strip height (px) visible when cards stack on top of each other
const HEADER_H = 76;

const PROJECTS = [
  {
    num: "01",
    title: "DriveMate",
    role: "Full-Stack Engineering",
    year: "2026",
    type: "Car Rental Platform",
    desc: "Smart car rental & fleet reservation system featuring dynamic vehicle filtering, real-time booking flows, and an administrative management dashboard.",
    link: "https://drivemate-jet.vercel.app/",
    image: "/projects/drivemate.png",
    tags: ["React 19", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    num: "02",
    title: "PostApp",
    role: "Full-Stack Development",
    year: "2026",
    type: "Social Feed Platform",
    desc: "A full-stack CRUD social application for creating, reading, updating, and managing community posts with responsive feeds and RESTful endpoints.",
    link: "https://post-app-3xg1.onrender.com/",
    image: "",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST API", "JWT"],
  },
  {
    num: "03",
    title: "CyberDeck Px4",
    role: "Creative Frontend",
    year: "2026",
    type: "3D Interactive Lab",
    desc: "An interactive laboratory of futuristic cyberdeck interfaces, 3D viewport canvas models, particle systems, and modern creative interaction experiments.",
    link: "https://pritamx4.github.io/CYBERDECK_Px4/",
    image: "",
    tags: ["Three.js", "WebGL", "Canvas", "JavaScript", "HTML5"],
  },
  {
    num: "04",
    title: "Cloud Notes",
    role: "MERN Productivity",
    year: "2026",
    type: "Productivity Suite",
    desc: "A modern MERN Notes application featuring real-time search indexing, REST APIs, schema validation, and MongoDB integration with responsive UI.",
    link: "https://github.com/Pritamx4/backend",
    image: "",
    tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
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
          <h1 className="font-[ZeroMaster] text-4xl sm:text-6xl lg:text-7xl text-(--paper) tracking-wide leading-none cursor-default">
            <RepelText text={title} radius={100} force={35} />
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
                <div className="grid h-full w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-[5vw]">
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
                    <div className="mt-4 sm:mt-5 flex items-center gap-6">
                      <div className="h-px w-10 bg-(--paper)/30" />
                      <span className="font-ui text-[11px] font-medium uppercase tracking-[0.25em] text-(--paper)/65">
                        {p.type}
                      </span>
                    </div>

                    {/* Description with generous line-height */}
                    <p className="font-body mt-4 sm:mt-5 max-w-[480px] text-[14px] sm:text-[15px] leading-[1.75] text-(--paper)/75">
                      {p.desc}
                    </p>

                    {/* Stack tags */}
                    {p.tags && (
                      <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2">
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

                  {/* ── Right Column: Showcase Preview Frame (16:10 Laptop Widescreen) ── */}
                  <div className="flex items-center justify-center order-2 w-full pb-6 lg:pb-0">
                    <div className="group/frame relative w-full max-w-sm sm:max-w-lg lg:max-w-none aspect-[16/10] border border-(--paper)/15 bg-(--paper)/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-(--paper)/35">
                      {/* Image render if available */}
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-top grayscale contrast-[1.05] transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
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
                      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-(--paper)/35 z-2 transition-all duration-300 group-hover/frame:border-(--paper)" />
                      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-(--paper)/35 z-2 transition-all duration-300 group-hover/frame:border-(--paper)" />
                      <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-(--paper)/35 z-2 transition-all duration-300 group-hover/frame:border-(--paper)" />
                      <span className="absolute right-3 bottom-3 h-3 w-3 border-b border-r border-(--paper)/35 z-2 transition-all duration-300 group-hover/frame:border-(--paper)" />
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