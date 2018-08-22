import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import InfoIcon from 'icons/Info';

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
    icon: <InfoIcon />,
    options: [
      {
        value: 'TH_BKK',
        label: 'Bangkok',
        icon: <InfoIcon />,
      },
      {
        value: 'TH_CNX',
        label: 'Chiang Mai',
        icon: <InfoIcon />,
      },
    ],
  },
  {
    value: 'HK_HKG',
    label: 'Hong Kong',
    icon: <InfoIcon />,
  },
  {
    value: 'VN_HCM',
    label: 'Vietnam',
    icon: <InfoIcon />,
  },
  {
    value: 'PH',
    label: 'Philippines',
    icon: <InfoIcon />,
    options: [
      {
        value: 'PH_MNL',
        label: 'Manila',
        icon: <InfoIcon />,
      },
      {
        value: 'PH_CEB',
        label: 'Cebu',
        icon: <InfoIcon />,
      },
    ],
  },
  {
    value: 'SG_SGN',
    label: 'Singapore',
    icon: <InfoIcon />,
  },
  {
    value: 'TW_TPE',
    label: 'Taiwan',
    icon: <InfoIcon />,
  },
];

class Wrapper extends Component {
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
        <h4>Basic</h4>
        <Dropdown items={items} />
        <h4>Basic with icon</h4>
        <Dropdown
          items={items.map(item =>
            Object.assign({}, item, { icon: <InfoIcon /> })
          )}
        />
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

storiesOf('Dropdown', module).add('Basic', () => <Wrapper />);