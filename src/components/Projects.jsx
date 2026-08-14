import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Height of the always-visible header strip (mark / title / live link)
// that peeks out above each card once the next one stacks on top of it.
const HEADER_H = 84;

const PROJECTS = [
  {
    num: "01",
    title: "Notes App",
    role: "Product Design",
    year: "2026",
    type: "Mobile UI/UX",
    desc: "A mobile app for taking and organizing notes, with a focus on simplicity and ease of use.",
    link: "https://example.com",
    image: "/projects/nimbus.jpg",
  },
  {
    num: "02",
    title: "Image Posting App",
    role: "Brand Identity",
    year: "2026",
    type: "Visual Identity",
    desc: "A visual identity for a social media app that encourages users to post images of their memories, with a focus on nostalgia and personal storytelling.",
    link: "https://post-app-3xg1.onrender.com/",
    image: "/projects/kioku.jpg",
  },
  {
    num: "03",
    title: "3rd project",
    role: "UX / Data Viz",
    year: "2024",
    type: "Web App",
    desc: "An analytics dashboard for field researchers, rebuilt around one principle: no chart without a decision attached to it.",
    link: "https://example.com",
    image: "/projects/fieldnote.jpg",
  },
  {
    num: "04",
    title: "4th project",
    role: "Personal Project",
    year: "2026",
    type: "Experimental",
    desc: "A self-initiated type specimen exploring condensed grotesks at extreme scale — built to sharpen instincts outside of client constraints.",
    link: "https://example.com",
    image: "/projects/passage.jpg",
  },
];

const Projects = ({ title }) => {
  const cardRefs = useRef([]);
  const contentRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // The only motion in this component: as each card scrolls up to fully
      // cover the one behind it, the previous card's content settles back
      // and dims slightly, like it's receding into a stack. The header
      // strip is a separate sibling, so it stays crisp and legible.
      cardRefs.current.forEach((card, i) => {
        const prevContent = contentRefs.current[i - 1];
        if (!card || !prevContent) return;

        gsap.to(prevContent, {
          scale: 0.96,
          filter: "brightness(0.5)",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-(--ink)">
      {title && (
        <div className="flex flex-col items-center gap-3 py-20 lg:py-28">
          <span className="font-ui text-[11px] uppercase tracking-[0.4em] text-(--paper)/35">
            Selected Work
          </span>
          <h1 className="font-[ZeroMaster] text-4xl text-(--paper) lg:text-7xl">
            {title}
          </h1>
        </div>
      )}

      {PROJECTS.map((p, i) => (
        <div
          key={p.num}
          ref={(el) => (cardRefs.current[i] = el)}
          className="sticky h-screen w-full overflow-hidden bg-(--ink)"
          style={{ top: i * HEADER_H, zIndex: i + 1 }}
        >
          {/* Fine grain texture, matching the dot pattern used in Contact */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(244,241,234,0.035) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />

          {/* Header strip — stays visible once the next card stacks on top */}
          <div
            className="relative z-10 flex items-center justify-between border-b border-(--paper)/10 bg-(--ink) px-6 lg:px-[6vw]"
            style={{ height: HEADER_H }}
          >
            <div className="flex items-center gap-5 lg:gap-8">
              <span className="font-[ZeroMaster] text-sm text-(--paper)/45 lg:text-base">
                N&deg;{p.num}
              </span>
              <span className="hidden h-3 w-px bg-(--paper)/15 sm:block" />
              <h3 className="font-ui text-xs uppercase tracking-[0.2em] text-(--paper)/80 lg:text-sm">
                {p.title}
              </h3>
            </div>

            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui group flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-(--paper)/50 transition-colors duration-300 hover:text-(--paper)"
              >
                <span className="relative">
                  Visit Live
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-(--paper) transition-all duration-300 group-hover:w-full" />
                </span>
                <svg
                  className="h-3 w-3"
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

          {/* Content — this is what settles back and dims when the next card covers it.
              overflow-y-auto is a safety net on short mobile viewports so nothing clips. */}
          <div
            ref={(el) => (contentRefs.current[i] = el)}
            className="relative z-10 grid h-[calc(100%-84px)] grid-cols-1 items-center gap-10 overflow-y-auto px-6 py-10 will-change-transform lg:grid-cols-[1fr_1fr] lg:gap-[5vw] lg:overflow-visible lg:px-[6vw] lg:py-0"
          >
            <div className="order-2 lg:order-1">
              <span className="font-ui text-[11px] uppercase tracking-[0.3em] text-(--paper)/35">
                {p.role} &mdash; {p.year}
              </span>

              <h2 className="font-[ZeroMaster] mt-4 text-[13vw] leading-[0.92] text-(--paper) sm:text-6xl lg:mt-6 lg:text-7xl xl:text-8xl">
                {p.title}
              </h2>

              <div className="mt-8 flex items-center gap-6 lg:mt-10">
                <div className="h-px w-10 bg-(--paper)/25" />
                <span className="font-ui text-[11px] uppercase tracking-[0.25em] text-(--paper)/40">
                  {p.type}
                </span>
              </div>

              <p className="font-body mt-6 max-w-[420px] text-[15px] leading-relaxed text-(--paper)/55 lg:mt-8">
                {p.desc}
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] max-h-[42vh] overflow-hidden border border-(--paper)/12 bg-(--paper)/[0.03] lg:max-h-none">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale contrast-[1.05]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <span
                  className="font-[ZeroMaster] absolute inset-0 flex items-center justify-center text-(--paper)/15"
                  style={{ fontSize: "16vh", display: p.image ? "none" : "flex" }}
                >
                  {p.num}
                </span>

                {/* Corner marks — a quiet editorial framing detail */}
                <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-(--paper)/30" />
                <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-(--paper)/30" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;