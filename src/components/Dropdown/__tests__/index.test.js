import React from 'react';
import { render } from 'enzyme';
import Dropdown from '../index';

// TODO: add more test cases for Dropdown component
describe('Dropdown', () => {
  describe('Snapshots', () => {
    it('Dropdown', () => {
      const data = [
        {
          value: 'value_1',
          label: 'Label 1',
        },
        {
          value: 'value_2',
          label: 'Label 2',
        },
      ];
      const wrapper = render(<Dropdown items={data} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
