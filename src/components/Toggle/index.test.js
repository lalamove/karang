import React from 'react';
import { render, mount } from 'enzyme';
import Toggle from './index';

describe('Toggle', () => {
  it('Should not throw', () => {
    expect(() => <Toggle />).not.toThrow();
  });

  it('Should match snapshot', () => {
    expect(render(<Toggle />)).toMatchSnapshot();
  });

  it('Should match snapshot - `checked`', () => {
    expect(render(<Toggle checked />)).toMatchSnapshot();
  });

  it('Should update state when `checked` change', () => {
    const wrapper = mount(<Toggle />);
    expect(wrapper.state('checked')).toBe(false);
    wrapper.setProps({ checked: true });
    expect(wrapper.state('checked')).toBe(true);
  });

  it('Should call `onChange`', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(<Toggle onChange={changeHandler} />);
    wrapper.find('input').simulate('change');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });
});
