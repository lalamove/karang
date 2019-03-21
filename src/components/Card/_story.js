import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'components/Button';
import Card from './index';

storiesOf('Card', module).add('Basic', () => (
  <div>
    <span style={{ color: 'white', background: '#f26722' }}>
      Sample container for demonstration:
    </span>
    <div
      style={{
        padding: '28px',
        border: '1px solid #f26722',
        background: '#fea000',
      }}
    >
      <Card>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button variant="primary">Excepteur</Button>
      </Card>
    </div>
  </div>
));
