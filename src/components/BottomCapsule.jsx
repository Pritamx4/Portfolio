import { useState } from 'react';

const BottomCapsule = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2
        transition-all duration-300 ease-in-out
        bg-white/5 backdrop-blur-5xl z-90 border border-white/15 ${open ? 'w-96 h-80 rounded-4xl' : 'w-96 h-20 rounded-4xl'}`}
      ></div>
    </>
  );
};

export default BottomCapsule;
