import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useContext, useEffect, useRef } from 'react';
import { NavbarContext } from '../context/NavContext';
import ScrambleText from './ScrambleText';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'project' },
  { label: 'Contact', id: 'contact' },
  { label: 'Github', href: 'https://github.com/pritamx4', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pritamx4', external: true },
  { label: 'Resume', href: '/resume.pdf', external: true },
];

const FullScreenNav = () => {
  const { navOpen, setNavOpen, activeSection } = useContext(NavbarContext);
  const fullScreenRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(() => {
    gsap.set('.nav-row', { opacity: 0, y: -80, filter: 'blur(8px)' });

    tlRef.current = gsap
      .timeline({ paused: true })
      .to('.nav-row', {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.45,
        ease: 'power3.out',
        stagger: 0.05,
      });
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (navOpen) {
      fullScreenRef.current.style.display = 'flex';
      tl.play();
    } else {
      tl.reverse();
      tl.eventCallback('onReverseComplete', () => {
        if (fullScreenRef.current) {
          fullScreenRef.current.style.display = 'none';
        }
      });
    }
  }, [navOpen]);

  // scroll lock
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  const handleLinkClick = (id) => {
    setNavOpen(false);
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fixed inset-0 z-100 flex flex-col justify-center bg-(--ink)/95 backdrop-blur-2xl px-6 sm:px-12 lg:px-24 py-20 overflow-y-auto"
      style={{ display: 'none' }}
    >
      {/* Background dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(244,241,234,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col divide-y divide-(--paper)/12 border-y border-(--paper)/12 my-auto">
        {navLinks.map((link, index) => {
          const isActive = activeSection === link.id;

          return (
            <div
              key={link.label}
              className="nav-row group relative flex items-center justify-between py-3.5 sm:py-5 transition-all duration-300 hover:bg-(--paper)/[0.02] px-2 sm:px-4"
            >
              {/* Index Number */}
              <span className="font-mono text-xs text-(--paper)/45 tracking-wider transition-colors duration-300 group-hover:text-(--paper)/70">
                N&deg;{String(index + 1).padStart(2, '0')}
              </span>

              {/* Link Name */}
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ScrambleText
                    text={link.label}
                    className="font-heading text-xl sm:text-3xl md:text-4xl uppercase tracking-[0.12em] text-(--paper)/80 transition-all duration-300 group-hover:text-(--paper) group-hover:tracking-[0.16em]"
                  />
                  <svg
                    className="h-3.5 w-3.5 text-(--paper)/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-(--paper)"
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
              ) : (
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-(--paper) animate-ping" />
                  )}
                  <ScrambleText
                    text={link.label}
                    className={`font-heading text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.12em] transition-all duration-300 group-hover:tracking-[0.16em] ${
                      isActive
                        ? 'text-(--paper) font-bold'
                        : 'text-(--paper)/80 group-hover:text-(--paper)'
                    }`}
                  />
                </button>
              )}

              {/* Sub-label kicker */}
              <span className="hidden sm:block font-ui text-[10px] uppercase tracking-[0.25em] text-(--paper)/45 group-hover:text-(--paper)/75 font-medium">
                {link.external ? 'External' : 'Section'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Nav Metadata Footer */}
      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-4xl items-center justify-between font-ui text-[10px] uppercase tracking-[0.3em] text-(--paper)/45 font-medium">
        <span>PX4 // System Nav</span>
        <span>Navigation Hub</span>
      </div>
    </div>
  );
};

export default FullScreenNav;

/* 
═════════════════════════════════════════════════════════════════════════════════
  FUTURE DESIGN OPTION: BALANCED 2-COLUMN EDITORIAL FULLSCREEN MENU
  (Save this for whenever you want to activate the 2-column desktop layout)
═════════════════════════════════════════════════════════════════════════════════

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useContext, useEffect, useRef, useState } from 'react';
import { NavbarContext } from '../context/NavContext';

const mainSections = [
  { label: 'Home', id: 'home', num: '01', desc: 'Main terminal & introduction' },
  { label: 'About', id: 'about', num: '02', desc: 'Operator profile & toolkit' },
  { label: 'Projects', id: 'project', num: '03', desc: 'Curated digital archive' },
  { label: 'Contact', id: 'contact', num: '04', desc: 'Initiate transmission' },
];

const externalLinks = [
  { label: 'GitHub', href: 'https://github.com/pritamx4', tag: 'SOURCE' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pritamx4', tag: 'NETWORK' },
  { label: 'Resume', href: '/resume.pdf', tag: 'DOCUMENT' },
];

export const FullScreenNavTwoColumn = () => {
  const { navOpen, setNavOpen, activeSection } = useContext(NavbarContext);
  const fullScreenRef = useRef(null);
  const tlRef = useRef(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.set('.nav-anim-left', { opacity: 0, x: -40 });
    gsap.set('.nav-anim-row', { opacity: 0, y: -40, filter: 'blur(8px)' });
    gsap.set('.nav-anim-bottom', { opacity: 0, y: 20 });

    tlRef.current = gsap
      .timeline({ paused: true })
      .to('.nav-anim-left', { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' })
      .to('.nav-anim-row', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.45, ease: 'power3.out', stagger: 0.06 }, '-=0.3')
      .to('.nav-anim-bottom', { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2');
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (navOpen) {
      fullScreenRef.current.style.display = 'flex';
      tl.play();
    } else {
      tl.reverse();
      tl.eventCallback('onReverseComplete', () => {
        if (fullScreenRef.current) {
          fullScreenRef.current.style.display = 'none';
        }
      });
    }
  }, [navOpen]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  const handleLinkClick = (id) => {
    setNavOpen(false);
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fixed inset-0 z-100 flex flex-col justify-between bg-(--ink)/98 backdrop-blur-3xl px-6 sm:px-12 lg:px-[6vw] py-8 sm:py-12 overflow-y-auto"
      style={{ display: 'none' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(244,241,234,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 flex items-center justify-between border-b border-(--paper)/10 pb-4 text-[10px] font-ui uppercase tracking-[0.3em] text-(--paper)/40">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>System Nav // Online</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 font-mono text-[10px] text-(--paper)/40">
          <span>NEW DELHI [IST]: {time}</span>
          <span>LAT: 28.6139° N</span>
        </div>
      </div>

      <div className="relative z-10 my-auto grid grid-cols-1 gap-12 py-8 lg:grid-cols-[1fr_1.3fr] lg:gap-[6vw] items-center">
        <div className="nav-anim-left flex flex-col justify-center space-y-6">
          <div>
            <span className="font-ui text-[10px] uppercase tracking-[0.35em] text-(--paper)/35 block mb-2">
              Operator Profile
            </span>
            <h2 className="font-[ZeroMaster] text-4xl sm:text-5xl lg:text-6xl text-(--paper) tracking-tight">
              Pritam Singh
            </h2>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-(--paper)/60 mt-2">
              Frontend Developer &amp; UI Architect
            </p>
          </div>

          <p className="font-body text-xs sm:text-sm leading-relaxed text-(--paper)/50 max-w-sm">
            Building next-generation digital interfaces with focus on interaction design, kinetic typography, and fluid user experiences.
          </p>

          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-3 font-mono text-xs text-(--paper)/70">
              <span className="text-(--paper)/30">// CONTACT:</span>
              <a href="mailto:pritamx4.dev@gmail.com" className="hover:text-(--paper) hover:underline transition-colors">
                pritamx4.dev@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-(--paper)/70">
              <span className="text-(--paper)/30">// LOCATION:</span>
              <span>India [UTC +5:30]</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {externalLinks.map((ext) => (
              <a
                key={ext.label}
                href={ext.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded border border-(--paper)/12 bg-(--paper)/[0.02] px-3 py-1.5 font-ui text-[9px] uppercase tracking-wider text-(--paper)/60 transition-all duration-300 hover:border-(--paper)/40 hover:bg-(--paper)/10 hover:text-(--paper)"
              >
                <span>{ext.label}</span>
                <span className="text-[8px] text-(--paper)/30 group-hover:text-(--paper)/60">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col divide-y divide-(--paper)/10 border-y border-(--paper)/10">
          {mainSections.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="nav-anim-row group relative flex items-center justify-between py-4 sm:py-6 px-3 sm:px-5 transition-all duration-300 hover:bg-(--paper)/[0.03] text-left cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-8">
                  <span className="font-heading text-xs sm:text-sm text-(--paper)/35 tracking-wider transition-colors duration-300 group-hover:text-(--paper)">
                    {link.num}
                  </span>
                  <div>
                    <h3 className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.12em] transition-all duration-300 group-hover:tracking-[0.16em] ${isActive ? 'text-(--paper) font-bold' : 'text-(--paper)/60 group-hover:text-(--paper)'}`}>
                      {link.label}
                    </h3>
                    <p className="font-body hidden sm:block text-[11px] text-(--paper)/35 mt-0.5 group-hover:text-(--paper)/60 transition-colors">
                      {link.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {isActive && <span className="h-2 w-2 rounded-full bg-(--paper) shadow-[0_0_8px_rgba(244,241,234,0.8)]" />}
                  <span className="font-mono text-sm text-(--paper)/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-(--paper)/70">&rarr;</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="nav-anim-bottom relative z-10 flex items-center justify-between border-t border-(--paper)/10 pt-4 font-ui text-[9px] uppercase tracking-[0.3em] text-(--paper)/30">
        <span>&copy; {new Date().getFullYear()} Pritam Singh</span>
        <span>Portfolio Hub // v2.5</span>
      </div>
    </div>
  );
};
*/
