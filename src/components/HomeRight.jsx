import React, { useRef } from 'react';
import gsap from 'gsap';
import Logo from '../assets/px4 main logo.svg';

const HomeRight = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !logoRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Smooth subtle 2D logo parallax glide
    gsap.to(logoRef.current, {
      x: x * 0.08,
      y: y * 0.08,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1.1, 0.4)',
    });
  };

  return (
    <div className="relative z-10 flex w-full flex-1 items-center justify-center px-6 py-8 lg:w-1/2 lg:px-[5vw] lg:py-0 select-none">
      {/* ── Single Unified Editorial Frame ── */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[330px] xl:max-w-[350px] flex-col border border-(--paper)/15 bg-(--paper)/[0.02] p-3 sm:p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-(--paper)/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Top Header Inside Frame */}
        <div className="flex items-center justify-between pb-2.5 border-b border-(--paper)/10 font-mono text-[9px] uppercase tracking-[0.2em] text-(--paper)/50">
          <span>PX4 // IDENTITY</span>
          <span>EST. 2026</span>
        </div>

        {/* Center Logo Showcase Frame */}
        <div className="relative mt-2.5 aspect-[4/4.2] w-full overflow-hidden border border-(--paper)/12 bg-(--ink) flex items-center justify-center">
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,241,234,0.06)_0%,transparent_70%)]" />

          {/* SVG Logo with Mouse Parallax */}
          <img
            ref={logoRef}
            src={Logo}
            alt="PX4 Logo"
            className="relative z-1 h-3/5 w-3/5 object-contain opacity-90 transition-transform duration-500 will-change-transform group-hover:scale-105 group-hover:opacity-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          />

          {/* 4 Corner Crosshairs */}
          <span className="absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-(--paper)/40 z-2 transition-all duration-300 group-hover:border-(--paper)" />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-(--paper)/40 z-2 transition-all duration-300 group-hover:border-(--paper)" />
          <span className="absolute left-2 bottom-2 h-2.5 w-2.5 border-l border-b border-(--paper)/40 z-2 transition-all duration-300 group-hover:border-(--paper)" />
          <span className="absolute right-2 bottom-2 h-2.5 w-2.5 border-r border-b border-(--paper)/40 z-2 transition-all duration-300 group-hover:border-(--paper)" />
        </div>

        {/* Bottom Identity Footer Inside Frame */}
        <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-(--paper)/10 px-1">
          <div className="flex flex-col">
            <span className="font-heading text-xs uppercase tracking-[0.16em] text-(--paper)/90 font-medium">
              Pritam Singh
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-(--paper)/45">
              Frontend Developer
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-(--paper)/40">
            PX4
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;



// future me ek time aayega jb ye website mujhe bohot purani lgegi, prr tab tak i want this to be evergreen and aesthetic
// just like how in 2017 people use to love 2016 websites, ya 2010 me log 2004 websites ko love krte the, waise abhi mujhe 2026 ki websites bohot purani lgegi prr tab tak i want this to be evergreen and aesthetic
// i want this website to be like a fine wine, jo time ke saath better ho or bohot saare log isse admire karein.
// me future me iske right side me ek chatbot add krunga jisse user mere bare me kuch bhi puch ske or usko mere bare me hi reply mile na ki kuch bhi. for example agar koi mujhse mere coding style ke bare me puche toh usko mere coding style ke bare me hi reply mile, same for my personality, my work ethic, etc
