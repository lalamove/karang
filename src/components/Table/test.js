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

describe('snapshots', () => {
  test('basic', () => {
    expect(
      mount(<Table columns={mockColumns} data={tableData} />)
    ).toMatchSnapshot();
  });
  test('align', () => {
    const tcols = [
      { key: 'id', label: 'hmnn' },
      { key: 'propL', label: 'hmnn', align: 'left' },
      { key: 'propC', label: 'Blah', align: 'center' },
      { key: 'propR', label: 'hmnn', align: 'right' },
      { key: 'propJ', label: 'Blah', align: 'justify' },
    ];
    const tdata = [
      {
        id: '123s',
        propL: 'left',
        propC: 'center',
        propR: 'right',
        propJ: 'justify',
      },
      {
        id: '123e',
        propL: 'left',
        propC: 'center',
        propR: 'right',
        propJ: 'justify',
      },
      {
        id: '123w',
        propL: 'left',
        propC: 'center',
        propR: 'right',
        propJ: 'justify',
      },
    ];
    expect(mount(<Table columns={tcols} data={tdata} />)).toMatchSnapshot();
  });
});
