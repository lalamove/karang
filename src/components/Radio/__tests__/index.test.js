import React, { Fragment } from 'react';
import { render, mount, shallow } from 'enzyme';
import Radio, { RadioGroup } from '../index';

describe('Snapshots', () => {
  it('Radio unchecked', () => {
    const wrapper = render(<Radio name="demo" value="blah" checked={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Radio checked', () => {
    const wrapper = render(<Radio name="demo" value="blah" checked />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Radio disabled', () => {
    const wrapper = render(<Radio name="demo" value="blah" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Radio group disabled', () => {
    const wrapper = render(
      <RadioGroup name="demo" defaultValue="1" disabled>
        {RadioB => (
          <Fragment>
            <RadioB name="demo" value="1" />
            <RadioB name="demo" value="2" />
            <RadioB name="demo" value="3" />
          </Fragment>
        )}
      </RadioGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Radio group with child disabled', () => {
    const wrapper = render(
      <RadioGroup name="demo" defaultValue="3">
        {RadioB => (
          <Fragment>
            <RadioB name="demo" value="1" />
            <RadioB name="demo" value="2" disabled />
            <RadioB name="demo" value="3" />
          </Fragment>
        )}
      </RadioGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Render children', () => {
    const wrapper = render(
      <Radio name="demo" value="blah">
        Hello
      </Radio>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Functions', () => {
  it('trigger onChange when clicked', () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(
      <Radio name="demo" value="blah" onChange={clickHandler} />
    );
    wrapper.find('input').simulate('change');
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});

describe('RadioGroup', () => {
  it('accept and call children function', () => {
    const f = jest.fn();
    mount(<RadioGroup name="demo">{f}</RadioGroup>);
    expect(f).toHaveBeenCalledTimes(1);
  });

  it('render RadioButton class as children', () => {
    const wrapper = mount(
      <RadioGroup name="vehicle" value="van">
        {RadioButton => (
          <Fragment>
            <RadioButton value="van" />
            <RadioButton value="motorbike" />
            <RadioButton value="truck" />
          </Fragment>
        )}
      </RadioGroup>
    );

    expect(wrapper.find(Radio)).toHaveLength(3);
  });

  it('call onChange when selected option changes', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <RadioGroup name="payment" onChange={changeHandler} value="cash">
        {RadioButton => (
          <Fragment>
            <RadioButton value="wallet">Wallet</RadioButton>
            <RadioButton value="cash">Cash</RadioButton>
          </Fragment>
        )}
      </RadioGroup>
    );

    wrapper
      .find(Radio)
      .filter({ value: 'wallet' })
      .find('input')
      .simulate('change');
    expect(changeHandler).toHaveBeenCalledWith('wallet');
  });
});
