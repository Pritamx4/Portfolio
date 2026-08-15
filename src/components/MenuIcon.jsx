import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useContext, useEffect, useRef } from 'react';
import { NavbarContext } from '../context/NavContext';

const MenuIcon = () => {
  const navWhiteRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const tlRef = useRef(null);
  const { navOpen, setNavOpen } = useContext(NavbarContext);

  const isHoverCapable = () =>
    typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

  useGSAP(() => {
    tlRef.current = gsap
      .timeline({ paused: true })
      .to(line1Ref.current, { top: '7px', duration: 0.2, ease: 'power2.inOut' }, 0)
      .to(line2Ref.current, { top: '7px', duration: 0.2, ease: 'power2.inOut' }, 0)
      .to([line1Ref.current, line2Ref.current], { width: '2.5rem', duration: 0.15, ease: 'power2.inOut' })
      .to(line1Ref.current, { rotate: 45, duration: 0.25, ease: 'power2.inOut' }, '>')
      .to(line2Ref.current, { rotate: -45, duration: 0.25, ease: 'power2.inOut' }, '<');
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    navOpen ? tl.play() : tl.reverse();
  }, [navOpen]);

  return (
    <div
      onClick={() => setNavOpen((prev) => !prev)}
      onMouseEnter={() => {
        if (isHoverCapable()) navWhiteRef.current.style.height = '100%';
      }}
      onMouseLeave={() => {
        if (isHoverCapable()) navWhiteRef.current.style.height = '0';
      }}
      className="group relative top-0 right-0 h-12 w-40 sm:w-48 cursor-pointer flex items-center justify-end pr-6 sm:pr-8 select-none"
    >
      <div className="relative z-10 h-4 w-10 sm:w-12">
        <span
          ref={line1Ref}
          className="absolute right-0 top-0 h-0.5 w-10 sm:w-12 bg-(--paper) transition-colors duration-300 group-hover:bg-(--ink) origin-center"
        ></span>
        <span
          ref={line2Ref}
          className="absolute right-0 top-3.5 h-0.5 w-7 sm:w-8 bg-(--paper) transition-colors duration-300 group-hover:bg-(--ink) origin-center"
        ></span>
      </div>
      <div
        ref={navWhiteRef}
        className="bg-(--paper) absolute top-0 right-0 h-0 w-full z-0 transition-all duration-300 ease-in-out"
      ></div>
    </div>
  );
};

export default MenuIcon;