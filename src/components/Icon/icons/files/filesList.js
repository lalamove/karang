import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const filesList = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <rect
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      x="18"
      y="18"
      width="180"
      height="180"
    />
    <path d="M189,18H23a5,5,0,0,0-5,5V193a5,5,0,0,0,5,5H193a5,5,0,0,0,5-5V23a5,5,0,0,0-5-5Zm0,171H27V27H189Z" />
    <rect x="51" y="53.04" width="35" height="50" />
    <rect x="51" y="119.04" width="35" height="50" />
    <rect x="106" y="53.04" width="58" height="16" />
    <rect x="106" y="87.04" width="58" height="16" />
    <rect x="106" y="153.04" width="58" height="16" />
    <rect x="106" y="119.04" width="58" height="16" />
  </g>,
  'FilesList'
);

export default filesList;
