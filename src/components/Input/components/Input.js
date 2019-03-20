import React, { Component, forwardRef } from 'react';
import { bool, func, string, object, oneOfType, shape } from 'prop-types';
import styled, { css } from 'styled-components';

import AnimatedBorder from 'components/AnimatedBorder';
import RawErrorMsg from 'components/ErrorMessage';

import withSelectAll from 'hoc/withSelectAll';
import withCursorEnd from 'hoc/withCursorEnd';
import noop from 'utils/noop';
import compose from 'utils/compose';
import { GROUND } from 'styles/zIndex';

import TextInput from './TextInput';
import PeekButton from './PeekButton';

const SCTextInput = styled(TextInput)`
  &::-ms-reveal {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  ${({ error }) =>
    error &&
    css`
      padding-bottom: 2em;
    `};
`;

const ErrorMessage = styled(RawErrorMsg)`
  position: absolute;
  z-index: ${GROUND + 1};
  right: 0;
  left: 0;
`;

const propTypes = {
  /** @ignore */
  forwardedRef: oneOfType([func, object]),
  /** @ignore */
  style: shape({}),
  /** @ignore */
  className: string,
  /** Type of the component, will show the peek button when `type` is `password` */
  type: string,
  /** Name of the component */
  name: string,
  /** Label of the component */
  label: string,
  /** Error message of the component */
  error: string,
  /** @ignore */
  autoComplete: string,
  /** Select all when user click on the input field. Should not be used together with `cursorEnd` */
  selectAll: bool,
  /** Move the cursor to the end of value when user click on the input field. Should not be used
   *  together with `selectAll` */
  cursorEnd: bool,
  /** Show the password by default if it is `false`, only effective when `type` is `password` */
  masked: bool,
  /**
   * Callback function, to be executed when user focus on input field
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onFocus: func,
  /**
   * Callback function, to be executed when user blur on input field
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onBlur: func,
};

const defaultProps = {
  forwardedRef: null,
  style: null,
  className: null,
  type: 'text',
  name: null,
  label: null,
  error: null,
  // autocomplete=off is ignored on non-login INPUT elements
  // https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164
  autoComplete: 'new-password',
  selectAll: false,
  cursorEnd: false,
  masked: true,
  onFocus: noop,
  onBlur: noop,
};

class Comp extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  static getDerivedStateFromProps({ value, defaultValue }) {
    return { dirty: !!(value || defaultValue) };
  }

  state = {
    focused: false,
    dirty: false,
    masked: this.props.masked, // eslint-disable-line react/destructuring-assignment
  };

  componentDidMount() {
    // TODO: warn if placeholder & label exist at same time
    const { type, masked, selectAll, cursorEnd } = this.props;
    if (type !== 'password' && !masked) {
      // eslint-disable-next-line no-console
      console.warn(
        '[Input] Trying to set prop `masked` is `false` when `type` is not `password`. Only set' +
          ' `masked` is `false` when `type` is `password`.'
      );
    }
    if (selectAll && cursorEnd) {
      // eslint-disable-next-line no-console
      console.warn(
        '[Input] Trying to set props `selectAll` and `cursorEnd` as `true` at same time.' +
          ' Only set either one is `true`.'
      );
    }
  }

  onFocus = e => {
    const { onFocus } = this.props;
    this.setState({ focused: true });
    onFocus(e);
  };

  onBlur = e => {
    const { onBlur } = this.props;
    this.setState({ focused: false });
    onBlur(e);
  };

  toggleMasked = () => {
    this.setState(prevState => ({
      masked: !prevState.masked,
    }));
  };

  render() {
    const { dirty, focused, masked } = this.state;
    const {
      forwardedRef,
      style,
      className,
      type,
      name,
      label,
      autoComplete,
      error,
      onFocus,
      onBlur,
      selectAll,
      cursorEnd,
      ...remainProps
    } = this.props;

    return (
      <Wrapper style={style} className={className} error={error}>
        <AnimatedBorder
          name={name}
          label={label}
          dirty={dirty}
          error={error !== null && error.length > 0}
          focused={focused}
        >
          <SCTextInput
            type={type === 'password' && !masked ? 'text' : type}
            name={name}
            label={label}
            autoComplete={autoComplete}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            {...remainProps}
            innerRef={forwardedRef}
          />
          {type === 'password' && (
            <PeekButton active={!masked} onClick={this.toggleMasked} />
          )}
        </AnimatedBorder>
        <ErrorMessage error={error} />
      </Wrapper>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
const InputComp = forwardRef((props, ref) => (
  <Comp {...props} forwardedRef={ref} />
));

const Input = compose(
  withSelectAll,
  withCursorEnd
)(InputComp);

// Ugly fix for React Styleguidist as it cannot recognize forwardRef
// const Input = ({ forwardedRef, ...props }) => <InputComp {...props} />;
Input.displayName = 'Input';
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
