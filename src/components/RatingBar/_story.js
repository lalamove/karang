import React from 'react';
import { storiesOf } from '@storybook/react';
import RatingBar from './index';
import { small, large } from './ratingBarSizes';
import styled from 'styled-components';

const DivCenter = styled.div`
  display: flex;
  justify-content: center;
`;

storiesOf('RatingBar', module).add('Basic', () => (
  <div>
    <div style={{ padding: '20px' }}>
      <RatingBar size={large} onClick={() => false} />
    </div>
    <DivCenter style={{ padding: '20px' }}>
      <RatingBar value={2} size={large} />
    </DivCenter>
    <DivCenter style={{ padding: '20px' }}>
      <RatingBar size={small} onClick={() => false} />
    </DivCenter>
    <DivCenter style={{ padding: '20px' }}>
      <RatingBar value={5} size={small} />
    </DivCenter>
  </div>
));
