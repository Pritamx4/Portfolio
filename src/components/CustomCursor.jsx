import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * CustomCursor - High-performance inverted difference lens cursor with GSAP physics
 */
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const [cursorState, setCursorState] = useState({
    hovered: false,
    label: '',
    visible: false,
  });

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // High performance GSAP quickTo setters for 120fps buttery tracking
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' });

    let isVisible = false;

    const onMouseMove = (e) => {
      if (!isVisible) {
        isVisible = true;
        setCursorState((prev) => ({ ...prev, visible: true }));
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.75, duration: 0.15, ease: 'power2.out' });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        scale: cursorState.hovered ? 1.5 : 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      isVisible = false;
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .cursor-pointer, [data-cursor]');
      if (target) {
        const label = target.getAttribute('data-cursor') || '';
        setCursorState((prev) => ({
          ...prev,
          hovered: true,
          label,
        }));
      } else {
        setCursorState((prev) => ({
          ...prev,
          hovered: false,
          label: '',
        }));
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorState.hovered]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed top-0 left-0 z-999999 hidden md:flex items-center justify-center rounded-full will-change-transform mix-blend-difference select-none transition-opacity duration-300 ${cursorState.visible ? 'opacity-100' : 'opacity-0'
        } ${cursorState.label
          ? 'h-16 w-16 -mt-8 -ml-8 bg-white'
          : cursorState.hovered
            ? 'h-12 w-12 -mt-6 -ml-6 bg-white'
            : 'h-2.5 w-2.5 -mt-1.25 -ml-1.25 bg-white'
        }`}
      style={{
        transitionProperty: 'width, height, margin, opacity',
        transitionDuration: '220ms',
        transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      {cursorState.label && (
        <span
          ref={textRef}
          className="font-ui text-[8px] font-bold uppercase tracking-[0.25em] text-black select-none"
        >
          {cursorState.label}
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
