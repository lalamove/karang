import React from 'react';
import warning from 'warning';
import { string, number, shape } from 'prop-types';
import SVGIcon from './icons/utils/SVGIcon';

import * as icons from './icons';

const { NODE_ENV } = process.env;

let warnOnce = false;
const Icon = props => {
  if (NODE_ENV !== 'production') {
    warning(
      warnOnce,
      [
        'Generic Icon would be deprecated in v1.',
        'Please switch to exact name import before migrating to v1',
        `e.g. import { up } from '@lalamove/karang/dist/components/Icon/icons';`,
        `/ import Up from '@lalamove/karang/dist/components/Icon/icons/arrows/arrow/up';`,
      ].join('\n')
    );
    warnOnce = true;
  }
  const { type, ...rest } = props;
  const I = icons[type];
  return <I {...rest} />;
};

Icon.defaultProps = {
  color: 'currentColor',
  size: 20,
  style: {},
  verticalAlign: 'middle',
  viewBox: '0 0 217 217',
  title: '',
};

Icon.propTypes = {
  ...SVGIcon.propTypes,
  /** Icon name */
  type: string.isRequired,
  /** Color code of icon */
  color: string,
  /** Size of icon, in `px` */
  size: number, // TODO: to define small and large icon size
  /** Additional style apply to icon */
  style: shape({}),
  /** Vertical align of icon, default is `middle` */
  verticalAlign: string,
  /** viewBox of svg */
  viewBox: string,
  /** Aria title for Icon */
  title: string,
};

export default Icon;
