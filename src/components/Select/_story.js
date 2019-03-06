import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import BikeFilledIcon from 'components/Icon/icons/vehicles/bikeFilled';
import Select from './index';

const items = [
  {
    value: 'MOTORCYCLE',
    label: 'Motorcycle',
  },
  {
    value: 'VAN',
    label: 'Van',
  },
];

const itemsWithIcons = items.map(item => ({
  ...item,
  icon: <BikeFilledIcon />,
}));

const itemsWithDisabledItem = [
  {
    id: 'MOTORCYCLE',
    value: 'Motorcycle',
    disabled: true,
  },
  {
    id: 'VAN',
    value: 'Van',
  },
];

class Wrapper extends Component {
  state = {
    select1: null,
    select2: null,
    select3: items[0],
    select4: null,
  };

  handleOnChange = (selectedItem, name) => {
    this.setState({ [name]: selectedItem });
  };

  render() {
    const { select1, select2, select3, select4 } = this.state;
    return (
      <div>
        <h4>Basic</h4>
        <Select
          label="What is your vehicle type?"
          name="vehicleType"
          items={items}
          selectedItem={select1}
          onChange={selected => this.handleOnChange(selected, 'select1')}
        />
        <h4>With icon</h4>
        <Select
          label="What is your vehicle type?"
          name="vehicleType"
          items={itemsWithIcons}
          selectedItem={select2}
          onChange={selected => this.handleOnChange(selected, 'select2')}
        />
        <h4>With error message</h4>
        <Select
          label="What is your vehicle type?"
          name="vehicleType"
          items={items}
          selectedItem={select3}
          onChange={selected => this.handleOnChange(selected, 'select3')}
          error="Error Message"
        />
        <h4>With disabled item</h4>
        <Select
          label="With disabled item"
          name="vehicleType"
          items={itemsWithDisabledItem}
          selectedItem={select4}
          onChange={selected => this.handleOnChange(selected, 'select4')}
        />
      </div>
    );
  }
}

storiesOf('Select', module).add('Basic', () => <Wrapper />);
