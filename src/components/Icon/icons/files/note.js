import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const note = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M182,23a4.76,4.76,0,0,0-4.75-5h-138A5.19,5.19,0,0,0,34,23V193a5.26,5.26,0,0,0,5.25,5H177a5,5,0,0,0,5-5c-.13-28.25.05-166,.05-166ZM43,189V27H173V189Z" />
    <path d="M162,56.5a4.49,4.49,0,0,1-4.5,4.5h-99a4.5,4.5,0,0,1,0-9h99A4.49,4.49,0,0,1,162,56.5Z" />
    <path d="M117.5,95h-59a4.5,4.5,0,0,1,0-9h59a4.5,4.5,0,0,1,0,9Z" />
  </g>,
  'Note'
);

export default note;
