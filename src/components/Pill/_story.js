import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Pill from './index';

const Container = styled.div`
  & > span {
    margin-right: 8px;
  }
`;

storiesOf('Pill', module)
  .add('Solid', () => (
    <Container>
      <h4>Solid</h4>
      <Pill solid>12</Pill>
      <Pill color="secondary" solid>
        12
      </Pill>
      <Pill color="pictonBlue" solid>
        12
      </Pill>
      <Pill color="pictonBlueDark" solid>
        12
      </Pill>
      <Pill color="valencia" solid>
        12
      </Pill>
      <Pill color="mountainMeadow" solid>
        12
      </Pill>
      <h4>Solid in small size</h4>
      <Pill size="small" solid>
        12
      </Pill>
      <Pill color="secondary" size="small" solid>
        12
      </Pill>
      <Pill color="pictonBlue" size="small" solid>
        12
      </Pill>
      <Pill color="pictonBlueDark" size="small" solid>
        12
      </Pill>
      <Pill color="valencia" size="small" solid>
        12
      </Pill>
      <Pill color="mountainMeadow" size="small" solid>
        12
      </Pill>
    </Container>
  ))
  .add('Subtle', () => (
    <Container>
      <h4>Subtle</h4>
      <Pill>12</Pill>
      <Pill color="secondary">12</Pill>
      <Pill color="pictonBlue">12</Pill>
      <Pill color="pictonBlueDark">12</Pill>
      <Pill color="valencia">12</Pill>
      <Pill color="mountainMeadow">12</Pill>
      <h4>Subtle in small size</h4>
      <Pill size="small">12</Pill>
      <Pill color="secondary" size="small">
        12
      </Pill>
      <Pill color="pictonBlue" size="small">
        12
      </Pill>
      <Pill color="pictonBlueDark" size="small">
        12
      </Pill>
      <Pill color="valencia" size="small">
        12
      </Pill>
      <Pill color="mountainMeadow" size="small">
        12
      </Pill>
    </Container>
  ));
