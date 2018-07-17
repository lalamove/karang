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
    console.log(this.props.children);
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
  ));
