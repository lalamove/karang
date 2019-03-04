import * as React from 'react';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  verticalAlign?: string;
  style?: Object;
  viewBox?: string;
}

declare const SvgIcon: React.ComponentType<SvgIconProps>;

export default SvgIcon;