import React, { Component } from 'react';
import { arrayOf, bool, func, string, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import ErrorMessage from 'components/ErrorMessage';
import noop from 'utils/noop';
import { primary, valencia, nobel } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const Input = styled.input`
  padding: 0;
  border: 1px solid ${nobel.main};
  border-radius: 0;
  margin: 0 0.15em;
  font-family: ${primaryFonts};
  text-align: center;
  appearance: none;
  outline: 0;
  caret-color: ${primary.main};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
  }

  &:focus {
    border: 1px solid ${primary.main};
    box-shadow: 0 0 0 4px ${rgba(primary.main, 0.2)};
  }

  &::selection {
    background: ${rgba(primary.main, 0.1)};
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
      border: 1px solid ${valencia.main};
      background: ${rgba(valencia.main, 0.1)};
      color: ${valencia.main};

      &:focus {
        border: 1px solid ${valencia.main};
        box-shadow: 0 0 0 4px ${rgba(valencia.main, 0.5)};
      }

      &::selection {
        background: ${rgba(valencia.main, 0.1)};
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

const Container = styled.div`
  display: inline-block;
`;

class PinInput extends Component {
  static propTypes = {
    /** Array of 4 pins values */
    pins: arrayOf(string),
    /** Disable the edit button if it is `true` */
    disabled: bool,
    /** Error message of the component */
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
    type: string,
  };

  static defaultProps = {
    pins: ['', '', '', ''],
    disabled: false,
    error: null,
    onChange: noop,
    onPaste: e => e.preventDefault(),
    size: 'large',
    variant: null,
    type: 'text',
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

  handleChange = e => {
    const { value, name } = e.target;
    // remove values attached after delete value in ios
    const trimValue = value.replace(/^\s+|\s+$/gm, '');
    // solve issue on android browser to insert dash from the keyboard
    if (/\D/.test(trimValue)) {
      e.preventDefault();
      return;
    }

    const index = parseInt(name, 10);
    const newPins = Array.from(this.state.pins);
    newPins[index] = trimValue;
    this.setState({ pins: newPins });

    if (index < 3 && trimValue !== '') {
      e.target.nextSibling.focus();
      e.target.nextSibling.select();
    }

    this.props.onChange(newPins.join(''));
  };

  render() {
    const { disabled, error, size, variant, onPaste, type } = this.props;
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
        onPaste={onPaste}
        autoComplete="new-password"
        size={variant || size} // TODO: `variant` is deprecated
        pattern="\d*"
        innerRef={input => {
          this.lastInput = input;
        }}
        type={type}
        autoFocus={i === 0}
      />
    ));

    return (
      <Container>
        <Wrapper>{pinBoxes}</Wrapper>
        <ErrorMessage error={error} />
      </Container>
    );
  }
}

export default PinInput;
