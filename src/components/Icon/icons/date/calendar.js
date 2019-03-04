import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const calendar = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M190,46H165V31a5,5,0,0,0-5-5,4,4,0,0,0-4,4V46H60V30a4,4,0,0,0-4-4H55a4,4,0,0,0-4,4V46H23a5,5,0,0,0-5,5V184a5,5,0,0,0,5,5H194a5,5,0,0,0,5-5V51a5,5,0,0,0-5-5ZM61,180H27V156H61Zm0-33H27V122H61Zm0-34H27V89H61Zm43,67H70V156h34Zm0-33H70V122h34Zm0-34H70V89h34Zm43,67H113V156h34Zm0-33H113V122h34Zm0-34H113V89h34Zm0-33H27V55H51V71h9V55h96V71h9V55h25V80H147Zm9,33V89h34v24Zm34,9v25H156V122Zm-34,58V156h34v24Z" />
  </g>,
  'Calendar'
);

export default calendar;
