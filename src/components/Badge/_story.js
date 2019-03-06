import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Badge from './index';
import Icon from '../Icon';

const Container = styled.div`
  & > span {
    margin-right: 8px;
  }
`;

storiesOf('Badge', module)
  .add('Solid', () => (
    <Container>
      <h4>Solid</h4>
      <Badge solid>Unknown</Badge>
      <Badge color="secondary" solid>
        Assigning
      </Badge>
      <Badge color="pictonBlue" solid>
        Matched
      </Badge>
      <Badge color="pictonBlueDark" solid>
        On-going
      </Badge>
      <Badge color="valencia" solid>
        Cancelled
      </Badge>
      <Badge color="mountainMeadow" solid>
        Completed
      </Badge>
      <h4>Solid in small size</h4>
      <Badge
        icon={<Icon type="unsave3" size={12} />}
        color="secondary"
        size="small"
        solid
      >
        Unsaved Delivery Info
      </Badge>
    </Container>
  ))
  .add('Subtle', () => (
    <Container>
      <h4>Subtle</h4>
      <Badge>Unknown</Badge>
      <Badge color="secondary">Assigning</Badge>
      <Badge color="pictonBlue">Matched</Badge>
      <Badge color="pictonBlueDark">On-going</Badge>
      <Badge color="valencia">Cancelled</Badge>
      <Badge color="mountainMeadow">Completed</Badge>
      <h4>Subtle in small size</h4>
      <Badge
        icon={<Icon type="unsave3" size={12} />}
        color="secondary"
        size="small"
      >
        Unsaved Delivery Info
      </Badge>
    </Container>
  ));
