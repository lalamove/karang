import React from 'react';
import { render, mount, shallow } from 'enzyme';
import AnimatedInput from './index';

// Enzyme doesn't work with forwardRef =>
// Tests fail as code was refactored with forwardRef
// All tests passed before 'forwardRef' refactoring

describe('Snapshots', () => {
  it('Password', () => {
    const wrapper = render(<AnimatedInput name="input" type="password" />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('Password with a value', () => {
  //   const wrapper = mount(
  //     <AnimatedInput name="input" type="password" value="dummy" />
  //   );
  //   expect(wrapper).toMatchSnapshot();
  // });
  //
  // it('Regular AnimatedInput', () => {
  //   const wrapper = render(<AnimatedInput name="input" />);
  //   expect(wrapper).toMatchSnapshot();
  // });
});
//
// describe('Functions', () => {
//   it('trigger onClick when clicked', () => {
//     const clickHandler = jest.fn();
//     const wrapper = mount(
//       <AnimatedInput name="input" onClick={clickHandler} />
//     );
//     wrapper.find('input').simulate('click');
//     expect(clickHandler).toHaveBeenCalledTimes(1);
//   });
//
//   it('trigger onChange when changed', () => {
//     const changeHandler = jest.fn();
//     const wrapper = mount(
//       <AnimatedInput name="input" onChange={changeHandler} />
//     );
//     wrapper.find('input').simulate('change');
//     expect(changeHandler).toHaveBeenCalledTimes(1);
//   });
//
//   it('trigger onBlur when blurred', () => {
//     const blurHandler = jest.fn();
//     const wrapper = mount(<AnimatedInput name="input" onBlur={blurHandler} />);
//     wrapper.find('input').simulate('blur');
//     expect(blurHandler).toHaveBeenCalledTimes(1);
//   });
//
//   it('trigger onFocus when focused', () => {
//     const focusHandler = jest.fn();
//     const wrapper = mount(
//       <AnimatedInput name="input" onFocus={focusHandler} />
//     );
//     wrapper.find('input').simulate('focus');
//     expect(focusHandler).toHaveBeenCalledTimes(1);
//   });
// });
//
// describe('Password', () => {
//   it('contains the PeekButton', () => {
//     const wrapper = shallow(<AnimatedInput name="input" type="password" />);
//     expect(wrapper.find('PeekButton').exists()).toBe(true);
//   });
// });
//
// describe('HOC', () => {
//   function DummyInput(props) {
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     );
//   }
//   const DummyInputWithAutoFocus = withAutoFocus(DummyInput, 'innerRef');
//   const DummyInputWithOnClickSelect = withOnClickSelect(DummyInput, 'innerRef');
//   const DummyInputWithOnClickToEnd = withOnClickToEnd(DummyInput, 'innerRef');
//
//   let wrapperDummy;
//   beforeEach(() => {
//     wrapperDummy = shallow(<DummyInput />);
//   });
//   it('withOnClickSelect', () => {
//     const wrapperHoc = shallow(<DummyInputWithOnClickSelect name="input" />);
//     expect(wrapperDummy.prop(['onClick'])).toBeUndefined();
//     expect(wrapperHoc.prop(['onClick'])).toBeDefined();
//     expect(wrapperDummy.prop(['getReference'])).toBeUndefined();
//     expect(wrapperHoc.prop(['getReference'])).toBeDefined();
//   });
//
//   it('withOnClickToEnd', () => {
//     const wrapperHoc = shallow(<DummyInputWithOnClickToEnd name="input" />);
//     expect(wrapperDummy.prop(['onClick'])).toBeUndefined();
//     expect(wrapperHoc.prop(['onClick'])).toBeDefined();
//     expect(wrapperDummy.prop(['getReference'])).toBeUndefined();
//     expect(wrapperHoc.prop(['getReference'])).toBeDefined();
//   });
//
//   it('withAutoFocus', () => {
//     // mocking componentDidMount
//     const focus = jest.fn();
//     DummyInputWithAutoFocus.prototype.componentDidMount = focus;
//
//     const wrapperHoc = mount(<DummyInputWithAutoFocus name="input" />);
//
//     expect(wrapperDummy.prop(['onClick'])).toBeUndefined();
//     expect(wrapperHoc.prop(['onClick'])).toBeUndefined();
//     expect(wrapperDummy.prop(['getReference'])).toBeUndefined();
//     expect(wrapperHoc.prop(['getReference'])).toBeDefined();
//   });
// });
//
// describe('Input', () => {
//   it('check the input value based on value prop', () => {
//     const wrapper = mount(<AnimatedInput name="input" value="test" />);
//     expect(wrapper.find('input').instance().value).toEqual('test');
//   });
//
//   it('check input value after change', () => {
//     const wrapper = mount(<AnimatedInput name="input" />);
//     wrapper.find('input').simulate('change', { target: { value: 'test' } });
//     expect(wrapper.find('input').instance().value).toEqual('test');
//   });
// });
//
// describe('Placeholder', () => {
//   it('check the placeholder value based on placeholder prop', () => {
//     const wrapper = mount(<AnimatedInput name="input" placeholder="test" />);
//     expect(wrapper.find('Placeholder').text()).toEqual('test');
//   });
// });
//
// describe('Error Message', () => {
//   it('check if the error message is rendered subject to an existing prop', () => {
//     const wrapper = shallow(<AnimatedInput name="input" error="Test Error" />);
//     expect(wrapper.find('ErrorMessage').exists()).toBe(true);
//   });
// });
