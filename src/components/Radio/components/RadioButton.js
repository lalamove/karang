import React, { PureComponent } from 'react';
import { bool, func, node, string, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import noop from 'utils/noop';
import { nobel, primary, mineShaft } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';

const Radio = styled.span.attrs({
  'aria-hidden': 'true',
})`
  display: inline-block;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  padding: 2px;
  border: 1px solid ${nobel.main};
  border-radius: 50%;
  vertical-align: middle;
`;

const Text = styled.span`
  display: inline-block;
  font-family: ${primaryFonts};
  ${/* sc-selector */ Radio} + & {
    margin-left: 0.5em;
  }
`;

const Label = styled.label`
  display: inline-block;
  cursor: pointer;

  input {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
  }

  span {
    vertical-align: middle;
  }
  
  /* layout */
  ${({ block }) =>
    block &&
    css`
      display: flex;
    `};
  
  /* type */
  ${({ variant }) =>
    variant === 'list' &&
    css`
      border: 1px solid ${nobel['200']};
      padding: 0.75em;
      margin: 0.5em 0;
      line-height: 1.5em;
      align-items: center;
    `}

  &:hover ${/* sc-selector */ Radio},
  & > input:focus ~ ${/* sc-selector */ Radio} {
    border: 1px solid ${nobel.main};
  }
  
  &:hover > input:not(:checked):not(:disabled) ~ ${/* sc-selector */ Radio}, 
  &:active > input:not(:checked):not(:disabled) ~ ${/* sc-selector */ Radio} {
    border: 1px solid ${mineShaft['900']};
  }
  
  &:active > input:not(:disabled) ~ ${/* sc-selector */ Radio}, 
  & > input:focus:not(:disabled) ~ ${/* sc-selector */ Radio} {
    box-shadow: 0 0 0 4px ${rgba(nobel.main, 0.2)};
  }

  & > input:disabled ~ ${/* sc-selector */ Radio}, 
  & > input:disabled ~ ${/* sc-selector */ Text} {
    opacity: 0.5;
  }

  & > input:checked ~ ${/* sc-selector */ Radio}:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: ${primary.main};
    border-radius: 50%;
  }
  
  /* stylelint-disable no-descending-specificity */
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      &:hover ${/* sc-selector */ Radio} {
        box-shadow: none;
      }
    `}
`;

// Need to extract button style
const Button = styled.label`
  display: inline-block;
  padding: 1em;
  border: 2px solid ${nobel['200']};
  margin: 0.8em 0;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;

  input {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
  }

  span {
    vertical-align: middle;
  }

  /* layout */
  ${({ block }) =>
    block &&
    css`
      display: flex;
    `};

  & ${/* sc-selector */ Text} {
    color: ${nobel.main};
    font-weight: 700;
  }

  &:hover,
  &:active {
    background-color: ${nobel['100']};
  }

  &:active,
  &:focus {
    box-shadow: 0 0 0 4px ${rgba(nobel.main, 0.2)};
  }

  ${({ checked }) =>
    checked &&
    css`
      border: 2px solid ${primary.main};

      & ${/* sc-selector */ Text} {
        color: ${primary.main};
      }

      &:hover,
      &:active {
        background-color: ${primary.main};
      }

      &:hover > ${/* sc-selector */ Text} {
        color: #fff;
      }

      &:active,
      &:focus {
        box-shadow: 0 0 0 4px ${rgba(primary.main, 0.2)};
      }
    `};
`;

class RadioButton extends PureComponent {
  static displayName = 'Radio';

  static propTypes = {
    /** @ignore */
    children: node,
    /** @ignore */
    name: string,
    /** Value of the radio button */
    value: string.isRequired, // eslint-disable-line react/no-typos
    checked: bool,
    /** Callback function, to be executed when user selected the radio button and it has changed */
    onChange: func,
    /** Disable the radio button if it is `true` */
    disabled: bool,
    /** Fit the width to its parent width when it is `true` */
    block: bool,
    /** Variant of the radio button, `default` is the circle buttons, `list` is the circle buttons
     *  with border, `toggle` is the toggle buttons */
    variant: oneOf(['default', 'list', 'toggle']),
  };

  static defaultProps = {
    children: null,
    name: null,
    onChange: noop,
    checked: false,
    disabled: false,
    block: false,
    variant: 'default',
  };

  render() {
    const {
      children,
      checked,
      name,
      onChange,
      value,
      variant,
      disabled,
      block,
      ...rest
    } = this.props;

    const Comp = variant !== 'toggle' ? Label : Button;
    return (
      <Comp
        htmlFor={`${name}-${value}`}
        {...rest}
        checked={checked}
        variant={variant}
        block={block}
        disabled={disabled}
      >
        <input
          id={`${name}-${value}`}
          type="radio"
          name={name}
          onChange={onChange}
          aria-checked={checked}
          checked={checked}
          value={value}
          disabled={disabled}
        />
        {variant !== 'toggle' && <Radio />}
        <Text>{children}</Text>
      </Comp>
    );
  }
}

export default RadioButton;
