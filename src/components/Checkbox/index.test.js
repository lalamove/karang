import React from 'react';
import { mount, render } from 'enzyme';
import QuestionIcon from 'components/Icon/icons/alert/question';
import Checkbox from './index';

describe('Checkbox', () => {
  it('Should not throw', () => {
    expect(() => <Checkbox />).not.toThrow();
  });

  it('Should match snapshot', () => {
    expect(render(<Checkbox />)).toMatchSnapshot();
  });

  it('Should match snapshot - `checked`', () => {
    expect(render(<Checkbox checked />)).toMatchSnapshot();
  });

  it('Should match snapshot - highlight label', () => {
    expect(render(<Checkbox highlightLabel />)).toMatchSnapshot();
  });

  it('Should render icon when provided', () => {
    const wrapper = mount(<Checkbox icon={<QuestionIcon />} />);
    expect(wrapper.find('QuestionIcon')).toHaveLength(1);
  });

  it('Should update state when `checked` change', () => {
    const wrapper = mount(<Checkbox />);
    expect(wrapper.state('checked')).toBe(false);
    wrapper.setProps({ checked: true });
    expect(wrapper.state('checked')).toBe(true);
  });

  it('Should call `onChange`', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(<Checkbox onChange={changeHandler} />);
    wrapper.find('input').simulate('change');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });
});
