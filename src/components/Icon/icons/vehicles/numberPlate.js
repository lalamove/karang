import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const numberPlate = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M189,54H23a5,5,0,0,0-5,5v95a5,5,0,0,0,5,5H193a5,5,0,0,0,5-5V59a5,5,0,0,0-5-5ZM27,150V63H189v87Z" />
    <rect x="33" y="69.04" width="13" height="13" rx="6.5" ry="6.5" />
    <rect x="33" y="131.04" width="13" height="13" rx="6.5" ry="6.5" />
    <rect x="170" y="69.04" width="13" height="13" rx="6.5" ry="6.5" />
    <rect x="170" y="131.04" width="13" height="13" rx="6.5" ry="6.5" />
  </g>,
  'NumberPlate'
);

export default numberPlate;
