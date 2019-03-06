import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const dismissFilled = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M165.28,50.72a81,81,0,1,0,0,114.56A81,81,0,0,0,165.28,50.72Zm-20.64,86.9c1.62,1.62,1,4.85-.61,6.47s-4.85,2.22-6.46.6L108,115.1,78.41,144.66c-1.62,1.62-4.85,1-6.47-.6s-2.22-4.85-.6-6.47L100.9,108,71.31,78.43c-1.62-1.61-1-4.85.6-6.47s4.85-2.21,6.47-.6L108,101l29.62-29.62c1.62-1.62,4.85-1,6.47.6s2.22,4.85.6,6.47L115,108Z" />
  </g>,
  'DismissFilled'
);

export default dismissFilled;
