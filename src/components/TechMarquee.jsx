import React from 'react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiThreedotjs,
  SiGreensock,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const TECH_ITEMS = [
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss />, color: '#1572B6' },
  { name: 'JAVASCRIPT', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'REACT', icon: <SiReact />, color: '#61DAFB' },
  { name: 'NEXT.JS', icon: <SiNextdotjs />, color: '#FFFFFF' },
  { name: 'TAILWIND', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'NODE.JS', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'EXPRESS', icon: <SiExpress />, color: '#FFFFFF' },
  { name: 'MONGODB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'JWT', icon: <SiJsonwebtokens />, color: '#FB015B' },
  { name: 'THREE.JS', icon: <SiThreedotjs />, color: '#FFFFFF' },
  { name: 'GSAP', icon: <SiGreensock />, color: '#88CE02' },
  { name: 'GIT', icon: <SiGit />, color: '#F05032' },
  { name: 'GITHUB', icon: <SiGithub />, color: '#FFFFFF' },
  { name: 'REST API', icon: <TbApi />, color: '#6366F1' },
];

const TechMarquee = () => {
  const doubledItems = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="relative w-full border-y border-(--paper)/10 bg-(--ink) py-5 sm:py-7 overflow-hidden select-none">
      {/* Left & Right gradient fade masks */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-20 sm:w-32 bg-gradient-to-r from-(--ink) to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-20 sm:w-32 bg-gradient-to-l from-(--ink) to-transparent z-10" />

      {/* Marquee Track */}
      <div className="animate-marquee items-center gap-8 sm:gap-12">
        {doubledItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group flex items-center gap-3 sm:gap-4 shrink-0 px-3 py-2 rounded-sm transition-all duration-300 hover:bg-(--paper)/[0.04]"
          >
            {/* Official Brand Colored Icon — big & recognizable */}
            <span
              className="text-[22px] sm:text-[26px] shrink-0 transition-transform duration-300 group-hover:scale-125"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </span>

            {/* Tech Name */}
            <span className="font-heading text-xs sm:text-[13px] uppercase tracking-[0.18em] text-(--paper)/80 font-medium transition-colors duration-300 group-hover:text-(--paper)">
              {tech.name}
            </span>

            {/* Diamond Separator */}
            <span className="ml-3 sm:ml-5 text-[7px] text-(--paper)/20 select-none">
              &#9670;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
