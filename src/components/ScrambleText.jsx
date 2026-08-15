import React, { useState, useRef, useEffect, useCallback } from 'react';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789_#@$%&!';

/**
 * ScrambleText - Decodes text with a hacker/cyberpunk scramble on hover or trigger
 */
const ScrambleText = ({
  text,
  as: Component = 'span',
  className = '',
  triggerOnHover = true,
  speed = 20,
  scrambleOnMount = false,
  ...props
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const startScramble = useCallback(() => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n' || char === '\t') return char;
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }

      iteration += 1 / 2;
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    setDisplayText(text);
    if (scrambleOnMount) {
      startScramble();
    }
    return () => clearInterval(intervalRef.current);
  }, [text, scrambleOnMount, startScramble]);

  const handleMouseEnter = (e) => {
    if (triggerOnHover) {
      startScramble();
    }
    props.onMouseEnter?.(e);
  };

  return (
    <Component
      className={className}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {displayText}
    </Component>
  );
};

export default ScrambleText;
