/* global render */
import React from 'react';
import Checkbox from './index';

test('not crash', () => {
  expect(() => <Checkbox />).not.toThrow();
});

test('snapshot', () => {
  expect(render(<Checkbox />)).toMatchSnapshot();
});
