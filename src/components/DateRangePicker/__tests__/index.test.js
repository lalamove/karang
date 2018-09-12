import React from 'react';
import { render } from 'enzyme';
import DatePicker from '../index';

describe('DatePicker', () => {
  describe('SnapShots', () => {
    it('DatePicker', () => {
      const wrapper = render(<DatePicker isOutsideRange={() => false} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
