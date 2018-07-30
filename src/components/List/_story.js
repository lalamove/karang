import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InfoIcon from 'icons/Info';
import { orange } from 'styles/colors';

import List from './index';

storiesOf('List', module).add(
  'Basic',
  withInfo({})(() => (
    <List
      hoverable
      unique="id"
      items={[
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
      ]}
    >
      {({ data: { name, address, contact }, Item, getProps }) => (
        <Item {...getProps()} icon={<InfoIcon color={orange} />}>
          <div>
            {name} <span className="light-silver">{address}</span>
          </div>
          <span className="f6 moon-gray">{contact}</span>
        </Item>
      )}
    </List>
  ))
);
