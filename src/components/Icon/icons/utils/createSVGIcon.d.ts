import * as React from 'react';
import SvgIcon from './SVGIcon';

declare function createSvgIcon(
  path: React.ComponentType,
  displayName: string,
  viewBox: string
): typeof SvgIcon;

export default createSvgIcon;
