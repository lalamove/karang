import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Icon from './index';
import icons from './icons';
import { fontSize } from 'styles/fonts';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const SCIcon = styled(Icon)`
  display: block;
  margin: 0.8em auto 0.8em auto;
`;

const Wrapper = styled.div`
  width: 160px;
  margin: 1.2em;
  font-size: ${fontSize.small};
  text-align: center;
`;

const Icons = () => (
  <Container>
    {Object.keys(icons).map(type => (
      <Wrapper key={`icon-${type}`}>
        <SCIcon type={type} size={40} />
        {type}
      </Wrapper>
    ))}
  </Container>
);

storiesOf('Icon', module).add('Icon', () => <Icons />);
