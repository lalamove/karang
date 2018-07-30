import React from 'react';
import Icon from './index';

const CrossIcon = ({ color, size }) => (
  <Icon color={color} size={size}>
    <path
      d="M535.594 488.406h306.728c13.031 0 23.594 10.564 23.594 23.594s-10.564 23.594-23.594 23.594h-306.728v306.728c0 13.031-10.564 23.594-23.594 23.594s-23.594-10.564-23.594-23.594v-306.728h-306.728c-13.031 0-23.594-10.564-23.594-23.594s10.564-23.594 23.594-23.594h306.728v-306.728c0-13.031 10.564-23.594 23.594-23.594s23.594 10.564 23.594 23.594v306.728z"
      transform="rotate(45)"
      style={{ transformOrigin: '50% 50%' }}
    />
  </Icon>
);

CrossIcon.propTypes = {
  ...Icon.propTypes,
};

export default CrossIcon;
