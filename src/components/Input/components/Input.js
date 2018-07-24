import React, { Component, Fragment, forwardRef } from 'react';
import { bool, func, string, object, oneOfType } from 'prop-types';
import { branch, compose, toClass } from 'recompose';
import styled from 'styled-components';

import withAnimatedContainer from 'hoc/withAnimatedContainer';
import withErrorMessage from 'hoc/withErrorMessage';
import withSelectAll from 'hoc/withSelectAll';
import withCursorEnd from 'hoc/withCursorEnd';

import TextInput from './TextInput';
import PeekButton from './PeekButton';

const StyledTextInput = styled(TextInput)`
  &::-ms-reveal {
    display: none;
  }
`;

class Input extends Component {
  static propTypes = {
    innerRef: oneOfType([func, object]),
    type: string,
    name: string.isRequired,
    label: string,
    placeholder: string,
    error: string,
    autoComplete: string,
    selectAll: bool,
    cursorEnd: bool,
  };

  static defaultProps = {
    innerRef: null,
    type: 'text',
    label: '',
    placeholder: '',
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
      type,
      name,
      label,
      placeholder,
      autoComplete,
      error,
      selectAll,
      cursorEnd,
      innerRef,
      ...remainProps
    } = this.props;

    return (
      <Fragment>
        <StyledTextInput
          type={peekPassword ? 'text' : type}
          name={name}
          label={label}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...remainProps}
          innerRef={innerRef}
        />
        {type === 'password' && (
          <PeekButton active={peekPassword} onClick={this.changePeekStatus} />
        )}
      </Fragment>
    );
  }
}

const InputWithRef = forwardRef((props, ref) => (
  <Input {...props} innerRef={ref} />
));

const EnhancedComp = compose(
  branch(props => props.selectAll, withSelectAll),
  toClass,
  branch(props => props.cursorEnd, withCursorEnd),
  withErrorMessage,
  withAnimatedContainer
)(InputWithRef);

export default EnhancedComp;
