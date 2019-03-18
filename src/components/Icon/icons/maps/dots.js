import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const dots = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <rect x="94" y="57" width="27" height="27" />
    <rect x="94" y="112" width="27" height="27" />
  </g>,
  'Dots'
);

export default dots;
