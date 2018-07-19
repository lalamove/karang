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
import ButtonContainer from './ButtonContainer';
import NoneditableDisplay from './NoneditableDisplay';

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
    saveBtnText: string, // for EditableInput
    editBtnText: string, // for EditableInput
    cancelBtnText: string, // for EditableInput
    editableType: bool, // for EditableInput
    onSave: func, // for EditableInput
    onCancel: func, // for EditableInput
    isEditable: bool, // for EditableInput
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
    editableType: false,
    onChange: noop,
    selectAll: false,
    cursorEnd: false,
    saveBtnText: 'Save', // for EditableInput
    editBtnText: 'Edit', // for EditableInput
    cancelBtnText: 'Cancel', // for EditableInput
    onSave: noop, // for EditableInput
    onCancel: noop, // for EditableInput
    isEditable: false, // for EditableInput
  };

  // static getDerivedStateFromProps(props, state) {
  //   const { value } = props;
  //   return { ...state, value };
  // }

  state = {
    value: this.props.value,
    peekPassword: false,
    // Below is state required for EditableInput
    lastSavedValue: this.props.value,
    isEditable: this.props.isEditable,
  };

  // For EditableInput
  componentDidUpdate = (_, prevState) => {
    if (!prevState.isEditable) {
      this.focusTextInput();
    }
    // else if (prevState.isEditable && !this.state.isEditable) {
    //   this.blurEditButton();
    // }
  };



  onSaveButtonClick = e => {
    this.props.onSave(this.state.value);
    this.setState({
      isEditable: !this.state.isEditable,
    });
  };

  onEditButtonClick = e => {
    this.setState({
      isEditable: !this.state.isEditable,
      lastSavedValue: this.state.value,
    });
  };

  // For EditableInput
  onCancelButtonClick = e => {
    this.props.onCancel(this.state.lastSavedValue);
    this.setState(state => ({
      ...state,
      isEditable: !state.isEditable,
      value: state.lastSavedValue,
    }));
    e.target.blur();
  };

  onChange = e => {
    const {
      target: { value },
    } = e;
    this.setState({ value });
    this.props.onChange(e);
  };

  // for EditableInput
  getReference = node => {
    const { innerRef } = this.props;
    this.input = node;

    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(node);
      } else {
        innerRef.current = node;
      }
    }
  };

  // for EditableInput
  focusTextInput = () => {
    this.input.focus();
    this.input.setSelectionRange(
      this.input.value.length,
      this.input.value.length
    );
  };

  // for EditableInput
  // blurEditButton = () => {
  //   this.editButton.blur();
  // };

  changePeekStatus = () => {
    this.setState(prevState => ({
      peekPassword: !prevState.peekPassword,
    }));
  };

  render() {
    const { value, peekPassword, isEditable, lastSavedValue } = this.state;
    const {
      innerRef,
      type,
      name,
      autoComplete,
      placeholder,
      error,
      value: defaultValue,
      saveBtnText, // for EditableInput
      editBtnText, // for EditableInput
      cancelBtnText, // for EditableInput
      editableType, // for EditableInput
      onChange,
      selectAll,
      cursorEnd,
      ...remainProps
    } = this.props;

    return (
      <Fragment>
        {!editableType || (editableType && isEditable) ? (
          <TextInput
            ref={this.getReference}
            type={peekPassword ? 'text' : type}
            name={name}
            value={value}
            autoComplete={autoComplete}
            onChange={this.onChange}
            {...remainProps}
          />
        ) : (
          <NoneditableDisplay value={lastSavedValue} {...remainProps} />
        )}

        {type === 'password' && (
          <PeekButton active={peekPassword} onClick={this.changePeekStatus} />
        )}
        {editableType && (
          <ButtonContainer
            isEditable={isEditable}
            saveBtnText={saveBtnText}
            cancelBtnText={cancelBtnText}
            editBtnText={editBtnText}
            onSaveButtonClick={this.onSaveButtonClick}
            onEditButtonClick={this.onEditButtonClick}
            onCancelButtonClick={this.onCancelButtonClick}
            innerRef={node => {
              this.editButton = node;
            }}
          />
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
