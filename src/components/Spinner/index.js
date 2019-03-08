import React from 'react';
import { oneOfType, string, number } from 'prop-types';
import { primary } from 'styles/colors';

const sizeMap = {
  large: 80,
};

/**
 * Spinner component is used to indicate a loading state.
 */
const Spinner = ({ size, color }) => (
  <svg
    width={sizeMap[size] || size}
    height={sizeMap[size] || size}
    viewBox="0 0 50 50"
    xmlSpace="preserve"
  >
    <path
      fill={color}
      d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

Spinner.defaultProps = {
  size: 16,
  color: primary.main,
};

Spinner.propTypes = {
  /** Size of the spinner, in number (in `px`) or `large` */
  size: oneOfType([string, number]),
  /** Color of the spinner */
  color: string,
};

export default Spinner;
