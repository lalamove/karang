import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const collapse = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M183,114a4,4,0,0,0-4,4v71H27V37h73a4,4,0,0,0,4-4,5,5,0,0,0-5-5H23a5,5,0,0,0-5,5V193a5,5,0,0,0,5,5H183a5,5,0,0,0,5-5V118a4,4,0,0,0-4-4Z" />
    <path d="M103.25,59A4.27,4.27,0,0,0,99,63.37v50c0,2.4,1.75,3.62,4.15,3.62h50a4.05,4.05,0,0,0,4.35-4,4.69,4.69,0,0,0-4.63-4.45l-39.72-.19L196.57,25c1.7-1.7,2-4.15.29-5.85a4,4,0,0,0-3-1.15,4.22,4.22,0,0,0-3,1.38l-83.49,83.49.08-39.54A4.24,4.24,0,0,0,103.25,59Z" />
  </g>,
  'Collapse'
);

export default collapse;
