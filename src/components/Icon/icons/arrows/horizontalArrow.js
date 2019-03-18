import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const arrowHorizontal = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M155.21,146.4a4.35,4.35,0,0,0,6.15,0L196.73,111a4.36,4.36,0,0,0,0-6.15L161.36,69.52a4.36,4.36,0,0,0-6.15,0,4.64,4.64,0,0,0,0,6.37L183.1,104h-161a4.17,4.17,0,0,0-4.35,4.13A3.79,3.79,0,0,0,19.05,111a4.17,4.17,0,0,0,3.08,1H183.21l-28,28.12A4.52,4.52,0,0,0,155.21,146.4Z" />
  </g>,
  'HorizontalArrow'
);

export default arrowHorizontal;
