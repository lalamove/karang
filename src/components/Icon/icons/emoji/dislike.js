import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const dislike = createSVGIcon(
  <React.Fragment>
    <path
      d="M166.3,51.7c31.6,31.6,31.6,82.9,0,114.6c-31.6,31.6-82.9,31.6-114.6,0c-31.6-31.6-31.6-82.9,0-114.6
	C83.4,20.1,134.6,20.1,166.3,51.7"
    />
    <path
      opacity={0.5}
      d="M166.3,51.7c31.6,31.6,31.6,82.9,0,114.6c-31.6,31.6-82.9,31.6-114.6,0c-31.6-31.6-31.6-82.9,0-114.6
	C83.4,20.1,134.6,20.1,166.3,51.7"
    />
    <g fill="#000000" opacity={0.5} transform="matrix(1,0,0,1,30.7,60.75)">
      <path d="M27.7,28.7h31v15.5h-31V28.7z" />
      <path d="M97.8,28.7h31.1v15.5H97.8V28.7z" />
    </g>
    <g fill="#000000" opacity={0.5} transform="matrix(1,0,0,1,63.1,110.7)">
      <g transform="matrix(1,0,0,1,0.594,1.1475)">
        <g transform="matrix(1,0,0,1,31.8006,11.9128)">
          <g transform="matrix(0.961262,-0.275637,0.275637,0.961262,0,0)">
            <path d="M-12.8,31h62.1v6.8h-62.1V31z" />
          </g>
        </g>
      </g>
    </g>
  </React.Fragment>,
  'Dislike'
);

export default dislike;
