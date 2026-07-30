import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useContext, useRef, useEffect } from 'react';
import { NavbarContext } from '../context/NavContext';

const FullScreenNav = () => {
  const [navOpen] = useContext(NavbarContext);
  const fullScreenRef = useRef(null);
  const tlRef = useRef(null);

  // timeline sirf ek baar banega
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
      .to(
        '.link',
        { y: 0, duration: 0.35, ease: 'power4.out', stagger: 0.07 },
        '-=0.35',
      );
  }, []); // <-- empty deps, sirf mount pe

  // navOpen change hone pe usi timeline ko control karo
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

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="z-100 h-screen w-full py-24 fixed bg-black"
      style={{display: 'none'}}
    >
      <div className="">
        <div className="link origin-top border-t border-white">
          <h1 className="font-bold text-[6vw] font-ui leading-none   text-center uppercase">
            Home
          </h1>
          {/* <div>
                    <div>
                        <h2>Home Section</h2>
                        <img src="" alt="" />
                        <h2>Home Section</h2>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h2>Home Section</h2>
                        <img src="" alt="" />
                        <h2>Home Section</h2>
                        <img src="" alt="" />
                    </div>
                </div> */}
        </div>
        <div className="link origin-top border-t border-white">
          <h1 className="font-bold text-[6vw] font-ui leading-none   text-center uppercase">
            About
          </h1>
        </div>
        <div className="link origin-top border-t border-white">
          <h1 className="font-bold text-[6vw] font-ui leading-none   text-center uppercase">
            Projects
          </h1>
        </div>
        <div className="link origin-top border-t border-white">
          <h1 className="font-bold text-[6vw] font-ui leading-none   text-center uppercase">
            Contact
          </h1>
        </div>
        <div className="link origin-top border-t border-white">
          <h1 className="font-bold text-[6vw] font-ui leading-none   text-center uppercase">
            Github
          </h1>
        </div>
        <div className="link origin-top border-t border-white">
          <h1 className="font-bold text-[6vw] font-ui leading-none   text-center uppercase">
            LinkedIn
          </h1>
        </div>
        <div className="link origin-top border-t border-b border-white">
          <h1 className="font-bold text-[6vw] font-ui leading-none text-center uppercase">
            Resume
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
