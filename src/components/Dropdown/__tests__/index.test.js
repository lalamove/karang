import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Dropdown from '../index';

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

describe('Dropdown', () => {
  describe('Snapshots', () => {
    it('render', () => {
      const wrapper = render(<Dropdown items={data} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Render', () => {
    it('not to throw', () => {
      expect(() => mount(<Dropdown items={data} />)).not.toThrow();
    });
  });

  describe('Functions', () => {});
});
