import React, { Component, Fragment, forwardRef } from 'react';
import { bool, func, string, object, oneOfType } from 'prop-types';
import { branch, compose, toClass } from 'recompose';

import withAnimatedContainer from 'hoc/withAnimatedContainer';
import withErrorMessage from 'hoc/withErrorMessage';
import withSelectAll from 'hoc/withSelectAll';
import withCursorEnd from 'hoc/withCursorEnd';

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
    selectAll: bool,
    cursorEnd: bool,
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
    selectAll: false,
    cursorEnd: false,
  };

  state = {
    peekPassword: false,
  };

  changePeekStatus = () => {
    this.setState(prevState => ({
      peekPassword: !prevState.peekPassword,
    }));
  };

  render() {
    const { peekPassword } = this.state;
    const {
      innerRef,
      type,
      name,
      placeholder,
      autoComplete,
      error,
      value,
      selectAll,
      cursorEnd,
      ...remainProps
    } = this.props;

    return (
      <Fragment>
        <TextInput
          type={peekPassword ? 'text' : type}
          name={name}
          value={value}
          autoComplete={autoComplete}
          {...remainProps}
          ref={innerRef}
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
