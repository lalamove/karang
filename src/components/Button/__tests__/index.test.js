import React from 'react';
import { render } from 'enzyme';
import Button from '../index';

const types = {
  size: ['small', 'large', 'xlarge'],
  block: true,
  isLoading: true,
  variant: [
    'link',
    'primary',
    'secondary',
    'outline',
    'danger',
    'dangerOutline',
    'default',
  ],
  disabled: true,
};

for (const type in types) {
  if (type === 'variant' || type === 'size') {
    types[type].map(value => {
      it(`Button-${type}-${value}`, () => {
        const prop = { [type]: value };
        const wrapper = render(<Button {...prop}>hello</Button>);
        expect(wrapper).toMatchSnapshot();
      });
    });
  } else {
    it(`Button-${type}`, () => {
      const prop = { [type]: types[type] };
      const wrapper = render(<Button {...prop}>hello</Button>);
      expect(wrapper).toMatchSnapshot();
    });
  }
}
