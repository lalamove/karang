import React, { Component, Fragment, forwardRef } from 'react';
import { bool, func, string, object, oneOfType } from 'prop-types';
import { branch, compose, toClass } from 'recompose';

import noop from 'utils/noop';
import withAnimatedContainer from 'hoc/withAnimatedContainer'; // eslint-disable-line import/no-named-as-default, import/no-named-as-default-member
import withErrorMessage from 'hoc/withErrorMessage'; // eslint-disable-line import/no-named-as-default, import/no-named-as-default-member
import withSelectAll from 'hoc/withSelectAll';
import withCursorEnd from 'hoc/withCursorEnd';

import TextInput from './TextInput';
import PeekButton from './PeekButton';
// import ButtonContainer from './ButtonContainer';
// import NoneditableDisplay from './NoneditableDisplay';

class Input extends Component {
  static propTypes = {
    innerRef: oneOfType([func, object]),
    type: string,
    name: string.isRequired,
    value: string,
    error: string,
    placeholder: string,
    autoComplete: string,
    onChange: func,
    selectAll: bool,
    cursorEnd: bool,
  };

  static defaultProps = {
    innerRef: null,
    type: 'text',
    value: '',
    error: null,
    placeholder: '',
    // autocomplete=off is ignored on non-login INPUT elements
    // https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164
    autoComplete: 'new-password',
    onChange: noop,
    selectAll: false,
    cursorEnd: false,
  };

  // static getDerivedStateFromProps(props, state) {
  //   const { value } = props;
  //   return { ...state, value };
  // }

  state = {
    value: this.props.value,
    peekPassword: false,
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
      autoComplete,
      placeholder,
      error,
      value: defaultValue,
      onChange,
      selectAll,
      cursorEnd,
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

const EnhancedComp = compose(
  branch(props => props.selectAll, withSelectAll),
  toClass,
  branch(props => props.cursorEnd, withCursorEnd),
  withErrorMessage,
  withAnimatedContainer
)(Input);

const EnhancedCompWithRef = forwardRef((props, ref) => (
  <EnhancedComp {...props} innerRef={ref} />
));

export default EnhancedCompWithRef;
