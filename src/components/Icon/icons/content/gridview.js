import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const gridview = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M78,33V78H33V33H78M93,18H18V93H93V18Z" />
    <path d="M78,138v45H33V138H78m15-15H18v75H93V123Z" />
    <path d="M183,33V78H138V33h45m15-15H123V93h75V18Z" />
    <path d="M183,138v45H138V138h45m15-15H123v75h75V123Z" />
  </g>,
  'GridView'
);

export default gridview;
