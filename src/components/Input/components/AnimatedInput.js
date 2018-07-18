import React, { Component, Fragment, forwardRef } from 'react';
import { bool, func, string, object, oneOfType } from 'prop-types';
import { branch, compose, toClass } from 'recompose';

import withAnimatedContainer from 'hoc/withAnimatedContainer';
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
    onClickSelect: bool,
    onClickToEnd: bool,
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
    onClickSelect: false,
    onClickToEnd: false,
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
      onClickSelect,
      onClickToEnd,
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
  branch(props => props.onClickToEnd, withOnClickToEnd),
  toClass,
  branch(props => props.onClickSelect, withOnClickSelect),
  withErrorMessage,
  withAnimatedContainer
)(Input);

const EnhancedCompWithRef = forwardRef((props, ref) => (
  <EnhancedComp {...props} innerRef={ref} />
));

export default EnhancedCompWithRef;
