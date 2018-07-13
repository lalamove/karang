import React from 'react';
import { render } from 'enzyme';
import Button from './index';

const types = {
  large: true,
  block: true,
  isLoading: true,
  variant: ['link', 'primary', 'secondary', 'outline', 'default'],
  disabled: true,
};

for (const type in types) {
  if (type === 'variant') {
    types[type].map(variantType => {
      it(`Button-${type}-${variantType}`, () => {
        const prop = { [type]: variantType };
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
