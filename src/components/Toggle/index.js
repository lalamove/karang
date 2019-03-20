import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import { nobel, primary, white } from 'styles/colors';
import noop from 'utils/noop';

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

const Knob = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid ${nobel['400']};
  border-radius: 24px;
  background-color: ${white};
  transition: 0.3s;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 3px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${nobel['400']};
    transition: 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 9px;
    visibility: hidden;
    width: 4px;
    height: 9px;
    border: solid ${primary.main};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    transition: 0.3s;
    transition-property: transform;
  }

  ${Input}:disabled ~ & {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${Input}:checked ~ & {
    border-color: ${primary.main};
    background-color: ${primary.main};
  }
  ${Input}:checked ~ &:before {
    background-color: ${white};
    transform: translateX(22px);
  }
  ${Input}:checked ~ &:after {
    visibility: visible;
    transform: translateX(22px) rotate(45deg);
  }

  ${Input}:active:not(:disabled) ~ &,
  ${Input}:focus:not(:disabled) ~ & {
    box-shadow: 0 0 0 4px ${rgba(nobel['400'], 0.2)};
  }
  ${Input}:active:checked:not(:disabled) ~ &,
  ${Input}:focus:checked:not(:disabled) ~ & {
    box-shadow: 0 0 0 4px ${rgba(primary.main, 0.2)};
  }

  ${Container}:hover ${Input}:not(:disabled) ~ & {
    background-color: ${nobel['100']};
  }
  ${Container}:hover ${Input}:not(:disabled):checked ~ & {
    background-color: ${primary['800']};
  }
`;

/**
 * Toggle component is a checkbox with switch-like shape and animation.
 * Commonly used for an option that can be turned on or off.
 */
class Toggle extends Component {
  static propTypes = {
    /** Name for the input element */
    name: string,
    /** Boolean; if present and true, the toggle is currently swtiched on */
    checked: bool,
    /** Boolean; the default toggle checked state */
    defaultChecked: bool,
    /** Callback function, to be executed when user switch the toggle on/off */
    onChange: func,
    /** A Boolean which, if true, disables the toggle */
    disabled: bool,
    /** String representing information related to the toggle */
    title: string,
  };

  static defaultProps = {
    name: null,
    checked: null,
    defaultChecked: false,
    onChange: noop,
    disabled: false,
    title: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.checked !== null && props.checked !== state.checked) {
      return { checked: props.checked };
    }
    return null;
  }

  /* eslint-disable react/destructuring-assignment */
  state = {
    checked:
      this.props.checked === null
        ? this.props.defaultChecked
        : this.props.checked,
  };
  /* eslint-enable react/destructuring-assignment */

  handleChange = e => {
    const { checked, onChange } = this.props;
    if (checked === null) {
      this.setState(state => ({ checked: !state.checked }));
    }
    onChange(e);
  };

  render() {
    const { name, onChange, disabled, title, ...remainProps } = this.props;
    const { checked } = this.state;

    return (
      <Container htmlFor={name} title={title} {...remainProps}>
        <Input
          type="checkbox"
          name={name}
          id={name}
          checked={checked}
          onChange={this.handleChange}
          disabled={disabled}
        />
        <Knob />
      </Container>
    );
  }
}

export default Toggle;
