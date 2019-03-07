/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './index';
import Icon from '../Icon';

const items = [
  {
    value: 'hello',
    label: 'Hello world!',
  },
  {
    value: 'bye',
    label: 'Bye!',
  },
];

const itemsWithSubmenu = [
  {
    value: 'TH',
    label: 'Thailand',
    icon: <Icon type="pinFill" />,
    options: [
      {
        value: 'TH_BKK',
        label: 'Bangkok',
        icon: <Icon type="pinFill" />,
      },
      {
        value: 'TH_CNX',
        label: 'Chiang Mai',
        icon: <Icon type="pinFill" />,
      },
    ],
  },
  {
    value: 'HK_HKG',
    label: 'Hong Kong',
    icon: <Icon type="pinFill" />,
  },
  {
    value: 'VN_HCM',
    label: 'Vietnam',
    icon: <Icon type="pinFill" />,
  },
  {
    value: 'PH',
    label: 'Philippines',
    icon: <Icon type="pinFill" />,
    options: [
      {
        value: 'PH_MNL',
        label: 'Manila',
        icon: <Icon type="pinFill" />,
      },
      {
        value: 'PH_CEB',
        label: 'Cebu',
        icon: <Icon type="pinFill" />,
      },
    ],
  },
  {
    value: 'SG_SGN',
    label: 'Singapore',
    icon: <Icon type="pinFill" />,
  },
  {
    value: 'TW_TPE',
    label: 'Taiwan',
    icon: <Icon type="pinFill" />,
  },
];

const Basic = () => (
  <div>
    <h4>Basic</h4>
    <Dropdown items={items} />
    <h4>Basic with icon</h4>
    <Dropdown
      items={items.map(item =>
        Object.assign({}, item, { icon: <Icon type="pinFill" /> })
      )}
    />
    <h4>Block</h4>
    <Dropdown items={items} block />
    <h4>Compact</h4>
    <Dropdown variant="compact" items={items} />
  </div>
);

class CascadingMenu extends Component {
  state = {
    dropdown1: itemsWithSubmenu[5],
    dropdown2: itemsWithSubmenu[1],
    dropdown3: itemsWithSubmenu[0],
  };

  handleChange = (name, item) => {
    this.setState({ [name]: item });
  };

  render() {
    const { dropdown1, dropdown2, dropdown3 } = this.state;
    return (
      <div>
        <h4>Cascading menu with icon</h4>
        <Dropdown
          items={itemsWithSubmenu}
          onChange={item => this.handleChange('dropdown1', item)}
          selectedItem={dropdown1}
        />
        <h4 style={{ textAlign: 'right' }}>Cascading menu on right side</h4>
        <div style={{ float: 'right' }}>
          <Dropdown
            items={itemsWithSubmenu}
            onChange={item => this.handleChange('dropdown2', item)}
            selectedItem={dropdown2}
            direction="left"
          />
        </div>
        <h4 style={{ clear: 'both' }}>
          Cascading menu with <code>block</code> set to <code>true</code>
        </h4>
        <span style={{ color: 'white', background: '#fea000' }}>
          Container (shown with padding here):
        </span>
        <div
          style={{
            width: '50%',
            padding: '1em',
            border: '1px solid #fea000',
            background: '#fff8e1',
          }}
        >
          <Dropdown
            items={itemsWithSubmenu}
            onChange={item => this.handleChange('dropdown3', item)}
            selectedItem={dropdown3}
            block
          />
        </div>
      </div>
    );
  }
}

storiesOf('Dropdown', module)
  .add('Basic', () => <Basic />)
  .add('Cascading menu', () => <CascadingMenu />);
