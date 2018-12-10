import React from 'react';
import { mount, shallow } from 'enzyme';

import Tab, { TabBar } from '../index';

describe('Tab', () => {
  describe('Snapshots', () => {
    it('Deselected', () => {
      const wrapper = shallow(<Tab name="foo">Foo</Tab>);
      expect(wrapper).toMatchSnapshot();
    });

    it('Selected', () => {
      const wrapper = shallow(
        <Tab name="foo" selected>
          Foo
        </Tab>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Functions', () => {
    it('trigger onTabChange when clicked', () => {
      const tabChangeHandler = jest.fn();
      const wrapper = mount(
        <Tab name="foo" onTabChange={tabChangeHandler}>
          Foo
        </Tab>
      );
      wrapper.find('button').simulate('click');
      expect(tabChangeHandler).toHaveBeenCalledTimes(1);
    });
  });
});

describe('TabBar', () => {
  describe('Snapshots', () => {
    it('No tabs', () => {
      const wrapper = shallow(<TabBar />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Some tabs', () => {
      const wrapper = shallow(
        <TabBar>
          <Tab name="foo">Foo</Tab>
          <Tab name="bar">Bar</Tab>
        </TabBar>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Selected tabs', () => {
      const wrapper = shallow(
        <TabBar activeTab="foo">
          <Tab name="foo">Foo</Tab>
          <Tab name="bar">Bar</Tab>
        </TabBar>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Non-tab children', () => {
      const wrapper = shallow(<TabBar>Not a tab at all.</TabBar>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Functions', () => {
    it('calls onTabChange when a tab is clicked', () => {
      const tabChangeHandler = jest.fn();
      const wrapper = mount(
        <TabBar activeTab="foo" onTabChange={tabChangeHandler}>
          <Tab name="foo">Foo</Tab>
          <Tab name="bar">Bar</Tab>
        </TabBar>
      );

      wrapper
        .find('Tab[name="bar"]')
        .find('button')
        .simulate('click');
      expect(tabChangeHandler).toHaveBeenCalledWith('bar');
    });
  });
});
