import React, { Component, Fragment, forwardRef } from 'react';
import { bool, func, string, object, oneOfType } from 'prop-types';

import noop from 'utils/noop';
import compose from 'utils/compose';
import withAnimatedContainer from 'hoc/withAnimatedContainer';
import withAutoFocus from 'hoc/withAutoFocus';
import withErrorMessage from 'hoc/withErrorMessage';
import withOnClickSelect from 'hoc/withOnClickSelect';
import withOnClickToEnd from 'hoc/withOnClickToEnd';

import TextInput from './TextInput';
import PeekButton from './PeekButton';

class Input extends Component {
  static propTypes = {
    innerRef: oneOfType([func, object]),
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
    withAutoFocus: bool,
    withOnClickSelect: bool,
    withOnClickToEnd: bool,
  };

  static defaultProps = {
    innerRef: null,
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
    withAutoFocus: false,
    withOnClickSelect: false,
    withOnClickToEnd: false,
  };

  static getDerivedStateFromProps(props, state) {
    const { value } = props;
    return { ...state, value };
  }

  state = {
    value: this.props.value,
    peekPassword: false,
  };

  onClick = e => {
    this.props.onClick(e);
  };

  onFocus = e => {
    this.props.onFocus(e);
  };

  onBlur = e => {
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
    const { value, peekPassword } = this.state;
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
      withAutoFocus: autofocus,
      withOnClickSelect: onClickSelect,
      withOnClickToEnd: onClickToEnd,
      ...remainProps
    } = this.props;

    return (
      <Fragment>
        <TextInput
          ref={innerRef}
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
      </Fragment>
    );
  }
}

const InputWithRef = forwardRef((props, ref) => (
  <Input innerRef={ref} {...props} />
));

const InputWithCondition = forwardRef((props, ref) => {
  const hocs = [withErrorMessage, withAnimatedContainer];
  if (props.withAutoFocus) hocs.push(withAutoFocus);
  if (props.withOnClickSelect) hocs.push(withOnClickSelect);
  if (props.withOnClickToEnd) hocs.push(withOnClickToEnd);
  const Comp = compose(...hocs)(InputWithRef);
  return <Comp ref={ref} {...props} />;
});

export default InputWithCondition;
