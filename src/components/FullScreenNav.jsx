import { useGSAP } from '@gsap/react';
import { filter } from 'framer-motion/client';
import gsap from 'gsap';

const FullScreenNav = () => {

    useGSAP(()=>{
        gsap.set(".link",{
            opacity:0,
            y:-120,
            filter:"blur(10px)"
        });
        const tl = gsap.timeline();
        tl.to(".link",{
            opacity:1,
            y:10,
            filter:"blur(0px)",
            duration:0.45,
            ease:"power4.out",
            stagger:0.07
        });
        tl.to(".link",{
            y:0,
            duration:0.35,
            ease:"power4.out",
            stagger:0.07
        },"-=0.35");
    });


  return (
    <div id="fullscreennav" className="h-screen w-full py-24 absolute bg-black">
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
