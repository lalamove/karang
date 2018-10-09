import React from 'react';
import { render } from 'enzyme';

import AnimatedBorder from '../index';

const status = {
  focused: true,
  dirty: true,
  error: true,
};

describe('Snapshots', () => {
  it('AnimatedBorder', () => {
    const wrapper = render(<AnimatedBorder>blah</AnimatedBorder>);
    expect(wrapper).toMatchSnapshot();
  });

  it('AnimatedBorder with label', () => {
    const wrapper = render(
      <AnimatedBorder label="Label" name="testing">
        blah
      </AnimatedBorder>
    );
    expect(wrapper).toMatchSnapshot();
  });

  for (const type in status) {
    if (Object.prototype.hasOwnProperty.call(status, type)) {
      it(`AnimatedBorder with label and ${type}`, () => {
        const prop = {
          label: 'Label',
          [type]: status[type],
        };
        const wrapper = render(<AnimatedBorder {...prop}>blah</AnimatedBorder>);
        expect(wrapper).toMatchSnapshot();
      });
    }
  }
});
