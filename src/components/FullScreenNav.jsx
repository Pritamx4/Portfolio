import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useContext, useEffect, useRef } from 'react';
import { NavbarContext } from '../context/NavContext';

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
    gsap.set('.link', { opacity: 0, y: -120, filter: 'blur(10px)' });

    tlRef.current = gsap
      .timeline({ paused: true })
      .to('.link', {
        opacity: 1,
        y: 10,
        filter: 'blur(0px)',
        duration: 0.45,
        ease: 'power4.out',
        stagger: 0.07,
      })
      .to('.link', { y: 0, duration: 0.35, ease: 'power4.out', stagger: 0.07 }, '-=0.35');
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (navOpen) {
      fullScreenRef.current.style.display = 'block';
      tl.play();
    } else {
      tl.reverse();
      tl.eventCallback('onReverseComplete', () => {
        fullScreenRef.current.style.display = 'none';
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
      // thoda delay taaki close animation shuru ho jaaye phir scroll ho
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="z-100 h-screen w-full py-16 md:py-24 fixed inset-0 bg-black overflow-y-auto"
      style={{ display: 'none' }}
    >
      <div className="flex flex-col justify-center h-full px-4">
        {navLinks.map((link, index) => (
          <div key={link.label} className="link origin-top border-t border-white/10 last:border-b">
            <span className="absolute left-6  translate-y-1/2 text-white/20 text-xl font-medium">
              {String(index + 1).padStart(2, '0')}
            </span>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-[6vw] font-ui leading-tight md:leading-none text-center uppercase py-2 md:py-0 text-white">
                  {link.label}
                </h1>
              </a>
            ) : (
              <button onClick={() => handleLinkClick(link.id)} className="w-full">
                <h1
                  className={`font-bold text-4xl sm:text-5xl md:text-[6vw] font-ui leading-tight md:leading-none text-center uppercase py-2 md:py-0 transition-colors duration-300 ${
                    activeSection === link.id ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {link.label}
                </h1>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullScreenNav;
