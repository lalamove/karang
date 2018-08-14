/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@storybook/react';
import Radio, { RadioGroup } from './index';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

class Wrapper extends Component {
  state = {
    payment: 'wallet',
  };

  handleChange = value => {
    this.setState({ payment: value });
    this.props.action('select')(value);
  };

  render() {
    const self = this;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        value: self.state.payment,
        onChange: self.handleChange,
      })
    );
    return <Container>{children}</Container>;
  }
}

storiesOf('Radio', module)
  .addDecorator(story => <Wrapper action={action}>{story()}</Wrapper>)
  .add('Basic', () => (
    <Radio name="payment" value="cash" disabled>
      Radio 1
    </Radio>
  ))
  .add('RadioGroup', () => (
    <RadioGroup name="payment">
      {RadioButton => (
        <Fragment>
          <RadioButton value="wallet">Wallet</RadioButton>
          <RadioButton value="cash">Cash</RadioButton>
        </Fragment>
      )}
    </RadioGroup>
  ))
  .add('RadioGroupBtn', () => (
    <RadioGroup name="payment">
      {Radio => (
        <Fragment>
          <Radio value="wallet" style={{
            border: "1px solid #E8E8E8",
            padding: "0.75em",
            color: "#58595B",
            "font-size": "16px",
            "margin-top": "0.5em",
            display: "flex",
            "line-height": "1.5em",
            "align-items": "center"
          }}>11:00 - 12:00</Radio>
          <Radio value="cash" style={{
            border: "1px solid #E8E8E8",
            padding: "0.75em",
            color: "#58595B",
            "font-size": "16px",
            "margin-top": "0.5em",
            display: "flex",
            "line-height": "1.5em",
            "align-items": "center"
          }}>13:00 - 14:00</Radio>
        </Fragment>
      )}
    </RadioGroup>
  ));
