import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';
import Rating from './index';
import { small, large } from './ratingSizes';

const DivCenter = styled.div`
  display: flex;
  justify-content: center;
`;

storiesOf('Rating', module).add('Basic', () => (
  <div dir={boolean('Right-to-left', false) ? 'rtl' : 'ltr'}>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Rating
        size={large}
        onClick={rating => {
          action('onClick')(rating);
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
