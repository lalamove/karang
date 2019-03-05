import React from 'react';
import { mount, render } from 'enzyme';

import Tab, { TabBar } from '../index';

describe('Tab', () => {
  describe('Snapshots', () => {
    it('Deselected', () => {
      const wrapper = render(<Tab name="foo">Foo</Tab>);
      expect(wrapper).toMatchSnapshot();
    });

    it('Selected', () => {
      const wrapper = render(
        <Tab name="foo" selected>
          Foo
        </Tab>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Deselected (rounded variant)', () => {
      const wrapper = render(
        <Tab name="foo" variant="rounded">
          Foo
        </Tab>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Selected (rounded variant)', () => {
      const wrapper = render(
        <Tab name="foo" selected variant="rounded">
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
      const wrapper = render(<TabBar />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Some tabs', () => {
      const wrapper = render(
        <TabBar>
          <Tab name="foo">Foo</Tab>
          <Tab name="bar">Bar</Tab>
        </TabBar>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Selected tabs', () => {
      const wrapper = render(
        <TabBar activeTab="foo">
          <Tab name="foo">Foo</Tab>
          <Tab name="bar">Bar</Tab>
        </TabBar>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Rounded variant', () => {
      const wrapper = render(
        <TabBar activeTab="foo" variant="rounded">
          <Tab name="foo">Foo</Tab>
          <Tab name="bar">Bar</Tab>
        </TabBar>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Non-tab children', () => {
      const wrapper = render(<TabBar>Not a tab at all.</TabBar>);
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
