import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const hmenu = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M108,27a81,81,0,1,0,81,81A81,81,0,0,0,108,27Zm0,153a72,72,0,1,1,72-72A72,72,0,0,1,108,180Z" />
    <circle cx="68" cy="108" r="9" />
    <circle cx="108" cy="108" r="9" />
    <circle cx="148" cy="108" r="9" />
  </g>,
  'HMenu'
);

export default hmenu;
