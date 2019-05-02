/* globals render */
import React from 'react';
import Flag from './index';

test('Flag', () => {
  expect(render(<Flag />)).toMatchSnapshot();
});

test('Flag top', () => {
  expect(render(<Flag variant="top" />)).toMatchSnapshot();
});

test('Flag bottom', () => {
  expect(render(<Flag variant="bottom" />)).toMatchSnapshot();
});
