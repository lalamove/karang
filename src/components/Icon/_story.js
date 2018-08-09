import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Icon, { iconType } from './index';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const IconWrapper = () => (
  <Fragment>
    <Container>
      <Icon
        // type, color, size, options
        type={iconType.arrow}
        color="black"
        size={100}
        options={{ angle: 30 }}
      />
      <br />
      <br />
      <Icon
        // type, color, size, options
        type={iconType.facebook}
        color="blue"
        size={100}
      />
      <br />
      <br />
      <Icon
        // type, color, size, options
        type={iconType.add}
        color="black"
        size={100}
      />
      <br />
      <br />
      <Icon
        // type, color, size, options
        type={iconType.clock}
        color="black"
        size={100}
      />
    </Container>
    <br />
    <br />
    <br />
    <Container>
      <Icon
        // type, color, size, options
        type={iconType.notificationBell}
        color="black"
        size={100}
      />
      <br />
      <br />
      <Icon
        // type, color, size, options
        type={iconType.order}
        color="black"
        size={100}
      />
      <br />
      <br />
      <Icon
        // type, color, size, options
        type={iconType.pin}
        color="black"
        size={100}
      />
      <br />
      <br />
      <Icon
        // type, color, size, options
        type={iconType.question}
        color="black"
        size={100}
      />
    </Container>
    <br />
    <br />
    <br />
    <Container>
      <Icon
        // type, color, size, options
        type={iconType.cross}
        color="black"
        size={100}
      />
      <br />
      <br />
      <Icon
        // type, color, size, options
        type={iconType.settingsGear}
        color="black"
        size={100}
      />
    </Container>
  </Fragment>
);

storiesOf('Icon', module).add('Icon', () => <IconWrapper />);
