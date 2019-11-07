import React from 'react';
import { render } from 'enzyme';

import ErrorMessage from '../index';

describe('Snapshots', () => {
  it('ErrorMessage', () => {
    const wrapper = render(<ErrorMessage error="message">blah</ErrorMessage>);
    expect(wrapper).toMatchSnapshot();
  });
  it('ErrorMessage with rtl ', () => {
    const wrapper = render(
      <ErrorMessage error="message" rtl>
        blah
      </ErrorMessage>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
