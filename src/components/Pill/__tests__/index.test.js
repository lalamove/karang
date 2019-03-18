import React from 'react';
import { render } from 'enzyme';
import Pill from '../index';

const colors = [
  'default',
  'mineShaft',
  'mountainMeadow',
  'nobel',
  'pictonBlue',
  'pictonBlueDark',
  'primary',
  'secondary',
  'treePoppy',
  'valencia',
];

describe('Badge', () => {
  it('With colors', () => {
    colors.forEach(color => {
      expect(render(<Pill variant={color}>12</Pill>)).toMatchSnapshot();
    });
  });

  it('With solid colors', () => {
    colors.forEach(color => {
      expect(
        render(
          <Pill variant={color} solid>
            12
          </Pill>
        )
      ).toMatchSnapshot();
    });
  });

  it('With smaller size', () => {
    expect(render(<Pill size="small">12</Pill>)).toMatchSnapshot();
  });
});
