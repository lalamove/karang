import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const addstop = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M108,27a81,81,0,1,0,81,81A81,81,0,0,0,108,27Zm0,153a72,72,0,1,1,72-72A72,72,0,0,1,108,180Z" />
    <path d="M154.85,103H113V61.15c0-2.29-2.71-4.15-5-4.15s-5,1.86-5,4.15V103H61.15c-2.29,0-4.15,2.71-4.15,5s1.86,5,4.15,5H103v41.81c0,2.29,2.71,4.15,5,4.15s5-1.86,5-4.15V113h41.85c2.29,0,4.15-2.71,4.15-5S157.14,103,154.85,103Z" />
  </g>,
  'AddStop'
);

export default addstop;
