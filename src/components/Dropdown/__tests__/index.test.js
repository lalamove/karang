import React from 'react';
import { render, mount } from 'enzyme';
import DropDownIcon from 'components/Icon/icons/arrows/dropdown';
import VMenuIcon from 'components/Icon/icons/content/vmenu';
import Dropdown from '../index';

const items = [
  {
    value: 'value_1',
    label: 'Label 1',
  },
  {
    value: 'value_2',
    label: 'Label 2',
    disabled: true,
  },
];

const itemsWithSubmenu = [
  {
    value: 'TH',
    label: 'Thailand',
    options: [
      {
        value: 'TH_BKK',
        label: 'Bangkok',
      },
      {
        value: 'TH_CNX',
        label: 'Chiang Mai',
      },
    ],
  },
  {
    value: 'PH',
    label: 'Philippines',
    options: [
      {
        value: 'PH_MNL',
        label: 'Manila',
        disabled: true,
      },
      {
        value: 'PH_CEB',
        label: 'Cebu',
      },
    ],
  },
];

// TODO: add more test cases for Dropdown component
describe('Dropdown', () => {
  describe('Snapshots', () => {
    it('render', () => {
      const wrapper = render(<Dropdown items={items} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('render', () => {
      const wrapper = render(<Dropdown items={itemsWithSubmenu} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Render', () => {
    it('not to throw', () => {
      expect(() => mount(<Dropdown items={items} />)).not.toThrow();
    });

    it('enabled', () => {
      const wrapper = mount(<Dropdown items={items} />);
      expect(wrapper.find('button').props().disabled).toBe(false);
    });

    it('disabled', () => {
      const wrapper = mount(<Dropdown items={items} disabled />);
      expect(wrapper.find('button').props().disabled).toBe(true);
    });

    it('default variant - default icon', () => {
      const wrapper = mount(<Dropdown items={items} />);
      expect(wrapper.find('Memo(DropDownIcon)')).toHaveLength(1);
    });

    it('compact variant - default icon', () => {
      const wrapper = mount(<Dropdown items={items} variant="compact" />);
      expect(wrapper.find('Memo(VMenuIcon)')).toHaveLength(1);
    });

    it('default variant - custom icon', () => {
      const wrapper = mount(<Dropdown items={items} icon={<VMenuIcon />} />);
      expect(wrapper.find('Memo(VMenuIcon)')).toHaveLength(1);
    });

    it('compact variant - custom icon', () => {
      const wrapper = mount(
        <Dropdown items={items} variant="compact" icon={<DropDownIcon />} />
      );
      expect(wrapper.find('Memo(DropDownIcon)')).toHaveLength(1);
    });
  });

  describe('Functions', () => {
    it('select first option with keyboard by Enter', () => {
      const onChange = jest.fn();
      const wrapper = mount(<Dropdown items={items} onChange={onChange} />);
      const button = wrapper.find('button');
      button.simulate('keydown', { key: ' ' });
      button.simulate('keydown', { key: 'ArrowDown' });
      button.simulate('keydown', { key: 'Enter' });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(items[0]);
      expect(button.instance().value).toBe(items[0].value);
    });

    it('select first option with keyboard by spacebar', () => {
      const onChange = jest.fn();
      const wrapper = mount(<Dropdown items={items} onChange={onChange} />);
      const button = wrapper.find('button');
      button.simulate('keydown', { key: ' ' });
      button.simulate('keydown', { key: 'ArrowDown' });
      button.simulate('keydown', { key: ' ' });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(items[0]);
      expect(button.instance().value).toBe(items[0].value);
    });

    it('does not select disabled second option with keyboard', () => {
      const onChange = jest.fn();
      const wrapper = mount(<Dropdown items={items} onChange={onChange} />);
      const button = wrapper.find('button');
      button.simulate('keydown', { key: ' ' });
      button.simulate('keydown', { key: 'ArrowDown' });
      button.simulate('keydown', { key: 'ArrowDown' });
      button.simulate('keydown', { key: ' ' });
      expect(onChange).toHaveBeenCalledTimes(0);
    });

    it('select first option in sub menu of second option with keyboard', () => {
      const onChange = jest.fn();
      const wrapper = mount(
        <Dropdown items={itemsWithSubmenu} onChange={onChange} />
      );
      const button = wrapper.find('button');
      button.simulate('keydown', { key: ' ' });
      button.simulate('keydown', { key: 'ArrowDown' });
      button.simulate('keydown', { key: 'ArrowDown' });
      button.simulate('keydown', { key: 'ArrowRight' });
      button.simulate('keydown', { key: 'ArrowDown' });
      button.simulate('keydown', { key: 'Enter' });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(itemsWithSubmenu[1].options[1]);
      expect(button.instance().value).toBe(
        itemsWithSubmenu[1].options[1].value
      );
    });

    it('does not select disabled first option in sub menu of second option with keyboard', () => {
      const onChange = jest.fn();
      const wrapper = mount(
        <Dropdown items={itemsWithSubmenu} onChange={onChange} />
      );
      const button = wrapper.find('button');
      button.simulate('keydown', { key: ' ' });
      button.simulate('keydown', { key: 'ArrowDown' });
      button.simulate('keydown', { key: 'ArrowDown' });
      button.simulate('keydown', { key: 'ArrowRight' });
      button.simulate('keydown', { key: ' ' });
      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });
});
