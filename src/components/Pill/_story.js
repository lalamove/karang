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
      <Pill variant="secondary" solid>
        12
      </Pill>
      <Pill variant="pictonBlue" solid>
        12
      </Pill>
      <Pill variant="pictonBlueDark" solid>
        12
      </Pill>
      <Pill variant="valencia" solid>
        12
      </Pill>
      <Pill variant="mountainMeadow" solid>
        12
      </Pill>
      <h4>Solid in small size</h4>
      <Pill size="small" solid>
        12
      </Pill>
      <Pill variant="secondary" size="small" solid>
        12
      </Pill>
      <Pill variant="pictonBlue" size="small" solid>
        12
      </Pill>
      <Pill variant="pictonBlueDark" size="small" solid>
        12
      </Pill>
      <Pill variant="valencia" size="small" solid>
        12
      </Pill>
      <Pill variant="mountainMeadow" size="small" solid>
        12
      </Pill>
    </Container>
  ))
  .add('Subtle', () => (
    <Container>
      <h4>Subtle</h4>
      <Pill>12</Pill>
      <Pill variant="secondary">12</Pill>
      <Pill variant="pictonBlue">12</Pill>
      <Pill variant="pictonBlueDark">12</Pill>
      <Pill variant="valencia">12</Pill>
      <Pill variant="mountainMeadow">12</Pill>
      <h4>Subtle in small size</h4>
      <Pill size="small">12</Pill>
      <Pill variant="secondary" size="small">
        12
      </Pill>
      <Pill variant="pictonBlue" size="small">
        12
      </Pill>
      <Pill variant="pictonBlueDark" size="small">
        12
      </Pill>
      <Pill variant="valencia" size="small">
        12
      </Pill>
      <Pill variant="mountainMeadow" size="small">
        12
      </Pill>
    </Container>
  ));
