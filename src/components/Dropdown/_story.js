/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import PinFilledIcon from 'components/Icon/icons/maps/pinFilled';
import Dropdown from './index';

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
    icon: <PinFilledIcon />,
    options: [
      {
        value: 'TH_BKK',
        label: 'Bangkok',
        icon: <PinFilledIcon />,
      },
      {
        value: 'TH_CNX',
        label: 'Chiang Mai',
        icon: <PinFilledIcon />,
      },
    ],
  },
  {
    value: 'HK_HKG',
    label: 'Hong Kong',
    icon: <PinFilledIcon />,
  },
  {
    value: 'VN_HCM',
    label: 'Vietnam',
    icon: <PinFilledIcon />,
  },
  {
    value: 'PH',
    label: 'Philippines',
    icon: <PinFilledIcon />,
    options: [
      {
        value: 'PH_MNL',
        label: 'Manila',
        icon: <PinFilledIcon />,
      },
      {
        value: 'PH_CEB',
        label: 'Cebu',
        icon: <PinFilledIcon />,
      },
    ],
  },
  {
    value: 'SG_SGN',
    label: 'Singapore',
    icon: <PinFilledIcon />,
  },
  {
    value: 'TW_TPE',
    label: 'Taiwan',
    icon: <PinFilledIcon />,
  },
];

const Basic = () => (
  <div>
    <h4>Basic</h4>
    <Dropdown items={items} />
    <h4>Basic with icon</h4>
    <Dropdown
      items={items.map(item =>
        Object.assign({}, item, { icon: <PinFilledIcon /> })
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
  };

  handleChange = (name, item) => {
    this.setState({ [name]: item });
  };

  render() {
    const { dropdown1, dropdown2 } = this.state;
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
      </div>
    );
  }
}

storiesOf('Dropdown', module)
  .add('Basic', () => <Basic />)
  .add('Cascading menu', () => <CascadingMenu />);
