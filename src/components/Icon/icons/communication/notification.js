import React from 'react';
import createSVGIcon from '../utils/createSVGIcon';

const notification = createSVGIcon(
  <g>
    <rect fill="none" width="217" height="217" />
    <path d="M43,43a5,5,0,0,0-5,5V62H23a5,5,0,0,0-5,5V168a5,5,0,0,0,5,5H193a5,5,0,0,0,5-5V48a5,5,0,0,0-5-5ZM188.14,164H27V71H38v72h9V52H189V163.13Z" />
    <rect x="58" y="62" width="120" height="9" />
    <rect x="58" y="84" width="120" height="9" />
    <rect x="58" y="106" width="120" height="9" />
  </g>,
  'Notification'
);

export default notification;
