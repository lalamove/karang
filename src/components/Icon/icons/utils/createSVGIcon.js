import React from 'react';
import SVGIcon from './SVGIcon';

function createSVGIcon(path, displayName) {
  const Icon = props => <SVGIcon {...props}>{path}</SVGIcon>;

  Icon.displayName = `${displayName}Icon`;
  return React.memo(Icon);
}

export default createSVGIcon;
