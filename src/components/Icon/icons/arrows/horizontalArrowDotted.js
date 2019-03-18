import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const dottedArrow = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <rect x="90" y="104" width="19" height="8" />
    <path d="M196.84,104.93,161.68,69.77a4.6,4.6,0,0,0-5.5-.86,4.54,4.54,0,0,0-.86,7L183.21,104H127v8h56.32l-28,28.14a4.49,4.49,0,0,0,.84,6.94,4.55,4.55,0,0,0,5.48-.8l35.2-35.21A4.33,4.33,0,0,0,196.84,104.93Z" />
    <rect x="54" y="104" width="18" height="8" />
    <path d="M36,104H22a4.29,4.29,0,0,0-4.36,4.38,4.45,4.45,0,0,0,4.6,3.62H36Z" />
  </g>,
  'HorizontalArrowDotted'
);

export default dottedArrow;
