/* globals render, mount */
import React from 'react';
import { EditableInput } from '../components/EditableInput';

describe('EditableInput', () => {
  describe('Snapshots', () => {
    it('Input field with normal state', () => {
      const wrapper = render(
        <EditableInput
          name="Billing Email"
          placeholder="Billing Email"
          defaultValue="no-reply@lalamove.com"
        />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Input field with right to left state', () => {
      const wrapper = render(
        <EditableInput
          name="Billing Email"
          placeholder="Billing Email"
          defaultValue="no-reply@lalamove.com"
          direction="rtl"
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('Input field with loading', () => {
      const wrapper = render(
        <EditableInput
          name="Billing Email"
          placeholder="Billing Email"
          defaultValue="no-reply@lalamove.com"
          isLoading
        />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Input field with success state', () => {
      const wrapper = render(
        <EditableInput
          name="Billing Email"
          placeholder="Billing Email"
          defaultValue="no-reply@lalamove.com"
          isSuccess
        />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Input field with error message', () => {
      const wrapper = render(
        <EditableInput
          name="Billing Email"
          placeholder="Billing Email"
          defaultValue="no-reply@lalamove.com"
          error="This is the error"
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Functions', () => {
    it('trigger onFocus for focus state', () => {
      const handler = jest.fn();
      const wrapper = mount(<EditableInput onFocus={handler} />);
      wrapper.find('input').simulate('focus');
      expect(wrapper.state('isFocused')).toBe(true);
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('trigger onBlur for blur state', () => {
      const handler = jest.fn();
      const wrapper = mount(<EditableInput onBlur={handler} />);
      wrapper.find('input').simulate('blur');
      expect(wrapper.state('isFocused')).toBe(false);
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('trigger onChange for keyinput', () => {
      const handler = jest.fn();
      const wrapper = mount(<EditableInput onChange={handler} />);
      wrapper.find('input').simulate('change', { target: { value: 'a' } });
      expect(wrapper.state('currentValue')).toBe('a');
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('trigger onCancel', () => {
      const handler = jest.fn();
      const wrapper = mount(<EditableInput onCancel={handler} />);
      wrapper.setState({ isDirty: true });
      wrapper
        .find('button')
        .first()
        .simulate('click');
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('trigger onSave for keyinput', () => {
      const handler = jest.fn();
      const wrapper = mount(<EditableInput onSave={handler} />);
      wrapper.setState({ isDirty: true });
      wrapper
        .find('button')
        .last()
        .simulate('click');
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('trigger onError if validate func is provided and value is invalid', () => {
      const handler = jest.fn();
      const validate = value => value === 'jon';
      const wrapper = mount(
        <EditableInput onError={handler} validate={validate} />
      );
      wrapper.find('input').simulate('change', { target: { value: 'bran' } });
      wrapper
        .find('button')
        .last()
        .simulate('click');
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });
});
