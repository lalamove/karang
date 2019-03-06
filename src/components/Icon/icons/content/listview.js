import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const listview = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M18,18H198V38H18Z" />
    <path d="M18,178H198v20H18Z" />
    <path d="M18,98H198v20H18Z" />
  </g>,
  'ListView'
);

export default listview;
