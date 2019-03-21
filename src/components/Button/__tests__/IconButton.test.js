import React from 'react';
import { render } from 'enzyme';
import { IconButton } from '../index';

const types = {
  shape: ['default', 'square'],
  variant: ['primary', 'secondary', 'danger', 'default'],
};

Object.keys(types).forEach(type => {
  types[type].forEach(value => {
    it(`IconButton-${type}-${value}`, () => {
      const prop = { [type]: value };
      const wrapper = render(<IconButton {...prop}>hello</IconButton>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
