import React from 'react';
import iconType from './iconHelper';
import { PropTypes } from 'prop-types';

const Index = ({ type, color, size }) => {
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
      <g>{iconType[type]()}</g>
    </svg>
  );
};

Index.defaultProps = {
  color: 'black',
  size: 20,
};

Index.propTypes = {
  type: PropTypes.oneOf(Object.keys(iconType)).isRequired,
  color: PropTypes.string, // color: PropTypes.oneOf(Object.keys(colors)), TODO: to limit colors used
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'large']),
    PropTypes.number,
  ]),
  // TODO: angle option, pass props to icon
};

export { Index as default, iconType };
