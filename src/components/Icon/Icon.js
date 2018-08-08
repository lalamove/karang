import React from 'react';
import { PropTypes } from 'prop-types';
import { iconType } from './IconType';

const Icon = ({ type, color, size, angle }) => {
  const style = {
    verticalAlign: 'middle',
    fill: color,
    width: `${size}px`,
    height: `${size}px`,
  };

  if (type === iconType.arrow) {
    return (
      <svg
        style={style}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            d="M746.071 372.402c0.38 3.071-0.646 6.149-2.793 8.378l-220.625 279.273c-2.69 3.452-6.795 5.505-11.171 5.585-4.2-0.697-8.093-2.643-11.171-5.585l-220.625-279.273c-4.627-6.17-3.377-14.922 2.793-19.549s14.922-3.377 19.549 2.793l209.455 265.309 209.455-265.309c5.279-4.952 13.094-6.068 19.549-2.793 2.942 3.078 4.889 6.97 5.585 11.171v0z"
            style={{ transformOrigin: '50% 50%' }}
            transform={`rotate(${angle})`}
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      style={style}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>{type}</g>
    </svg>
  );
};

Icon.defaultProps = {
  type: iconType.question,
  color: 'currentColor',
  size: 20,
  angle: null,
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(iconType)),
  // color: PropTypes.oneOf(Object.keys(colors)), TODO: to limit colors used
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'large']),
    PropTypes.number,
  ]),
  angle: null,
};

export { iconType };
export default Icon;
