import React from 'react';
import { PropTypes } from 'prop-types';

const Icon = ({ children, color, size }) => {
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
      <g>{children}</g>
    </svg>
  );
};

Icon.defaultProps = {
  children: null,
  color: 'currentColor',
  size: 20,
};

Icon.propTypes = {
  children: PropTypes.node,
  // color: PropTypes.oneOf(Object.keys(colors)), TODO: to limit colors used
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'large']),
    PropTypes.number,
  ]),
};

export default Icon;