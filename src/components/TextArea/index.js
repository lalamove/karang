import React, { Component, forwardRef } from 'react';
import {
  number,
  string,
  func,
  shape,
  bool,
  oneOfType,
  object,
} from 'prop-types';
import styled, { css } from 'styled-components';

import noop from 'utils/noop';
import { silver } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';
import TextAreaComp from './components/TextArea';
import AnimatedBorder from 'components/AnimatedBorder';
import ErrorMessage from 'components/ErrorMessage';

const Wrapper = styled.div`
  display: inline-block;
`;

const SCAnimatedBorder = styled(AnimatedBorder)`
  flex-direction: column;
  padding: 1em;
  box-sizing: border-box;
  > label {
    top: 1.5em;
    ${({ focused, dirty, error }) =>
      (focused || dirty || error) &&
      css`
        top: 0;
      `}
`;

const CountMessage = styled.div`
  padding-top: 0.5em;
  color: ${silver};
  font-family: ${primaryFonts};
  font-size: ${fontSize.small};
`;

// TODO: `characterLimitMsgGenerator`, `exceedLimitMsgGenerator` are deprecated
const characterLimitMsgFunc = charactersLeft =>
  `Characters left: ${charactersLeft}`;

const exceedLimitMsgFunc = excessCharacters =>
  `Excess characters: ${excessCharacters}`;

class TextArea extends Component {
  static propTypes = {
    forwardedRef: oneOfType([func, object]),
    maxLength: number,
    allowExceed: bool,
    onChange: func,
    onFocus: func,
    onBlur: func,
    name: string,
    label: string,
    error: string,
    limitMsg: string,
    exceedLimitMsg: string,
    style: shape({}),
    className: string,
    value: string,
    defaultValue: string,
    readOnly: bool,
    // TODO: `disableForceLimit`, `characterLimitMsgGenerator`,
    // `exceedLimitMsgGenerator` are deprecated
    disableForceLimit: bool,
    characterLimitMsgGenerator: func,
    exceedLimitMsgGenerator: func,
  };

  static defaultProps = {
    forwardedRef: null,
    maxLength: null,
    allowExceed: false,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    name: null,
    label: null,
    error: null,
    limitMsg: 'Characters left: {{charactersLeft}}',
    exceedLimitMsg: 'Exceed characters: {{charactersLeft}}',
    style: null,
    className: null,
    value: null,
    defaultValue: null,
    readOnly: false,
    // TODO: `disableForceLimit`, `characterLimitMsgGenerator`,
    // `exceedLimitMsgGenerator` are deprecated
    disableForceLimit: false,
    characterLimitMsgGenerator: characterLimitMsgFunc,
    exceedLimitMsgGenerator: exceedLimitMsgFunc,
  };

  static getDerivedStateFromProps({ onChange, value }) {
    if (onChange !== noop) {
      return { value: value || '' };
    }
    return null;
  }

  state = {
    focused: false,
    value: this.props.value || this.props.defaultValue || '',
  };

  componentDidMount() {
    const { value, readOnly, onChange } = this.props;
    if ((value || value === '') && onChange === noop && !readOnly) {
      console.error(
        '[TextArea] You provided a `value` prop to a form field without an `onChange` handler.' +
          '\nThis will render a read-only field. If the field should be mutable use' +
          ' `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
      );
    }
  }

  onChange = e => {
    const { value, defaultValue, onChange } = this.props;
    if ((value || value === '') && !defaultValue && onChange === noop) {
      return;
    }
    this.setState({ value: e.target.value });
    this.props.onChange(e);
  };

  onFocus = e => {
    this.setState({ focused: true });
    this.props.onFocus(e);
  };

  onBlur = e => {
    this.setState({ focused: false });
    this.props.onBlur(e);
  };

  render() {
    const {
      name,
      label,
      error,
      maxLength,
      style,
      className,
      allowExceed,
      readOnly,
      value: _value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      forwardedRef,
      // TODO: `disableForceLimit`, `characterLimitMsgGenerator`,
      // `exceedLimitMsgGenerator` are deprecated
      disableForceLimit,
      characterLimitMsgGenerator,
      exceedLimitMsgGenerator,
      ...remainProps
    } = this.props;
    let { limitMsg, exceedLimitMsg } = this.props;
    const { focused, value } = this.state;
    const count = value.length;
    const charactersLeft = maxLength - count;

    // TODO: `characterLimitMsgGenerator`, `exceedLimitMsgGenerator` are deprecated
    if (characterLimitMsgGenerator !== characterLimitMsgFunc) {
      limitMsg = characterLimitMsgGenerator(charactersLeft);
    }

    if (exceedLimitMsgGenerator !== exceedLimitMsgFunc) {
      exceedLimitMsg = exceedLimitMsgGenerator(-charactersLeft);
    }

    const message = charactersLeft >= 0 ? limitMsg : exceedLimitMsg;

    return (
      <Wrapper>
        <SCAnimatedBorder
          name={name}
          label={label}
          dirty={value.length > 0}
          error={error !== null && error.length > 0}
          focused={focused}
          style={style}
          className={className}
        >
          <TextAreaComp
            name={name}
            label={label}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            maxLength={
              !(disableForceLimit || allowExceed) ? maxLength : undefined
            }
            value={value}
            readOnly={readOnly}
            {...remainProps}
            ref={forwardedRef}
          />
          {maxLength && (
            <CountMessage>
              {message
                .replace('{{charactersLeft}}', Math.abs(charactersLeft))
                .replace('{{count}}', count)}
            </CountMessage>
          )}
        </SCAnimatedBorder>
        <ErrorMessage error={error} />
      </Wrapper>
    );
  }
}

const Comp = forwardRef(({ innerRef, ...remainProps }, ref) => (
  <TextArea forwardedRef={ref} {...remainProps} />
));

export default Comp;
