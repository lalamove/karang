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
import { nobel } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';
import AnimatedBorder from 'components/AnimatedBorder';
import ErrorMessage from 'components/ErrorMessage';
import TextAreaComp from './components/TextAreaComp';

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
  color: ${nobel.main};
  font-family: ${primaryFonts};
  font-size: ${fontSize.small};
`;

// TODO: `characterLimitMsgGenerator`, `exceedLimitMsgGenerator` are deprecated
const characterLimitMsgFunc = charactersLeft =>
  `Characters left: ${charactersLeft}`;

const exceedLimitMsgFunc = excessCharacters =>
  `Excess characters: ${excessCharacters}`;

const propTypes = {
  /** @ignore */
  forwardedRef: oneOfType([func, object]),
  /** @ignore */
  style: shape({}),
  /** @ignore */
  className: string,
  /** Characters limit of textarea */
  maxLength: number,
  /** Allow user to continue to type when the characters count over `maxLength` */
  allowExceed: bool,
  /**
   * Callback function, to be executed when user type in textarea
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onChange: func,
  /**
   * Callback function, to be executed when user focus on textarea
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onFocus: func,
  /**
   * Callback function, to be executed when user blur on textarea
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onBlur: func,
  /** Name of the component */
  name: string,
  /** Label of the component */
  label: string,
  /** Error message of the component */
  error: string,
  /** Message to be shown at the bottom of component. Use `{{charactersLeft}}` for the
   *  characters remaining, use `{{count}}` for characters count */
  limitMsg: string,
  /** Message to be shown at the bottom of component, when the characters count over
   *  `maxLength`. Use `{{charactersExceed}}` for the characters exceed count, use `{{count}}` for
   *  characters count */
  exceedLimitMsg: string,
  /** Textarea content value */
  value: string,
  /** Initial textarea content value, use it if you want to leave the component
   *  [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) */
  defaultValue: string,
  /** @ignore */
  readOnly: bool,
  // TODO: `disableForceLimit`, `characterLimitMsgGenerator`,
  // `exceedLimitMsgGenerator` are deprecated
  /** @deprecated Please use `allowExceed` */
  disableForceLimit: bool,
  /** @deprecated Please use `limitMsg` */
  characterLimitMsgGenerator: func,
  /** @deprecated Please use `exceedLimitMsg` */
  exceedLimitMsgGenerator: func,
};

const defaultProps = {
  forwardedRef: null,
  style: null,
  className: null,
  maxLength: null,
  allowExceed: false,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  name: null,
  label: null,
  error: null,
  limitMsg: 'Characters left: {{charactersLeft}}',
  exceedLimitMsg: 'Exceed characters: {{charactersExceed}}',
  value: null,
  defaultValue: null,
  readOnly: false,
  // TODO: `disableForceLimit`, `characterLimitMsgGenerator`,
  // `exceedLimitMsgGenerator` are deprecated
  disableForceLimit: false,
  characterLimitMsgGenerator: characterLimitMsgFunc,
  exceedLimitMsgGenerator: exceedLimitMsgFunc,
};

class Comp extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  static getDerivedStateFromProps({ onChange, value }) {
    if (onChange !== noop) {
      return { value: value || '' };
    }
    return null;
  }

  state = {
    focused: false,
    // eslint-disable-next-line react/destructuring-assignment
    value: this.props.value || this.props.defaultValue || '',
  };

  componentDidMount() {
    const {
      value,
      readOnly,
      onChange,
      disableForceLimit,
      characterLimitMsgGenerator,
      exceedLimitMsgGenerator,
    } = this.props;
    if ((value || value === '') && onChange === noop && !readOnly) {
      console.error(
        '[TextArea] You provided a `value` prop to a form field without an `onChange` handler.' +
          '\nThis will render a read-only field. If the field should be mutable use' +
          ' `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
      );
    }
    if (
      disableForceLimit ||
      characterLimitMsgGenerator !== characterLimitMsgFunc ||
      exceedLimitMsgGenerator !== exceedLimitMsgFunc
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        '[TextArea] prop `disableForceLimit`, `characterLimitMsgGenerator`,' +
          ' `exceedLimitMsgGenerator` are deprecated. Please check documentation for better' +
          ' alternative.'
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
                .replace('{{charactersLeft}}', charactersLeft)
                .replace(
                  '{{charactersExceed}}',
                  charactersLeft < 0 ? charactersLeft * -1 : 0
                )
                .replace('{{count}}', count)}
            </CountMessage>
          )}
        </SCAnimatedBorder>
        <ErrorMessage error={error} />
      </Wrapper>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp,react/prop-types
const CompWithRef = forwardRef(({ innerRef, ...remainProps }, ref) => (
  <Comp forwardedRef={ref} {...remainProps} />
));

// Ugly fix for React Styleguidist as it cannot recognize forwardRef
const TextArea = ({ forwardedRef, ...props }) => <CompWithRef {...props} />;
TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
