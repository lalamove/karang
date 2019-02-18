import React from 'react';
import { mount, render } from 'enzyme';
import Select from '../index';

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

describe('Select', () => {
  describe('Snapshots', () => {
    it('Select with label and items', () => {
      const wrapper = render(
        <Select label="What is your vehicle type?" items={items} />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Select with label, items and error message', () => {
      const wrapper = render(
        <Select
          label="What is your vehicle type?"
          items={items}
          error="Error message"
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Render', () => {
    it('not to throw', () => {
      expect(() => mount(<Select items={items} />)).not.toThrow();
    });
  });
});
