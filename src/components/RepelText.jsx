import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * RepelText
 * Splits text into individual characters and applies repulsive magnetic
 * dispersion physics when the mouse cursor approaches, with smooth elastic recovery.
 */
const RepelText = ({
  text,
  className = '',
  radius = 90,
  force = 35,
  as: Component = 'span',
}) => {
  const containerRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    const isFinePointer =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches;

    if (!isFinePointer || !containerRef.current) return;

    const container = containerRef.current;
    const chars = charsRef.current.filter(Boolean);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();

      // Quick bounding check to avoid calculating offscreen
      if (
        clientX < rect.left - radius ||
        clientX > rect.right + radius ||
        clientY < rect.top - radius ||
        clientY > rect.bottom + radius
      ) {
        return;
      }

      chars.forEach((charEl) => {
        if (!charEl) return;
        const charRect = charEl.getBoundingClientRect();
        const charCenterX = charRect.left + charRect.width / 2;
        const charCenterY = charRect.top + charRect.height / 2;

        const dx = clientX - charCenterX;
        const dy = clientY - charCenterY;
        const dist = Math.hypot(dx, dy);

        if (dist < radius && dist > 0) {
          // Repel angle away from cursor
          const angle = Math.atan2(charCenterY - clientY, charCenterX - clientX);
          const power = (1 - dist / radius) * force;
          const moveX = Math.cos(angle) * power;
          const moveY = Math.sin(angle) * power;
          const rotate = (moveX / force) * 14;

          gsap.to(charEl, {
            x: moveX,
            y: moveY,
            rotate: rotate,
            duration: 0.18,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        } else {
          // Snap back if outside radius
          if (charEl._gsap && (charEl._gsap.x !== 0 || charEl._gsap.y !== 0)) {
            gsap.to(charEl, {
              x: 0,
              y: 0,
              rotate: 0,
              duration: 0.65,
              ease: 'elastic.out(1.1, 0.4)',
              overwrite: 'auto',
            });
          }
        }
      });
    };

    const handleMouseLeave = () => {
      chars.forEach((charEl) => {
        if (!charEl) return;
        gsap.to(charEl, {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.7,
          ease: 'elastic.out(1.1, 0.35)',
          overwrite: 'auto',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [radius, force]);

  // Words & Characters split preserving whitespace and line wrapping
  const words = typeof text === 'string' ? text.split(' ') : [];

  let charIndex = 0;

  return (
    <Component
      ref={containerRef}
      className={`inline-flex flex-nowrap whitespace-nowrap items-center ${className}`}
    >
      {words.map((word, wordIdx) => (
        <span key={`word-${wordIdx}`} className="inline-flex whitespace-nowrap">
          {word.split('').map((char) => {
            const currentIndex = charIndex++;
            return (
              <span
                key={`char-${currentIndex}`}
                ref={(el) => (charsRef.current[currentIndex] = el)}
                className="inline-block will-change-transform select-none"
                style={{ transformOrigin: 'center center' }}
              >
                {char}
              </span>
            );
          })}
          {wordIdx < words.length - 1 && (
            <span className="inline-block whitespace-pre">&nbsp;</span>
          )}
        </span>
      ))}
    </Component>
  );
};

export default RepelText;
