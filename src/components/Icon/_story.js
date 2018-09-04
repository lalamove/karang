import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Icon from './index';
import icons from './icons';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin: 20px;
`;

const Icons = () => (
  <Container>
    {Object.keys(icons).map(type => (
      <IconWrapper key={`icon-${type}`}>
        <Icon type={type} size={40} />
      </IconWrapper>
    ))}
  </Container>
);

storiesOf('Icon', module).add('Icon', () => <Icons />);
