import React from 'react';
import renderSVG from './IconHelper';
import { PropTypes } from 'prop-types';

const Index = ({ type, color, size, options }) => {
  const style = {
    verticalAlign: 'middle',
    fill: color,
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <svg
      style={style}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>{renderSVG(type, options)}</g>
    </svg>
  );
};

const iconType = Object.freeze({
  facebook: 'facebook',
  add: 'add',
  clock: 'clock',
  cross: 'cross',
  notificationBell: 'notificationBell',
  order: 'order',
  pin: 'pin',
  question: 'question',
  arrow: 'arrow',
  settingsGear: 'settingsGear',
  smallLogo: 'smallLogo',
});

const optionsObj = Object.freeze({
  angle: 0,
});

Index.defaultProps = {
  type: iconType.question,
  color: 'currentColor',
  size: 20,
  options: { angle: null },
};

Index.propTypes = {
  type: PropTypes.oneOf(Object.keys(iconType)),
  // color: PropTypes.oneOf(Object.keys(colors)), TODO: to limit colors used
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'large']),
    PropTypes.number,
  ]),
  options: PropTypes.oneOf(Object.keys(optionsObj)),
};

export { Index as default, iconType };
