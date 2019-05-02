import React from 'react';
import { string, number, shape, node } from 'prop-types';

const SVGIcon = ({
  color,
  size,
  verticalAlign,
  style, // TODO: should we keep this, is there really usecase for this?
  viewBox,
  children,
  title,
  ...remainProps
}) => {
  const rootStyle = {
    verticalAlign,
    fill: color,
    width: `${size}px`,
    height: `${size}px`,
    ...style,
  };

  return (
    // focusable IE specific feature
    <svg
      aria-hidden="false"
      role="img"
      aria-labelledby="title"
      focusable="false"
      style={rootStyle}
      viewBox={viewBox}
      {...remainProps}
    >
      <title>{title}</title>
      {children}
    </svg>
  );
};

SVGIcon.defaultProps = {
  color: 'currentColor',
  size: 20,
  style: {},
  verticalAlign: 'middle',
  viewBox: '0 0 217 217',
  title: '',
};

SVGIcon.propTypes = {
  /** Color code of icon */
  color: string,
  /** Size of icon, in `px` */
  size: number, // TODO: to define small and large icon size
  /** Additional style apply to icon */
  style: shape({}),
  /** Vertical align of icon, default is `middle` */
  verticalAlign: string,
  /** viewBox of svg */
  viewBox: string,
  title: string,
  children: node.isRequired,
  // TODO: theme: filled, outlined
};

export default SVGIcon;
