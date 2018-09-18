import React, { Component, forwardRef } from 'react';
import { bool, func, string, object, oneOfType, shape } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import compose from 'utils/compose';
import AnimatedBorder from 'components/AnimatedBorder';
import ErrorMessage from 'components/ErrorMessage';
import withSelectAll from 'hoc/withSelectAll';
import withCursorEnd from 'hoc/withCursorEnd';
import TextInput from './TextInput';
import PeekButton from './PeekButton';

const SCTextInput = styled(TextInput)`
  &::-ms-reveal {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
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
  /** Select all when user click on the input field */
  selectAll: bool,
  /** Move the cursor to the end of value when user click on the input field */
  cursorEnd: bool,
  /** Show the password by default if it is `false`, only effective when `type` is `password` */
  masked: bool,
  /**
   * Callback function, to be executed when user focus on input field
   *
   * @param {Event} event https://developer.mozilla.org/en-US/docs/Web/API/Event
   */
  onFocus: func,
  /**
   * Callback function, to be executed when user blur on input field
   *
   * @param {Event} event https://developer.mozilla.org/en-US/docs/Web/API/Event
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
    masked: this.props.masked,
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
    this.setState({ focused: true });
    this.props.onFocus(e);
  };

  onBlur = e => {
    this.setState({ focused: false });
    this.props.onBlur(e);
  };

  changeMaskedState = () => {
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
      <Wrapper style={style} className={className}>
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
            <PeekButton active={!masked} onClick={this.changeMaskedState} />
          )}
        </AnimatedBorder>
        <ErrorMessage error={error} />
      </Wrapper>
    );
  }
}

const CompWithRef = forwardRef((props, ref) => (
  <Comp forwardedRef={ref} {...props} />
));

const InputComp = compose(
  withSelectAll,
  withCursorEnd
)(CompWithRef);

// Ugly fix for React Styleguidist as it cannot recognize forwardRef
const Input = ({ forwardedRef, ...props }) => <InputComp {...props} />;
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
