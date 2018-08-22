import React, { Component } from 'react';
import { string, bool, func, node } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import { orange, gray, silver, white, offWhite } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const Container = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${gray};
  font-family: ${primaryFonts};
  font-size: ${fontSize.regular};
  user-select: none;
  line-height: 20px;
`;

const Input = styled.input`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
`;

const Text = styled.span`
  padding-left: 28px;
  cursor: pointer;

  ${Input}:disabled ~ & {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Checkmark = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  border: solid 1px ${silver};
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 5px;
    display: none;
    width: 4px;
    height: 9px;
    border: solid ${orange};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  ${Input}:focus ~ & {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
  }

  ${Input}:checked ~ & {
    background-color: ${white};
  }

  ${Input}:checked ~ &:after {
    display: block;
  }

  ${Input}:disabled ~ & {
    background-color: ${offWhite};
    cursor: not-allowed;
  }

  ${Input}:disabled ~ &:after {
    border-color: ${silver};
  }

  ${Container}:hover ${/* sc-selector */ Input}:not(:disabled) ~ & {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
    border: solid 1px ${silver};
  }
`;

class Checkbox extends Component {
  static defaultProps = {
    name: 'llm-checkbox',
    label: '',
    checked: false,
    onChange: noop,
    disabled: false,
  };

  static propTypes = {
    name: string,
    label: node,
    checked: bool,
    onChange: func,
    disabled: bool,
  };

  state = { checked: this.props.checked };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const {
      checked,
      name,
      label,
      onChange,
      disabled,
      ...remainProps
    } = this.props;

    return (
      <Container htmlFor={name} {...remainProps}>
        <Input
          type="checkbox"
          name={name}
          id={name}
          checked={onChange === noop ? this.state.checked : checked}
          onChange={onChange === noop ? this.handleChange : onChange}
          disabled={disabled}
        />
        <Checkmark />
        <Text>{label}</Text>
      </Container>
    );
  }
}

export default Checkbox;
