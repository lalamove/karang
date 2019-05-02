import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';

import InfoIcon from 'components/Icon/icons/alert/info';
import { primary } from 'styles/colors';

import List from './index';

const items = [
  {
    id: 'aaa',
    name: 'Silom Complex',
    address: 'Si Lom Bang Rak Bangkok Thailand',
    contact: 'Kevin 0938278268',
  },
  {
    id: 'bbb',
    name: 'Times Square',
    address: 'Matheson Street, Causeway Bay, Hong Kong',
    contact: 'Kevin 0938278268',
  },
  {
    id: 'ccc',
    name: 'LANE CRAWFORD TIMES SQUARE',
    address: 'Causeway Bay, Hong Kong',
    contact: 'Kevin 0938278268',
  },
];

const sizeOptions = { small: 'small', default: 'default' };

storiesOf('List', module)
  .add('Basic', () => (
    <List
      hoverable={boolean('hoverable', true)}
      size={select('size', sizeOptions, 'default')}
      unique="id"
      items={items}
      render={({ data: { name, address, contact }, Item, getProps }) => (
        <Item {...getProps()} icon={<InfoIcon color={primary.main} />}>
          <div>
            {name} <span className="light-silver">{address}</span>
          </div>
          <span className="f6 moon-gray">{contact}</span>
        </Item>
      )}
    />
  ))
  .add('Small', () => (
    <List
      hoverable={boolean('hoverable', true)}
      size={select('size', sizeOptions, 'small')}
      unique="id"
      items={[
        {
          id: 'TH_BKK',
          name: 'Bangkok',
        },
        {
          id: 'TH_CNX',
          name: 'Chiang Mai',
        },
      ]}
    >
      {({ data: { name }, Item, getProps }) => (
        <Item {...getProps()} icon={<InfoIcon color={primary.main} />}>
          {name}
        </Item>
      )}
    </List>
  ));
