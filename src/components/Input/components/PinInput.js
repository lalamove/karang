import React, { Component } from 'react';
import { arrayOf, bool, func, string, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';

import noop from 'utils/noop';
import ErrorMessage from '../../ErrorMessage';
import { red, orange, offWhite } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const Input = styled.input`
  border: 1px solid ${offWhite};
  caret-color: ${orange};
  font-family: ${primaryFonts};
  padding: 0;
  border-radius: 0;
  appearance: none;
  outline: 0;
  margin: 0 8px 8px 8px;
  text-align: center;

  &:focus {
    border: 1px solid ${orange};
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 52px;
          height: 52px;
          font-size: ${fontSize.xxlarge};
        `;
      case 'large':
      default:
        return css`
          width: 68px;
          height: 68px;
          font-size: ${fontSize.xxxlarge};
        `;
    }
  }};

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${red};
      color: ${red};

      &:focus {
        border: 1px solid ${red};
      }
    `};
`;

const Wrapper = styled.div`
  display: inline-block;
  white-space: nowrap;

  ${/* sc-selector */ Input}:first-of-type {
    margin-left: 0;
  }

  ${/* sc-selector */ Input}:last-of-type {
    margin-right: 0;
  }
`;

class PinInput extends Component {
  static propTypes = {
    /** Array of 4 pins values */
    pins: arrayOf(string),
    /** Disable the input fields */
    disabled: bool,
    /** Error message of the element */
    error: string,
    /**
     * Callback function, to be executed when user typed number in the input fields
     *
     * @param {string} pins 4 digit pins as a `string`
     */
    onChange: func,
    /**
     * Callback function, to be executed when user pasted from clipboard to the input fields
     *
     * @param {ClipboardEvent} event https://developer.mozilla.org/en-US/docs/Web/Events/paste
     */
    onPaste: func,
    /** Size of the input fields */
    size: oneOf(['large', 'small']),
    /** @deprecated Please use `size` */
    variant: string, // TODO: `variant` is deprecated
  };

  static defaultProps = {
    pins: ['', '', '', ''],
    disabled: false,
    error: null,
    onChange: noop,
    onPaste: e => e.preventDefault(),
    size: 'large',
    variant: null,
  };

  state = {
    pins: this.props.pins,
  };

  componentDidMount() {
    if (this.props.variant) {
      // eslint-disable-next-line no-console
      console.warn(
        '[PinInput] prop `variant` is deprecated. Please check documentation for better' +
          ' alternative.'
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error) {
      this.lastInput.focus();
      this.lastInput.selectionStart = this.lastInput.selectionEnd;
    }
  }

  handleKeyDown = e => {
    const keyCode = e.keyCode || e.which;
    if (
      e.target.name !== '0' &&
      e.target.selectionStart === 0 &&
      keyCode === 8
    ) {
      e.target.previousSibling.focus();
    }
  };

  handleKeyPress = e => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\D/.test(keyValue)) {
      e.preventDefault();
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    const index = parseInt(name, 10);
    const newPins = Array.from(this.state.pins);
    newPins[index] = value;
    this.setState({ pins: newPins });

    if (index < 3 && value !== '') {
      e.target.nextSibling.focus();
      e.target.nextSibling.select();
    }

    this.props.onChange(newPins.join(''));
  };

  render() {
    const { disabled, error, size, variant, onPaste } = this.props;
    const pinBoxes = [...Array(4)].map((e, i) => (
      <Input
        maxLength="1"
        key={i.toString()}
        error={error}
        disabled={disabled}
        name={i}
        value={this.state.pins[i] || ''}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        onKeyPress={this.handleKeyPress}
        onPaste={onPaste}
        autoComplete="new-password"
        size={variant || size} // TODO: `variant` is deprecated
        pattern="\d*"
        innerRef={input => {
          this.lastInput = input;
        }}
        type="number"
        autoFocus={i === 0}
      />
    ));

    return (
      <Wrapper>
        {pinBoxes}
        <ErrorMessage error={error} />
      </Wrapper>
    );
  }
}

export default PinInput;
