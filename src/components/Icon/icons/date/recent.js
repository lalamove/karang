import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const recent = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M108,27a81,81,0,1,0,81,81A81,81,0,0,0,108,27Zm0,153a72,72,0,1,1,72-72A72,72,0,0,1,108,180Z" />
    <path d="M94.9,75.56a4.33,4.33,0,0,0-2.74-2,4.5,4.5,0,0,0-5.46,3.21,4.41,4.41,0,0,0,.45,3.39l6,11,13,22a4.64,4.64,0,0,0,2.75,2.1,4.33,4.33,0,0,0,3.4-.41l50.05-29.94a4.4,4.4,0,0,0,2-2.74,4.51,4.51,0,0,0-3.22-5.46,4.4,4.4,0,0,0-3.38.45L111.6,104.59Z" />
  </g>,
  'Recent'
);

export default recent;
