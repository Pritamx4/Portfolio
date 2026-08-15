import React from 'react';
import Magnetic from './Magnetic';
import RollingText from './RollingText';

const Button = (props) => {
  const iconSrc =
    props.text === 'Contact'
      ? 'https://cdn.lordicon.com/motnbmtz.json'
      : props.text === 'Projects'
        ? 'https://cdn.lordicon.com/tsrgicte.json'
        : props.text === 'Timeline'
          ? 'https://cdn.lordicon.com/xnusbqxr.json'
          : null;

  return (
    <Magnetic strength={0.28}>
      <button
        onClick={props.onClick}
        className="group flex lg:h-12 lg:w-48 h-10 w-38 skew-x-[-20deg] items-center justify-center border border-(--paper) bg-(--paper) px-8 py-3 text-(--ink) transition duration-300 ease-in-out hover:bg-(--ink) hover:text-(--paper) cursor-pointer select-none"
      >
        <span className="font-ui flex items-center gap-3 skew-x-20 lg:text-sm text-xs font-medium uppercase tracking-[0.16em] leading-none">
          {iconSrc ? (
            <lord-icon
              className="current-color"
              src={iconSrc}
              trigger="hover"
              style={{ width: '18px', height: '18px' }}
            ></lord-icon>
          ) : null}
          <RollingText text={props.text} />
        </span>
      </button>
    </Magnetic>
  );
};

export default Button;
