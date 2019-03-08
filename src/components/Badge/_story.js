import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import UnsaveIcon from 'components/Icon/icons/content/unsave3';
import Badge from './index';

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
      <Badge variant="secondary" solid>
        Assigning
      </Badge>
      <Badge variant="pictonBlue" solid>
        Matched
      </Badge>
      <Badge variant="pictonBlueDark" solid>
        On-going
      </Badge>
      <Badge variant="valencia" solid>
        Cancelled
      </Badge>
      <Badge variant="mountainMeadow" solid>
        Completed
      </Badge>
      <h4>Solid in small size</h4>
      <Badge
        icon={<UnsaveIcon size={12} />}
        variant="secondary"
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
      <Badge variant="secondary">Assigning</Badge>
      <Badge variant="pictonBlue">Matched</Badge>
      <Badge variant="pictonBlueDark">On-going</Badge>
      <Badge variant="valencia">Cancelled</Badge>
      <Badge variant="mountainMeadow">Completed</Badge>
      <h4>Subtle in small size</h4>
      <Badge icon={<UnsaveIcon size={12} />} variant="secondary" size="small">
        Unsaved Delivery Info
      </Badge>
    </Container>
  ));
