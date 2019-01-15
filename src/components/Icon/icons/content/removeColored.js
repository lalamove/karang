import React from 'react';

const removeColored = (
  <svg viewBox="0 0 217 217">
    <defs>
      <path
        d="M81.5,0.4997 C126.235,0.4997 162.5,36.7647 162.5,81.4997 C162.5,126.2347 126.235,162.4997 81.5,162.4997 C36.765,162.4997 0.5,126.2347 0.5,81.4997 C0.5,36.7647 36.765,0.4997 81.5,0.4997 Z M128.3506,76.5388 L34.6496,76.5388 C32.3606,76.5388 30.4996,79.2508 30.4996,81.5388 C30.4996,83.8268 32.3606,86.5388 34.6496,86.5388 L128.3506,86.5388 C130.6396,86.5388 132.4996,83.8268 132.4996,81.5388 C132.4996,79.2508 130.6396,76.5388 128.3506,76.5388 Z"
        id="removeColored-path-1"
      />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(27.000000, 27.000000)">
        <mask id="removeColored-mask-2" fill="white">
          <use xlinkHref="#removeColored-path-1" />
        </mask>
        <use fill="#000000" xlinkHref="#path-1" />
        <g mask="url(#removeColored-mask-2)" fill="#D8534F">
          <g transform="translate(-27.000000, -27.000000)">
            <rect x="0" y="0" width="217" height="217" />
          </g>
        </g>
      </g>
      <rect x="0" y="0" width="217" height="217" />
    </g>
  </svg>
);

export default removeColored;
