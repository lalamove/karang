import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import UnsaveIcon from 'components/Icon/icons/content/unsave3';
import Badge from './index';
import BaseApp from '../BaseApp';

const Container = styled.div`
  & > span {
    margin-right: 8px;
  }
`;

storiesOf('Badge', module)
  .add('Solid', () => (
    <Container dir={boolean('Right-to-Left', false) ? 'rtl' : 'ltr'}>
      <BaseApp rtl={boolean('Right-to-Left', false)}>
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
      </BaseApp>
    </Container>
  ))
  .add('Subtle', () => (
    <Container dir={boolean('Right-to-Left', false) ? 'rtl' : 'ltr'}>
      <BaseApp rtl={boolean('Right-to-Left', false)}>
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
      </BaseApp>
    </Container>
  ));
