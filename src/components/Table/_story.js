import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs/react';

import Table from './index';

const columns = [
  {
    key: 'name',
    label: 'Name',
    onSort: action('onSort'),
  },
  {
    key: 'job',
    label: 'Occupation',
  },
  {
    key: 'hobbies',
    label: 'Fun',
    onSort: action('onSort'),
  },
];

const data = [
  {
    id: 123,
    name: 'Chan',
    job: 'CEO',
    hobbies: 'basketball',
  },
  {
    id: 312,
    name: 'Chow',
    job: 'Hobo',
    hobbies: 'hockey',
  },
  {
    id: 352,
    name: 'Mannings',
    job: 'Carpenter',
    hobbies: 'football',
  },
  {
    id: 24523,
    name: 'Wong',
    job: 'Business man',
    hobbies: 'buy',
  },
  {
    id: 47657,
    name: 'Smith',
    job: 'Janitor',
    hobbies: 'eat',
  },
  {
    id: 5675,
    name: 'Trump',
    job: 'PUTUS',
    hobbies: 'sit',
  },
];

storiesOf('Table', module).add('Basic', () => (
  <Table
    hoverable={boolean('hoverable', false)}
    columns={columns}
    data={data}
  />
));
