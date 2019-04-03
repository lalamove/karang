import React from 'react';
import CloseIcon from 'components/Icon/icons/content/close';
import Button, {
  withComponent as ButtonWithComponent,
} from './components/Button';
import IconButton from './components/IconButton';

// TODO: Remove in next release as the usage could be replaced by IconButton
const CloseButton = props => (
  <IconButton {...props} shape="square" variant="primary">
    <CloseIcon />
  </IconButton>
);

export { Button as default, ButtonWithComponent, CloseButton, IconButton };
