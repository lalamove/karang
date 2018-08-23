import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Icon, { iconType } from './index';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin: 20px;
`;

const renderIcon = (type, color, size, options) => (
  <IconWrapper>
    <Icon
      // type, color, size, options
      type={type}
      color={color}
      size={size}
      options={options}
    />
  </IconWrapper>
);

const Icons = () => (
  <Fragment>
    <Container>
      {Object.keys(iconType).map(type =>
        renderIcon(iconType[type], 'black', 40)
      )}
    </Container>
  </Fragment>
);

storiesOf('Icon', module).add('Icon', () => <Icons />);
