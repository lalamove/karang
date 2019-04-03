import React, { Component } from 'react';
import { bool, func, node, string } from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

import { mineShaft, nobel, primary } from 'styles/colors';
import { fontSize, primaryFonts } from 'styles/fonts';
import noop from 'utils/noop';

const Wrapper = styled.span`
  display: flex;
`;

const Container = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${mineShaft['900']};
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
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${Input}:checked ~ & {
    color: ${({ highlightLabel }) =>
      highlightLabel ? primary.main : mineShaft['900']};
  }
`;

const Checkmark = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  border: 1px solid ${nobel.main};
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 5px;
    display: none;
    width: 4px;
    height: 9px;
    border: solid ${primary.main};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  ${Input}:checked ~ &:after {
    display: block;
  }

  ${Input}:disabled ~ & {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${Input}:active:not(:disabled):not(:checked) ~ &,
  ${Input}:focus:not(:disabled):not(:checked) ~ & {
    box-shadow: 0 0 0 4px ${rgba(nobel.main, 0.2)};
  }

  ${Container}:hover ${Input}:not(:disabled):not(:checked) ~ & {
    border: 1px solid ${mineShaft['900']};
  }
`;

const IconWrapper = styled.span`
  margin-left: 4px;
`;

/**
 * Checkbox component is a square box that are checked (ticked) when activated.
 * Commonly used for an option that can be turned on or off.
 */
class Checkbox extends Component {
  static propTypes = {
    /** Name for the input element */
    name: string,
    /** The checkbox's label */
    label: node,
    /** Icon next to checkbox */
    icon: node,
    /** Boolean; if present and true, the checkbox is currently ticked */
    checked: bool,
    /** Boolean; the default checkbox checked state */
    defaultChecked: bool,
    /** Callback function, to be executed when user tick/untick the checkbox */
    onChange: func,
    /** A Boolean which, if true, disables the checkbox */
    disabled: bool,
    /** Boolean; if true, the checkbox's label is highlighted when ticked */
    highlightLabel: bool,
    /** String representing information related to the checkbox */
    title: string,
  };

  static defaultProps = {
    name: null,
    label: null,
    icon: null,
    checked: null,
    defaultChecked: false,
    onChange: noop,
    disabled: false,
    highlightLabel: false,
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
    const {
      name,
      label,
      icon,
      onChange,
      disabled,
      highlightLabel,
      title,
      ...remainProps
    } = this.props;
    const { checked } = this.state;

    return (
      <Wrapper>
        <Container htmlFor={name} title={title} {...remainProps}>
          <Input
            type="checkbox"
            name={name}
            id={name}
            checked={checked}
            onChange={this.handleChange}
            disabled={disabled}
          />
          <Checkmark />
          <Text highlightLabel={highlightLabel}>{label}</Text>
        </Container>
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </Wrapper>
    );
  }
}

export default Checkbox;
