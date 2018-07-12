import React, { PureComponent, Fragment } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import { red, orange, offWhite } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';
import Placeholder from './Placeholder';
import TextInput from './TextInput';
import PeekButton from './PeekButton';
import ErrorMessage from './ErrorMessage';

const Container = styled.div`
  font-family: ${primaryFonts};
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
  border: 1px solid ${offWhite};
  position: relative;
  text-align: left;

  ${({ focused }) =>
    focused &&
    `
    border: 1px solid ${orange};
    `};

  ${({ error }) =>
    error &&
    `
    border: 1px solid ${red};
    `};
`;

class Input extends PureComponent {
  static propTypes = {
    innerRef: func,
    type: string,
    name: string.isRequired,
    placeholder: string,
    value: string,
    error: string,
    autoComplete: string,
    onClick: func,
    onFocus: func,
    onBlur: func,
    onChange: func,
  };

  static defaultProps = {
    innerRef: noop,
    type: 'text',
    placeholder: '',
    value: '',
    error: null,
    // autocomplete=off is ignored on non-login INPUT elements
    // https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164
    autoComplete: 'new-password',
    onClick: noop,
    onFocus: noop,
    onBlur: noop,
    onChange: noop,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return {
        ...state,
        value: props.value,
      };
    }
    return state;
  }

  state = {
    focused: false,
    value: this.props.value,
    peekPassword: false,
  };

  onClick = e => {
    this.props.onClick(e);
  };

  onFocus = e => {
    this.setState({ focused: true });
    this.props.onFocus(e);
  };

  onBlur = e => {
    this.setState({ focused: false });
    this.props.onBlur(e);
  };

  onChange = e => {
    const {
      target: { value },
    } = e;
    this.setState({ value });
    this.props.onChange(e);
  };

  changePeekStatus = () => {
    this.setState(prevState => ({
      peekPassword: !prevState.peekPassword,
    }));
  };

  render() {
    const { focused, value, peekPassword } = this.state;
    const {
      innerRef,
      type,
      name,
      placeholder,
      autoComplete,
      error,
      value: defaultValue,
      onClick,
      onFocus,
      onBlur,
      onChange,
      ...remainProps
    } = this.props;
    return (
      <Fragment>
        <Container focused={focused} error={error && error.length > 0}>
          <Placeholder
            focused={focused}
            dirty={value.length > 0}
            error={error && error.length > 0}
            title={placeholder}
          />
          <TextInput
            innerRef={innerRef}
            type={peekPassword ? 'text' : type}
            name={name}
            value={value}
            autoComplete={autoComplete}
            onClick={this.onClick}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            {...remainProps}
          />
          {type === 'password' && (
            <PeekButton active={peekPassword} onClick={this.changePeekStatus} />
          )}
        </Container>
        {error && error.length > 0 && <ErrorMessage message={error} />}
      </Fragment>
    );
  }
}

export default Input;
