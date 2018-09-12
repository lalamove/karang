import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';

import Table from './index';

const columns = [
  {
    key: 'name',
    label: 'Name',
    onSort: key => {
      console.log('look', key);
    },
  },
  {
    key: 'job',
    label: 'Occupation',
  },
  {
    key: 'hobbies',
    label: 'Fun',
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
