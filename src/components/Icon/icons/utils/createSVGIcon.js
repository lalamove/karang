import React from 'react';
import SVGIcon from './SVGIcon';

function createSVGIcon(path, displayName, viewBox = '0 0 217 217') {
  const Icon = props => (
    <SVGIcon viewBox={viewBox} title={displayName} {...props}>
      {path}
    </SVGIcon>
  );

  Icon.displayName = `${displayName}Icon`;
  return React.memo(Icon);
}

export default createSVGIcon;
