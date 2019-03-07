import React from 'react';
import warning from 'warning';
import { string } from 'prop-types';

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
        `e.g. import { up } from 'lalamove-ui/dist/components/Icon/icons';`,
        `/ import Up from 'lalamove-ui/dist/components/Icon/icons/arrows/arrow/up';`,
      ].join('\n')
    );
    warnOnce = true;
  }
  const { type, ...rest } = props;
  const I = icons[type];
  return <I {...rest} />;
};

Icon.propTypes = {
  type: string.isRequired,
};

export default Icon;
