import * as React from 'react';
import SvgIcon from './SVGIcon';

declare function createSvgIcon(
  path: React.ComponentType,
  displayName: string
): typeof SvgIcon;

export default createSvgIcon;
