import React from 'react';
import { render, mount } from 'enzyme';

import Alert from '../index';

const types = {
  type: ['warning', 'error', 'success', 'info'],
  variant: ['default', 'toast'],
};

describe('Alert', () => {
  describe('Snapshots', () => {
    for (const type in types) {
      if (type === 'type' || type === 'variant') {
        types[type].map(value => {
          it(`Alert-${type}-${value}`, () => {
            const props = { [type]: value };
            const wrapper = render(
              <Alert {...props} message="Foo" description="Bar" />
            );
            expect(wrapper).toMatchSnapshot();
          });
        });
      }
    }
  });

  describe('Functions', () => {
    it('calls onDismiss when CloseButton is clicked', () => {
      const clickHandler = jest.fn();
      const wrapper = mount(
        <Alert
          type="info"
          message="Foo"
          description="Bar"
          onDismiss={clickHandler}
        />
      );
      wrapper.find('button').simulate('click');
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
