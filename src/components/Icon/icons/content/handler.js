import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const handler = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M18,18H128V28H18Z" />
    <path d="M18,188H128v10H18Z" />
    <path d="M18,103H128v10H18Z" />
  </g>,
  'Handler'
);

export default handler;
