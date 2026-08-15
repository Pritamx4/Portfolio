import React from 'react';

/**
 * RollingText - Slot machine rolling text reveal on parent group-hover
 */
const RollingText = ({ text, className = '' }) => {
  return (
    <span className={`relative inline-flex flex-col h-[1.15em] overflow-hidden leading-none select-none ${className}`}>
      <span className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute top-full left-0 inline-block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {text}
      </span>
    </span>
  );
};

export default RollingText;
