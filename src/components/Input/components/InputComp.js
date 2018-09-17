import React, { Component, forwardRef } from 'react';
import { bool, func, string, object, oneOfType } from 'prop-types';
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
  forwardedRef: oneOfType([func, object]),
  type: string,
  name: string,
  label: string,
  error: string,
  autoComplete: string,
  selectAll: bool,
  cursorEnd: bool,
  masked: bool,
  onFocus: func,
  onBlur: func,
};

const defaultProps = {
  forwardedRef: null,
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
    if (this.props.type !== 'password' && !this.props.masked) {
      // eslint-disable-next-line no-console
      console.warn(
        `Trying to set masked is false when type is not password. Only set masked when type is password.`
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
      <Wrapper>
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
const Input = props => <InputComp {...props} />;
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
