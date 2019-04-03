import React from 'react';
import { render } from 'enzyme';
import Button from '../index';

const types = {
  size: ['small', 'large', 'xlarge'],
  block: true,
  isLoading: true,
  disabled: true,
  solid: true,
  variant: ['link', 'primary', 'secondary', 'danger', 'default'],
};

Object.keys(types).forEach(type => {
  if (type === 'variant' || type === 'size') {
    types[type].forEach(value => {
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
});
