import React from 'react';
import List from '../index';
import { lighten } from 'polished';
import { render, mount } from 'enzyme';
import { orange, offWhite } from 'styles/colors';

const types = {
  size: ['small', undefined],
};

describe('List component', () => {
  for (const type in types) {
    if (Object.prototype.hasOwnProperty.call(types, type)) {
      // eslint-disable-next-line array-callback-return
      types[type].map(variantType => {
        it(`${type}-${variantType}-default`, () => {
          const prop = { [type]: variantType };
          expect(
            render(
              <List items={[{}, {}, {}, {}]} {...prop}>
                {({ Item, getProps }) => <Item {...getProps()}>hello</Item>}
              </List>
            )
          ).toMatchSnapshot();
        });

        it(`${type}-${variantType}-with icon`, () => {
          const prop = { [type]: variantType };
          expect(
            render(
              <List items={[{}, {}, {}, {}]} {...prop}>
                {({ Item, getProps }) => (
                  <Item {...getProps({ icon: 'blah' })} />
                )}
              </List>
            )
          ).toMatchSnapshot();
        });

        it(`${type}-${variantType}-use unique as key`, () => {
          const prop = { [type]: variantType };
          const data = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];
          const comp = mount(
            <List unique="id" items={data} {...prop}>
              {({ Item, getProps }) => <Item {...getProps()} />}
            </List>
          );

          comp.find('LI').forEach((wrapper, i) => {
            expect(wrapper.key()).toEqual(data[i].id);
          });
        });

        it(`${type}-${variantType}-hoverable`, () => {
          const prop = { [type]: variantType };
          const data = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];
          const comp = mount(
            <List hoverable items={data} {...prop}>
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
    }
  }
});
