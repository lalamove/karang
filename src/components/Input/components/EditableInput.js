import React, { Component, Fragment, forwardRef } from 'react';
import { bool, func, oneOfType, object, string, shape } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import AnimatedBorder from 'components/AnimatedBorder';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';
import SCInput from './TextInput';

const TextInput = styled(SCInput)`
  flex: 1 1 60%;
`;

const Wrapper = styled.div`
  display: inline-block;
  max-width: 100%;
`;

const SCAnimatedBorder = styled(AnimatedBorder)`
  box-sizing: border-box;
  min-width: 16em;
  max-width: 100%;
  padding-right: 1em;
`;

const TextDisplay = styled.div`
  flex: 1 1 60%;
  overflow: hidden;
  padding: 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-right: -0.5em;
  margin-left: -0.5em;
`;

const SCButton = styled(Button)`
  margin: 0 0.5em;
`;

const propTypes = {
  /** @ignore */
  forwardedRef: oneOfType([func, object]),
  /** @ignore */
  style: shape({}),
  /** @ignore */
  className: string,
  /** Disable the input fields if it is `true` */
  disabled: bool,
  /** Error message of the component */
  error: string,
  /** Label of the component */
  label: string,
  /** Input content value */
  value: string,
  /** Initial input content value, use it if you want to leave the component
   *  [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) */
  defaultValue: string,
  /**
   * Callback function, to be executed when user blur on input field
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onBlur: func,
  /**
   * Callback function, to be executed when user type in input field
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onChange: func,
  /**
   * Callback function, to be executed when user clicked Edit button
   *
   * @param {string} value value that editing
   */
  onEdit: func,
  /**
   * Callback function, to be executed when user focus on input field
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onFocus: func,
  /**
   * Callback function, to be executed when user clicked Save button
   *
   * @param {string} value saved value
   */
  onSave: func,
  /**
   * Callback function, to be executed when user clicked Cancel button
   *
   * @param {string} value last saved value
   */
  onCancel: func,
  /** Text of save button */
  saveLabel: string,
  /** Text of edit button */
  editLabel: string,
  /** Text of cancel button */
  cancelLabel: string,
  // TODO: `saveBtnText`, `editBtnText`, `cancelBtnText`, `isEditable` are deprecated
  /** @deprecated Please use `saveLabel` */
  saveBtnText: string,
  /** @deprecated Please use `editLabel` */
  editBtnText: string,
  /** @deprecated Please use `cancelLabel` */
  cancelBtnText: string,
  /** @deprecated Please use `disabled` */
  isEditable: bool,
};

const defaultProps = {
  forwardedRef: null,
  style: null,
  className: null,
  disabled: false,
  error: null,
  label: null,
  value: null,
  defaultValue: null,
  onBlur: noop,
  onChange: noop,
  onEdit: noop,
  onFocus: noop,
  onSave: noop,
  onCancel: noop,
  saveLabel: 'Save',
  editLabel: 'Edit',
  cancelLabel: 'Cancel',
  // TODO: `saveBtnText`, `editBtnText`, `cancelBtnText`, `isEditable` are deprecated
  saveBtnText: null,
  editBtnText: null,
  cancelBtnText: null,
  isEditable: null,
};

class Comp extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    editing: this.props.isEditable || false, // TODO: `isEditable` is deprecated
    dirty: !!this.props.value,
    focused: false,
    value: this.props.value || this.props.defaultValue,
    lastSavedValue: this.props.value || this.props.defaultValue,
  };

  componentDidMount() {
    const {
      value,
      defaultValue,
      onSave,
      saveBtnText,
      editBtnText,
      cancelBtnText,
      isEditable,
    } = this.props;
    if (value && defaultValue) {
      // eslint-disable-next-line no-console
      console.warn(
        '[EditableInput] Trying to set defaultValue and value at the same time. Component can' +
          ' only be either controlled or uncontrolled.'
      );
    }
    if (!onSave) {
      // eslint-disable-next-line no-console
      console.warn(
        '[EditableInput] Missing prop `onSave`. Component become uncontrolled.'
      );
    }
    if (saveBtnText || editBtnText || cancelBtnText || isEditable) {
      // eslint-disable-next-line no-console
      console.warn(
        '[EditableInput] prop `saveBtnText`, `editBtnText`, `cancelBtnText`, `isEditable` are' +
          ' deprecated. Please check documentation for better alternative.'
      );
    }
  }

  onSaveBtnClick = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
    this.props.onSave(this.state.value);
  };

  onEditBtnClick = () => {
    const { editing, value } = this.state;
    this.setState(
      {
        editing: !editing,
        lastSavedValue: value,
      },
      () => {
        this.input.focus();
      }
    );
    this.props.onEdit(value);
  };

  onCancelBtnClick = e => {
    const { editing, lastSavedValue } = this.state;
    this.setState({
      editing: !editing,
      value: lastSavedValue,
    });
    this.props.onCancel(this.state.lastSavedValue);
    // remove focus from button
    e.target.blur();
  };

  onChange = e => {
    const { value } = e.target;

    this.setState({ value, dirty: !!value });
    this.props.onChange(e);
  };

  onFocus = e => {
    this.setState({ focused: true });
    this.props.onFocus(e);
  };

  onBlur = e => {
    this.setState({ focused: false });
    this.props.onBlur(e);
  };

  getReference = node => {
    const { forwardedRef } = this.props;
    this.input = node;

    if (forwardedRef) {
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else {
        forwardedRef.current = node;
      }
    }
  };

  render() {
    const { dirty, editing, focused, value } = this.state;
    const {
      style,
      className,
      disabled,
      label,
      error,
      value: _value,
      defaultValue: _defaultValue,
      onBlur,
      onChange,
      onCancel,
      onFocus,
      onSave,
      saveLabel,
      cancelLabel,
      editLabel,
      // TODO: `saveBtnText`, `editBtnText`, `cancelBtnText`, `isEditable` are deprecated
      saveBtnText,
      editBtnText,
      cancelBtnText,
      isEditable: _isEditable,
      ...remainProps
    } = this.props;
    return (
      <Wrapper>
        <SCAnimatedBorder
          label={label}
          dirty={dirty}
          error={error !== null && error.length > 0}
          focused={focused}
          style={style}
          className={className}
        >
          <TextInput
            // disabled={!editing}
            label={label}
            value={value}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onFocus={this.onFocus}
            {...remainProps}
            innerRef={this.getReference}
          />
          <BtnContainer>
            {editing ? (
              <Fragment>
                <SCButton onClick={this.onCancelBtnClick} variant="link">
                  {cancelBtnText || cancelLabel}
                </SCButton>
                <SCButton onClick={this.onSaveBtnClick} variant="outline">
                  {saveBtnText || saveLabel}
                </SCButton>
              </Fragment>
            ) : (
              <SCButton onClick={this.onEditBtnClick} disabled={disabled}>
                {editBtnText || editLabel}
              </SCButton>
            )}
          </BtnContainer>
        </SCAnimatedBorder>
        <ErrorMessage error={error} />
      </Wrapper>
    );
  }
}

const CompWithRef = forwardRef((props, ref) => (
  <Comp forwardedRef={ref} {...props} />
));

// Ugly fix for React Styleguidist as it cannot recognize forwardRef
const EditableInput = ({ forwardedRef, ...props }) => (
  <CompWithRef {...props} />
);
EditableInput.propTypes = propTypes;
EditableInput.defaultProps = defaultProps;

export default EditableInput;
