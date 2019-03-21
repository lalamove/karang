import React from 'react';
import { render } from 'enzyme';
import CountdownBar from './index';

describe('CountdownBar', () => {
  it('Should not throw', () => {
    expect(() => <CountdownBar />).not.toThrow();
  });

  it('Should match snapshot', () => {
    expect(render(<CountdownBar />)).toMatchSnapshot();
  });
});
