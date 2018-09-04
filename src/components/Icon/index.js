import React from 'react';
import { oneOf, string, number } from 'prop-types';

import icons from './icons';
import { black } from 'styles/colors';

const Icon = ({ type, color, size, ...remainProps }) => {
  const style = {
    verticalAlign: 'middle',
    fill: color,
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <svg style={style} viewBox="0 0 1024 1024" {...remainProps}>
      {icons[type]}
    </svg>
  );
};

Icon.defaultProps = {
  color: black,
  size: 20,
};

Icon.propTypes = {
  /** Type of icon, view storybook for the string */
  type: oneOf(Object.keys(icons)).isRequired,
  /** Color code of icon */
  color: string, // TODO: to limit colors used
  /** Size of icon, in `px` */
  size: number, // TODO: to define small and large icon size
  // TODO: theme: filled, outlined
};

export default Icon;
