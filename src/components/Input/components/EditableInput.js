import React, { Component, Fragment, forwardRef } from 'react';
import { bool, func, oneOfType, object, string, shape } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import AnimatedBorder from 'components/AnimatedBorder';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';
import TextInput from './TextInput';

const Wrapper = styled.div`
  display: inline-block;
`;

const SCAnimatedBorder = styled(AnimatedBorder)`
  width: 400px;
`;

const TextDisplay = styled.div`
  width: 100%;
  height: 20px;
  line-height: 20px;
  padding: 1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  flex-shrink: 0;
`;

const SCButton = styled(Button)`
  min-width: 80px;
  height: 32px;
  margin: 0 4px;
`;

const propTypes = {
  forwardedRef: oneOfType([func, object]),
  style: shape({}),
  className: string,
  disabled: bool,
  error: string,
  label: string,
  value: string,
  defaultValue: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onSave: func,
  onCancel: func,
  saveLabel: string,
  editLabel: string,
  cancelLabel: string,
  // TODO: `saveBtnText`, `editBtnText`, `cancelBtnText`, `isEditable` are deprecated
  saveBtnText: string,
  editBtnText: string,
  cancelBtnText: string,
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
    const {
      target: { value },
    } = e;
    this.setState({
      value,
      dirty: !!value,
    });
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
          {editing ? (
            <TextInput
              label={label}
              value={value}
              onBlur={this.onBlur}
              onChange={this.onChange}
              onFocus={this.onFocus}
              {...remainProps}
              ref={this.getReference}
            />
          ) : (
            <TextDisplay>{value}</TextDisplay>
          )}
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
const EditableInput = props => <CompWithRef {...props} />;
EditableInput.propTypes = propTypes;
EditableInput.defaultProps = defaultProps;

export default EditableInput;
