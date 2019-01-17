import React from 'react';
import { oneOf, string, number, shape } from 'prop-types';

import icons from './icons';

const Icon = ({ type, color, size, verticalAlign, style, ...remainProps }) => {
  const rootStyle = {
    verticalAlign,
    fill: color,
    width: `${size}px`,
    height: `${size}px`,
    ...style,
  };

  return (
    <svg style={rootStyle} viewBox="0 0 1024 1024" {...remainProps}>
      {icons[type]}
    </svg>
  );
};

Icon.defaultProps = {
  color: 'currentColor',
  size: 20,
  style: {},
  verticalAlign: 'middle',
};

Icon.propTypes = {
  /** Type of icon, view storybook for the string */
  type: oneOf(Object.keys(icons)).isRequired,
  /** Color code of icon */
  color: string,
  /** Size of icon, in `px` */
  size: number, // TODO: to define small and large icon size
  /** Additional style apply to icon */
  style: shape({}),
  /** Vertical align of icon, default is `middle` */
  verticalAlign: string,
  // TODO: theme: filled, outlined
};

export default Icon;
