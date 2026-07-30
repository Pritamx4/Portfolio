import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useContext, useEffect, useRef } from 'react';
import { NavbarContext } from '../context/NavContext';

const MenuIcon = () => {
  const navWhiteRef = useRef(null);
  const line1Ref = useRef(null); // upar wali (badi) line
  const line2Ref = useRef(null); // neeche wali (chhoti) line
  const tlRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  useGSAP(() => {
    tlRef.current = gsap
      .timeline({ paused: true })
      // Stage 1: dono lines vertical center pe aayein
      .to(line1Ref.current, { top: '7px', duration: 0.2, ease: 'power2.inOut' }, 0)
      .to(line2Ref.current, { top: '7px', duration: 0.2, ease: 'power2.inOut' }, 0)
      // Stage 2: dono ka width equal ho jaaye
      .to(
        [line1Ref.current, line2Ref.current],
        { width: '2.5rem', duration: 0.15, ease: 'power2.inOut' },
      )
      // Stage 3: cross banaye (rotate)
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
        navWhiteRef.current.style.height = '100%';
      }}
      onMouseLeave={() => {
        navWhiteRef.current.style.height = '0';
      }}
      className="group h-10 relative w-48  cursor-pointer"
    >
      <div className="relative z-10 h-4 w-12 mx-28 my-3">
        <span
          ref={line1Ref}
          className="absolute right-0 top-0 h-0.5 w-12 bg-white transition-colors duration-300 group-hover:bg-black origin-center"
        ></span>
        <span
          ref={line2Ref}
          className="absolute right-0 top-3.5 h-0.5 w-8 bg-white transition-colors duration-300 group-hover:bg-black origin-center"
        ></span>
      </div>
      <div
        ref={navWhiteRef}
        className="lg:block hidden bg-white absolute transition-all top-0 h-0 w-full z-0"
      ></div>
    </div>
  );
};

export default MenuIcon;