import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const currentLocation = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M165.28,50.72a81,81,0,1,0,0,114.56A81,81,0,0,0,165.28,50.72ZM57.09,158.91a72,72,0,1,1,101.82,0A72,72,0,0,1,57.09,158.91Z" />
    <path d="M108,85a22,22,0,1,0,22,22A22,22,0,0,0,108,85Z" />
    <path d="M148.48,103.58c-1.4-20-16.73-35.26-37.09-36.87V54h-6.78V66.71A41,41,0,0,0,79.23,78.12a39.3,39.3,0,0,0-11.71,25.46H53v6.78H67.75c1.77,20,17,35.25,36.86,36.87V162h6.78V147.23c19.85-1.62,35.09-16.86,36.86-36.87H163v-6.78ZM141.77,107A33.77,33.77,0,1,1,108,73.2,33.81,33.81,0,0,1,141.77,107Z" />
  </g>,
  'CurrentLocation'
);

export default currentLocation;
