import React from 'react';
import { render } from 'enzyme';
import { primary, valencia } from 'styles/colors';

import Icon from '../index';
import * as icons from '../icons';

const optionalProps = {
  size: [20, 40],
  color: [valencia.main, primary.main],
};

// TODO: deprecate
describe('<Icon />', () => {
  Object.entries(icons).forEach(([type, SpecificIcon]) => {
    it(`<${type}Icon />`, () => {
      const wrapper = render(<SpecificIcon />);
      expect(wrapper).toMatchSnapshot();
    });
    it(`<Icon type={$type} />`, () => {
      const wrapper = render(<Icon type={type} />);
      expect(wrapper).toMatchSnapshot();
    });
    Object.entries(optionalProps).forEach(([key, dataSet]) => {
      dataSet.forEach(value => {
        it(`Icon-${type}-${key}-${value}`, () => {
          const props = { [key]: value };
          const wrapper = render(<SpecificIcon {...props} />);
          expect(wrapper).toMatchSnapshot();
        });
      });
    });
  });
});
