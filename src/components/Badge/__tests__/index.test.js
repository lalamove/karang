import React from 'react';
import { render } from 'enzyme';
import Badge from '../index';

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
      expect(render(<Badge variant={color}>Testing</Badge>)).toMatchSnapshot();
    });
  });

  it('With solid colors', () => {
    colors.forEach(color => {
      expect(
        render(
          <Badge variant={color} solid>
            Testing
          </Badge>
        )
      ).toMatchSnapshot();
    });
  });

  it('With smaller size', () => {
    expect(render(<Badge size="small">Testing</Badge>)).toMatchSnapshot();
  });

  it('With icon', () => {
    expect(render(<Badge icon="testing">Testing</Badge>)).toMatchSnapshot();
  });
});
