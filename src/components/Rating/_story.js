import React from 'react';
import { storiesOf } from '@storybook/react';
import Rating from './index';
import { small, large } from './ratingSizes';
import styled from 'styled-components';

const DivCenter = styled.div`
  display: flex;
  justify-content: center;
`;

storiesOf('Rating', module).add('Basic', () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Rating
        size={large}
        onClick={rating => {
          console.log(rating);
        }}
      />
    </div>
    <DivCenter style={{ padding: '20px' }}>
      <Rating value={2} size={large} />
    </DivCenter>
    <DivCenter style={{ padding: '20px' }}>
      <Rating size={small} onClick={() => false} />
    </DivCenter>
    <DivCenter style={{ padding: '20px' }}>
      <Rating value={5} size={small} />
    </DivCenter>
  </div>
));
