import React from 'react';
import { render } from 'enzyme';

import Icon from '../index';
import icons from '../icons';
import { red, orange } from 'styles/colors';

const optionalProps = {
  size: [20, 40],
  color: [red, orange],
};

// eslint-disable-next-line array-callback-return
Object.keys(icons).map(type => {
  it(`Icon-${type}`, () => {
    const prop = { type };
    const wrapper = render(<Icon {...prop} />);
    expect(wrapper).toMatchSnapshot();
  });
});

// eslint-disable-next-line array-callback-return
Object.keys(icons).map(type => {
  for (const prop in optionalProps) {
    if (Object.prototype.hasOwnProperty.call(optionalProps, prop)) {
      // eslint-disable-next-line array-callback-return
      optionalProps[prop].map(value => {
        it(`Icon-${type}-${prop}-${value}`, () => {
          const props = { type, [prop]: value };
          const wrapper = render(<Icon {...props} />);
          expect(wrapper).toMatchSnapshot();
        });
      });
    }
  }
});
