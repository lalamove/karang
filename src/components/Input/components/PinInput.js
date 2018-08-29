import React, { Component } from 'react';
import { arrayOf, bool, func, string, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';

import noop from 'utils/noop';
import withErrorMessage from 'hoc/withErrorMessage';
import { red, orange, offWhite } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const Container = styled.div`
  display: inline-block;
`;

const Input = styled.input`
  border: 1px solid ${offWhite};
  caret-color: ${orange};
  font-family: ${primaryFonts};
  padding: 0;
  border-radius: 0;
  appearance: none;

  ${({ variant }) => {
    switch (variant) {
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
  outline: 0;
  margin: 0 8px 8px 8px;
  text-align: center;

  &:focus {
    border: 1px solid ${orange};
  }

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

class PinInput extends Component {
  static propTypes = {
    pins: arrayOf(string),
    disabled: bool,
    error: string,
    onChange: func,
    variant: oneOf(['large', 'small']),
    onPaste: func,
  };

  static defaultProps = {
    pins: ['', '', '', ''],
    disabled: false,
    error: '',
    onChange: noop,
    variant: 'large',
    onPaste: noop,
  };

  state = {
    pins: this.props.pins,
  };

  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error) {
      setTimeout(() => {
        this.lastInput.focus();
        this.lastInput.selectionStart = this.lastInput.selectionEnd;
      }, 1);
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

  handlePaste = e => {
    if (this.props.onPaste !== noop) {
      this.props.onPaste(e);
    } else {
      e.preventDefault();
    }
  };

  render() {
    const { error, disabled, variant } = this.props;
    const pinBoxes = [...Array(4)].map((e, i) => (
      <Input
        maxLength="1"
        name={i}
        value={this.state.pins[i] || ''}
        onKeyDown={this.handleKeyDown}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        autoComplete="new-password"
        autoFocus={i === 0}
        key={i.toString()}
        ref={input => {
          this.lastInput = input;
        }}
        error={error}
        disabled={disabled}
        variant={variant}
        pattern="\d*"
        onPaste={this.handlePaste}
      />
    ));

    return <div>{pinBoxes}</div>;
  }
}

const PinInputWithErrorMessage = withErrorMessage(PinInput);

const EnhancedComp = props => (
  <Container>
    <PinInputWithErrorMessage {...props} />
  </Container>
);

export default EnhancedComp;
