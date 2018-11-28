import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs/react';

import Table from './index';
import Rating from 'components/Rating';

const basicColumns = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'age',
    label: 'Years on Earth',
  },
  {
    key: 'income',
    label: '💵 Money',
  },
  {
    key: 'rating',
    label: 'Handsome-ness',
    render(_, dude, dudes) {
      const maxAge = Math.max(...dudes.map(({ age }) => age));
      const maxIncome = Math.max(...dudes.map(({ income }) => income));
      const ageRate = 6 - Math.round((dude.age / maxAge) * 5);
      const incomeRate = Math.round((dude.income / maxIncome) * 5);
      const rate = Math.round((ageRate + incomeRate) / 2);
      return <Rating value={rate || 1} />;
    },
  },
];

const sortableColumns = [
  {
    key: 'name',
    label: 'Name',
    onSort: (key, order) => {
      action('onSort')(key, order);
      return (a, b) => {
        switch (order) {
          case 'desc':
            return b[key].localeCompare(a[key]);
          case 'asc':
            return a[key].localeCompare(b[key]);
          default:
            return 0;
        }
      };
    },
  },
  {
    key: 'age',
    label: 'Years on Earth',
    onSort: (key, order) => {
      action('onSort')(key, order);
      return (a, b) => {
        switch (order) {
          case 'desc':
            return b[key] - a[key];
          case 'asc':
            return a[key] - b[key];
          default:
            return 0;
        }
      };
    },
  },
  {
    key: 'job',
    label: 'Occupation',
  },
  {
    key: 'hobbies',
    label: 'Fun (sort yourself)',
    onSort: action('onSort'),
  },
];

const data = [
  {
    id: 24523,
    name: 'Wong',
    age: 43,
    job: 'Business man',
    hobbies: '購買',
    income: 40000,
  },
  {
    id: 47657,
    name: 'Smith',
    age: 35,
    job: 'Janitor',
    hobbies: '吃',
    income: 20000,
  },
  {
    id: 5675,
    name: 'Trump',
    age: 72,
    job: 'PUTUS',
    hobbies: '坐',
    income: 1,
  },
  {
    id: 123,
    name: 'Chan',
    age: 54,
    job: 'CEO',
    hobbies: '籃球',
    income: 30000,
  },
  {
    id: 352,
    name: 'Mannings',
    age: 31,
    job: 'Carpenter',
    hobbies: '足球',
    income: 80000,
  },
  {
    id: 312,
    name: 'Chow',
    age: 12,
    job: 'Hobo',
    hobbies: '曲棍球',
    income: 0,
  },
];

storiesOf('Table', module)
  .add('Basic', () => (
    <Table
      hoverable={boolean('hoverable', false)}
      alternate={boolean('alternate', false)}
      columns={basicColumns}
      data={data}
    />
  ))
  .add('onRowClick', () => (
    <Table
      hoverable={boolean('hoverable', true)}
      alternate={boolean('alternate', false)}
      columns={[
        {
          key: 'id',
          label: 'ID',
        },
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'age',
          label: 'Years on Earth',
        },
        {
          key: 'hobbies',
          label: 'Hobbies',
        },
      ]}
      data={data}
      onRowClick={action('onRowClick')}
    />
  ))
  .add('Sortable', () => (
    <Table
      hoverable={boolean('hoverable', false)}
      alternate={boolean('alternate', false)}
      columns={sortableColumns}
      data={data}
    />
  ));
