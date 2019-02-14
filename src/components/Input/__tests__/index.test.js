import React from 'react';
import { mount, render } from 'enzyme';
import Input, { PinInput } from '../index';

describe('Input', () => {
  describe('Snapshots', () => {
    it('Password', () => {
      const wrapper = render(<Input name="input" type="password" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Password with a value', () => {
      const wrapper = render(
        <Input name="input" type="password" defaultValue="dummy" />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Regular Input', () => {
      const wrapper = render(<Input name="input" />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Functions', () => {
    it('trigger onClick when clicked', () => {
      const clickHandler = jest.fn();
      const wrapper = mount(<Input name="input" onClick={clickHandler} />);
      wrapper.find('input').simulate('click');
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('trigger onChange when changed', () => {
      const changeHandler = jest.fn();
      const wrapper = mount(<Input name="input" onChange={changeHandler} />);
      wrapper.find('input').simulate('change');
      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('trigger onBlur when blurred', () => {
      const blurHandler = jest.fn();
      const wrapper = mount(<Input name="input" onBlur={blurHandler} />);
      wrapper.find('input').simulate('blur');
      expect(blurHandler).toHaveBeenCalledTimes(1);
    });

    it('trigger onFocus when focused', () => {
      const focusHandler = jest.fn();
      const wrapper = mount(<Input name="input" onFocus={focusHandler} />);
      wrapper.find('input').simulate('focus');
      expect(focusHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('Render', () => {
    it('contains the PeekButton for password Input', () => {
      const wrapper = mount(<Input name="input" type="password" />);
      expect(wrapper.find('PeekButton').exists()).toBe(true);
    });

    it('the PeekButton for password Input should be on', () => {
      const wrapper = mount(
        <Input name="input" type="password" masked={false} />
      );
      expect(wrapper.find('input').instance().type).toEqual('text');
    });

    it('check the input value based on value prop', () => {
      const wrapper = mount(<Input name="input" defaultValue="test" />);
      expect(wrapper.find('input').instance().value).toEqual('test');
    });

    // TODO: Fix this broken test case
    it.skip('check input value after change', () => {
      const wrapper = mount(<Input name="input" />);
      wrapper.find('input').simulate('change', { target: { value: 'test' } });
      expect(wrapper.find('input').instance().value).toEqual('test');
    });

    it('check the label value based on label prop', () => {
      const wrapper = mount(<Input name="input" label="test" />);
      expect(wrapper.find('label').text()).toEqual('test');
    });

    it('check the error message', () => {
      const wrapper = mount(<Input name="input" error="Error Message" />);
      expect(wrapper.find('ErrorMessage').length).toBe(1);
      expect(
        wrapper
          .find('ErrorMessage')
          .find('span')
          .first()
          .text()
      ).toEqual('Error Message');
    });
  });
});

describe('PinInput', () => {
  describe('Snapshots', () => {
    it('Empty', () => {
      const wrapper = render(<PinInput />);
      expect(wrapper).toMatchSnapshot();
    });

    it('4 digits filled with error message', () => {
      const wrapper = render(
        <PinInput pins={['1', '2', '3', '4']} error="Error Message" />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('change type', () => {
      const wrapper = render(<PinInput type="tel" />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Render', () => {
    it('always renders a div', () => {
      const wrapper = mount(<PinInput />);
      const divs = wrapper.find('div');
      expect(divs.length).toBeGreaterThan(0);
    });

    it('always renders 4 inputs', () => {
      const wrapper = mount(<PinInput />);
      expect(wrapper.find('input').length).toBe(4);
    });

    it('renders an error message div', () => {
      const wrapper = mount(<PinInput error="Error Message" />);
      expect(wrapper.find('ErrorMessage').length).toBe(1);
      expect(
        wrapper
          .find('ErrorMessage')
          .find('span')
          .first()
          .text()
      ).toBe('Error Message');
    });

    it('when error is undefined, does not render any error div', () => {
      const wrapper = mount(<PinInput />);
      expect(wrapper.find('ErrorMessage').find('span').length).toBe(0);
    });
  });
});
