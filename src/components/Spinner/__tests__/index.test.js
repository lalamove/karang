/* globals render */
import React from 'react';
import Spinner from '../index';

test('Spinner', () => {
  expect(render(<Spinner />)).toMatchSnapshot();
});

test('Spinner with custom size', () => {
  expect(render(<Spinner size={36} />)).toMatchSnapshot();
});

test('Spinner with large size', () => {
  expect(render(<Spinner size="large" />)).toMatchSnapshot();
});

test('Spinner Color', () => {
  expect(render(<Spinner color="black" />)).toMatchSnapshot();
});
