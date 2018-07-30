import React from 'react';
import { render } from 'enzyme';
import Input from '../index';

// Enzyme is still not fully support React 16.3 forwardRef
// https://github.com/airbnb/enzyme/pull/1592
// https://github.com/airbnb/enzyme/issues/1717

describe('Input', () => {
  describe('Snapshots', () => {
    it('Password', () => {
      const wrapper = render(<Input name="input" type="password" />);
      expect(wrapper).toMatchSnapshot();
    });

    // it('Password with a value', () => {
    //   const wrapper = mount(
    //     <Input name="input" type="password" value="dummy" />
    //   );
    //   expect(wrapper).toMatchSnapshot();
    // });

    it('Regular Input', () => {
      const wrapper = render(<Input name="input" />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  // describe('Functions', () => {
  //   it('trigger onClick when clicked', () => {
  //     const clickHandler = jest.fn();
  //     const wrapper = mount(<Input name="input" onClick={clickHandler} />);
  //     wrapper.find('input').simulate('click');
  //     expect(clickHandler).toHaveBeenCalledTimes(1);
  //   });
  //
  //   it('trigger onChange when changed', () => {
  //     const changeHandler = jest.fn();
  //     const wrapper = mount(<Input name="input" onChange={changeHandler} />);
  //     wrapper.find('input').simulate('change');
  //     expect(changeHandler).toHaveBeenCalledTimes(1);
  //   });
  //
  //   it('trigger onBlur when blurred', () => {
  //     const blurHandler = jest.fn();
  //     const wrapper = mount(<Input name="input" onBlur={blurHandler} />);
  //     wrapper.find('input').simulate('blur');
  //     expect(blurHandler).toHaveBeenCalledTimes(1);
  //   });
  //
  //   it('trigger onFocus when focused', () => {
  //     const focusHandler = jest.fn();
  //     const wrapper = mount(<Input name="input" onFocus={focusHandler} />);
  //     wrapper.find('input').simulate('focus');
  //     expect(focusHandler).toHaveBeenCalledTimes(1);
  //   });
  // });
  //
  // describe('Password', () => {
  //   it('contains the PeekButton', () => {
  //     const wrapper = shallow(<Input name="input" type="password" />);
  //     expect(wrapper.find('PeekButton').exists()).toBe(true);
  //   });
  // });
  //
  // describe('Input', () => {
  //   it('check the input value based on value prop', () => {
  //     const wrapper = mount(<Input name="input" value="test" />);
  //     expect(wrapper.find('input').instance().value).toEqual('test');
  //   });
  //
  //   it('check input value after change', () => {
  //     const wrapper = mount(<Input name="input" />);
  //     wrapper.find('input').simulate('change', { target: { value: 'test' } });
  //     expect(wrapper.find('input').instance().value).toEqual('test');
  //   });
  // });
  //
  // describe('Placeholder', () => {
  //   it('check the placeholder value based on placeholder prop', () => {
  //     const wrapper = mount(<Input name="input" placeholder="test" />);
  //     expect(wrapper.find('Placeholder').text()).toEqual('test');
  //   });
  // });
  //
  // describe('Error Message', () => {
  //   it('check if the error message is rendered subject to an existing prop', () => {
  //     const wrapper = shallow(<Input name="input" error="Test Error" />);
  //     expect(wrapper.find('ErrorMessage').exists()).toBe(true);
  //   });
  // });
});

// describe('PinInput', () => {
//   let props;
//   let mountedPinInput;
//   const pinInput = () => {
//     if (!mountedPinInput) {
//       mountedPinInput = mount(<PinInput {...props} />);
//     }
//     return mountedPinInput;
//   };
//
//   beforeEach(() => {
//     props = {
//       pins: undefined,
//       disabled: undefined,
//       error: undefined,
//       onChange: undefined,
//     };
//     mountedPinInput = undefined;
//   });
//
//   it('always renders a div', () => {
//     const divs = pinInput().find('div');
//     expect(divs.length).toBeGreaterThan(0);
//   });
//
//   describe('the rendered div', () => {
//     it('contains everything else that gets rendered', () => {
//       const divs = pinInput().find('div');
//       const wrappingDiv = divs.first();
//       expect(wrappingDiv).toEqual(pinInput().children());
//     });
//   });
//
//   it('always renders 4 inputs', () => {
//     expect(pinInput().find('input').length).toBe(4);
//   });
//
//   describe('when error is passed', () => {
//     beforeEach(() => {
//       props.error = 'Error message.';
//     });
//
//     it('renders an error div', () => {
//       expect(pinInput().find('div.PinInput__error').length).toBe(1);
//     });
//
//     it('passes error message to the rendered error div', () => {
//       const errorDiv = pinInput().find('div.PinInput__error');
//       expect(errorDiv.childAt(0).props().children).toBe(props.error);
//     });
//   });
//
//   describe('when error is undefined', () => {
//     beforeEach(() => {
//       props.error = undefined;
//     });
//
//     it('does not render any error div', () => {
//       expect(pinInput().find('div.PinInput__error').length).toBe(0);
//     });
//   });
// });
