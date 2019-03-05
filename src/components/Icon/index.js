import React from 'react';
import warning from 'warning';
import { string } from 'prop-types';

import icons from './icons';

const { NODE_ENV } = process.env;

let warnOnce = false;
const GenericIcon = props => {
  if (NODE_ENV !== 'production') {
    warning(
      warnOnce && NODE_ENV !== 'test',
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
  const Icon = icons[type];
  return <Icon {...rest} />;
};

GenericIcon.propTypes = {
  type: string.isRequired,
};

export default GenericIcon;
