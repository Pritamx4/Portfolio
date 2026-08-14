import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ASSETS_TO_PRELOAD = [
  '/projects/nimbus.jpg',
  '/projects/kioku.jpg',
  '/projects/fieldnote.jpg',
  '/projects/passage.jpg',
];

const LOGO_PATHS = [
  'M484.013 368.507L648.942 158.479H775.693L613.309 384.777L850.013 688.479H731.407L484.013 368.507Z',
  'M72.4605 251.719L1.01306 158.479H62.2538L130.129 232.479V288.719L88.2811 336.079H72.4605V251.719Z',
  'M618.013 158.479H97.9775L161.77 232.479V305.986L118.901 361.733H72.4605L71.4399 861.479L184.225 725.319V241.359H337.837L457.767 361.733L618.013 158.479Z',
  'M332.733 294.146L287.313 354.333H301.603L346.002 305.986L332.733 294.146Z',
  'M323.547 375.546C328.311 368.475 344.471 346.933 371.009 317.333L429.188 375.546L371.009 451.026H208.211L263.327 375.546H323.547Z',
  'M866.304 265.141H781.013L982.237 1.47929V483.464H1043.01L921.461 688.479H893.882V568.722H781.013V483.464H893.882V227.687L866.304 265.141Z',
];

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const pathRefs = useRef([]);
  const flashRef = useRef(null);
  const curtainTopRef = useRef(null);
  const curtainBottomRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let isMounted = true;

    // Background Asset Preloading
    const preloadAssets = () => {
      const imgPromises = ASSETS_TO_PRELOAD.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      const fontPromise = document.fonts ? document.fonts.ready : Promise.resolve();
      return Promise.all([...imgPromises, fontPromise]);
    };

    preloadAssets();

    // ── Setup Initial SVG Strokes ──
    pathRefs.current.forEach((path) => {
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
          fill: 'rgba(244, 241, 234, 0)',
          stroke: '#f4f1ea',
          strokeWidth: 5,
        });
      }
    });

    gsap.set(flashRef.current, { opacity: 0 });
    gsap.set(textRef.current, { opacity: 0, y: 8 });

    // ── Master Cinematic Timeline ──
    const tl = gsap.timeline({
      delay: 0.1,
      onComplete: () => {
        if (isMounted) {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }
      },
    });

    // 1. Kinetic Stroke Draw (Snappy & Crisp)
    tl.to(pathRefs.current, {
      strokeDashoffset: 0,
      duration: 1.1,
      ease: 'power3.inOut',
      stagger: 0.06,
    })
      // 2. Instant Luminous Solid Fill with Glow Burst
      .to(
        pathRefs.current,
        {
          fill: '#f4f1ea',
          stroke: 'rgba(244, 241, 234, 0)',
          duration: 0.35,
          ease: 'power2.out',
        },
        '-=0.2'
      )
      .to(
        logoWrapperRef.current,
        {
          filter: 'drop-shadow(0 0 45px rgba(244, 241, 234, 0.7))',
          scale: 1.06,
          duration: 0.3,
          ease: 'power2.out',
        },
        '-=0.25'
      )
      .to(
        textRef.current,
        {
          opacity: 0.5,
          y: 0,
          duration: 0.25,
          ease: 'power2.out',
        },
        '-=0.2'
      )
      // 3. 💥 THE CRAZY PORTAL DIVE (Camera rushes straight THROUGH the logo)
      .to(
        textRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.2,
        },
        '+=0.15'
      )
      .to(
        logoWrapperRef.current,
        {
          scale: 28,
          opacity: 0,
          filter: 'drop-shadow(0 0 100px rgba(244, 241, 234, 1)) blur(20px)',
          duration: 0.75,
          ease: 'expo.in',
        },
        '-=0.1'
      )
      // 4. Subtle Optical Flash Beam
      .to(
        flashRef.current,
        {
          opacity: 0.35,
          duration: 0.15,
          ease: 'power2.in',
        },
        '-=0.35'
      )
      .to(
        flashRef.current,
        {
          opacity: 0,
          duration: 0.45,
          ease: 'power3.out',
        },
        '-=0.2'
      )
      // 5. Dual Hydraulic Shutter Blast (Opens like a cinematic vault door)
      .to(
        curtainTopRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '-=0.45'
      )
      .to(
        curtainBottomRef.current,
        {
          yPercent: 100,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '<'
      )
      // 6. Animate Hero elements smoothly into place as the vault opens
      .fromTo(
        '#home',
        {
          scale: 0.94,
          opacity: 0.4,
          filter: 'blur(8px)',
        },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      );

    return () => {
      isMounted = false;
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-999 flex items-center justify-center select-none pointer-events-auto overflow-hidden"
    >
      {/* ── Top Shutter Vault Door ── */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-(--ink) z-10"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(244,241,234,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* ── Bottom Shutter Vault Door ── */}
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-(--ink) z-10"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(244,241,234,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* ── Optical Flash Burst Overlay ── */}
      <div
        ref={flashRef}
        className="pointer-events-none absolute inset-0 bg-(--paper) z-20"
      />

      {/* ── Center Stage: Logo Stroke-to-Fill & Dimension Portal ── */}
      <div className="relative z-30 flex flex-col items-center justify-center pointer-events-none">
        <div
          ref={logoWrapperRef}
          className="relative flex items-center justify-center"
          style={{ willChange: 'transform, filter, opacity' }}
        >
          <svg
            viewBox="0 0 1044 863"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-visible"
          >
            {LOGO_PATHS.map((d, index) => (
              <path
                key={index}
                ref={(el) => (pathRefs.current[index] = el)}
                d={d}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>
        </div>

        {/* Minimal Typographic Kicker */}
        <span
          ref={textRef}
          className="font-ui mt-6 text-[10px] uppercase tracking-[0.4em] text-(--paper)"
        >
          PX4 // Edition 2025
        </span>
      </div>
    </div>
  );
};

export default Preloader;
