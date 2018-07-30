/* global render, mount */
import React from 'react';
import List from '../index';
import { lighten } from 'polished';
import { orange, offWhite } from 'styles/colors';

describe('List component', () => {
  it('default', () => {
    expect(
      render(
        <List items={[{}, {}, {}, {}]}>
          {({ Item, getProps }) => <Item {...getProps()}>hello</Item>}
        </List>
      )
    ).toMatchSnapshot();
  });

  it('with icon', () => {
    expect(
      render(
        <List items={[{}, {}, {}, {}]}>
          {({ Item, getProps }) => <Item {...getProps({ icon: 'blah' })} />}
        </List>
      )
    ).toMatchSnapshot();
  });

  it('use unique as key', () => {
    const data = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];
    const comp = mount(
      <List unique="id" items={data}>
        {({ Item, getProps }) => <Item {...getProps()} />}
      </List>
    );

    comp.find('LI').forEach((wrapper, i) => {
      expect(wrapper.key()).toEqual(data[i].id);
    });
  });

  it('hoverable', () => {
    const data = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];
    const comp = mount(
      <List hoverable items={data}>
        {({ Item, getProps }) => <Item {...getProps({ icon: 'blah' })} />}
      </List>
    );

    const listItem = comp.find('li').at(2); // randomly pick one

    expect(listItem).toHaveStyleRule('border-left-color', orange, {
      modifier: ':hover',
    });

    expect(listItem).toHaveStyleRule(
      'background-color',
      lighten(0.05, offWhite),
      {
        modifier: ':hover',
      }
    );
  });
});
