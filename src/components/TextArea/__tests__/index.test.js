import React from 'react';
import { mount, render } from 'enzyme';
import TextArea from '../index';

describe('TextArea', () => {
  describe('Snapshots', () => {
    it('TextArea with label and maxLength', () => {
      const wrapper = render(<TextArea />);
      expect(wrapper).toMatchSnapshot();
    });

    it('TextArea with label and maxLength', () => {
      const wrapper = render(<TextArea label="label" maxLength={140} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('TextArea with placeholder and maxLength', () => {
      const wrapper = render(
        <TextArea placeholder="placeholder" maxLength={140} />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('TextArea with error', () => {
      const wrapper = render(<TextArea error="error message" />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Functions', () => {
    it('trigger onChange when clicked', () => {
      const changeHandler = jest.fn();
      const wrapper = mount(<TextArea onChange={changeHandler} value="" />);
      wrapper.find('textarea').simulate('change');
      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('trigger onBlur when blurred', () => {
      const blurHandler = jest.fn();
      const wrapper = mount(<TextArea onBlur={blurHandler} />);
      wrapper.find('textarea').simulate('blur');
      expect(blurHandler).toHaveBeenCalledTimes(1);
    });

    it('trigger onFocus when focused', () => {
      const focusHandler = jest.fn();
      const wrapper = mount(<TextArea onFocus={focusHandler} />);
      wrapper.find('textarea').simulate('focus');
      expect(focusHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('Render', () => {
    it('always renders textarea HTML element', () => {
      const wrapper = mount(<TextArea />);
      expect(wrapper.find('textarea').length).toBe(1);
    });
  });
});
