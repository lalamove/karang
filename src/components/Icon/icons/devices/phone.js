import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const phone = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <rect x="100.17" y="45.83" width="17.28" height="3.42" />
    <path d="M108.63,172.73a4.32,4.32,0,1,0-4.32-4.32A4.38,4.38,0,0,0,108.63,172.73Z" />
    <path d="M140,37.91H77.28A8.26,8.26,0,0,0,69,46.19V97.91h.21v75.9a8.26,8.26,0,0,0,8.28,8.28h62.25a8.26,8.26,0,0,0,8.28-8.28V97.91h.21V46.19A8.26,8.26,0,0,0,140,37.91Zm-.39,5.22a3.15,3.15,0,0,1,3.06,3.06V52h-68V46.19a3.15,3.15,0,0,1,3.06-3.06Zm3.06,130.5a3,3,0,0,1-3.06,3.06H77.67a3,3,0,0,1-3.06-3.06V162.47h68Zm0-16.38h-68V57.35h68Z" />
  </g>,
  'Phone'
);

export default phone;
