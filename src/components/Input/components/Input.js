import React, { PureComponent, Fragment, forwardRef } from 'react';
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

class Input extends PureComponent {
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
    masked: bool,
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
    masked: true,
  };

  state = {
    masked: this.props.masked,
  };

  componentDidMount() {
    if (this.props.type !== 'password' && !this.props.masked) {
      console.warn(
        `Trying to set masked is false when type is not password. Only set masked when type is password.`
      );
    }
  }

  changePeekStatus = () => {
    this.setState(prevState => ({
      masked: !prevState.masked,
    }));
  };

  render() {
    const { masked } = this.state;
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
          type={type === 'password' && !masked ? 'text' : type}
          name={name}
          label={label}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...remainProps}
          innerRef={innerRef}
        />
        {type === 'password' && (
          <PeekButton active={!masked} onClick={this.changePeekStatus} />
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
