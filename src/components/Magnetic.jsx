import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * Magnetic - Smooth magnetic pull effect using GSAP physics
 */
const Magnetic = ({
  children,
  strength = 0.12,
  maxDistance = 10,
  className = '',
  ...props
}) => {
  const magneticRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const element = magneticRef.current;
    if (!element) return;

    const onMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let x = (e.clientX - centerX) * strength;
      let y = (e.clientY - centerY) * strength;

      // Clamp max displacement so it remains tight and subtle
      x = Math.max(-maxDistance, Math.min(maxDistance, x));
      y = Math.max(-maxDistance, Math.min(maxDistance, y));

      gsap.to(element, {
        x,
        y,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1.15, 0.4)',
      });
    };

    element.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength]);

  return (
    <div
      ref={magneticRef}
      className={`inline-block will-change-transform ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Magnetic;
