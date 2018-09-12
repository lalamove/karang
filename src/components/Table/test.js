/* global mount */
import React from 'react';
import Table from './index';

const mockColumns = [
  {
    key: 'name',
    label: 'Name',
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

const tableData = [
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

test('not crash', () => {
  expect(() => <Table columns={mockColumns} data={tableData} />).not.toThrow();
});

test('snapshots', () => {
  expect(
    mount(<Table columns={mockColumns} data={tableData} />)
  ).toMatchSnapshot();
});
