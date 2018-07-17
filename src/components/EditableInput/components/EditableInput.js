import React, { Component, forwardRef } from 'react';
import { func, string, bool } from 'prop-types';
import styled from 'styled-components';
import noop from 'utils/noop';
import Button from 'components/Button/index';
import AnimatedInput from 'components/Input/components/AnimatedInput';
import { offWhite, orange } from 'styles/colors';

const EditableInputContainer = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid ${offWhite};
  &:focus-within {
    border-color: ${orange};
  }
`;

const StyledAnimatedInput = styled(AnimatedInput)`
  width: 100%;
  border-color: transparent;
  &:disabled {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const NoneditableDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  min-height: 22px;
  margin: 14px 9px;
  padding: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

// text-overflow: ellipsis doesn't work with flexbox
const Overflow = styled.div`
  display: block;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  min-width: 80px;
  width: auto;
  height: 32px;
  margin: 0 5px;
`;

// const CancelButton = styled(StyledButton)`
//   right: calc(6% + 80px);
//   color: ${orange};
// `;

class EditableInput extends Component {
  static propTypes = {
    name: string.isRequired,
    value: string,
    saveValue: string,
    editValue: string,
    cancelValue: string,
    isEditable: bool,
    innerRef: func,
    type: string,
    placeholder: string,
    error: string,
    autoComplete: string,
    onClick: func,
    onFocus: func,
    onBlur: func,
    onChange: func,
    onSave: func,
    onCancel: func,
  };
  static defaultProps = {
    value: '',
    saveValue: 'Save',
    editValue: 'Edit',
    cancelValue: 'Cancel',
    isEditable: true,
    innerRef: noop,
    type: 'text',
    placeholder: '',
    error: null,
    autoComplete: 'new-password',
    onClick: noop,
    onFocus: noop,
    onBlur: noop,
    onChange: noop,
    onSave: noop,
    onCancel: noop,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      lastSavedValue: props.value,
      isEditable: props.isEditable,
      placeholder: props.isEditable ? props.placeholder : '',
    };
  }

  componentDidUpdate = (_, prevState) => {
    if (!prevState.isEditable) {
      this.focusTextInput();
    } else if (prevState.isEditable && !this.state.isEditable) {
      this.blurEditButton();
    }
  };

  onStyledButtonClick = e => {
    if (this.state.isEditable) {
      // callback is executed before the input is switched to non-editable
      this.props.onSave(this.state.value);
      this.setState({
        isEditable: !this.state.isEditable,
        placeholder: '',
        lastSavedValue: this.state.value,
      });
    } else {
      this.setState({
        isEditable: !this.state.isEditable,
        placeholder: this.props.placeholder,
      });
    }
  };

  onCancelButtonClick = e => {
    this.props.onCancel(this.state.lastSavedValue);
    this.setState({
      value: this.state.lastSavedValue,
      isEditable: !this.state.isEditable,
      placeholder: '',
    });
  };

  onInputChange = e => {
    const {
      target: { value },
    } = e;
    this.props.onChange(e);
    this.setState({ value });
  };

  focusTextInput = () => {
    this.input.focus();
    this.input.setSelectionRange(
      this.input.value.length,
      this.input.value.length
    );
  };

  blurEditButton = () => {
    this.editButton.blur();
  };

  render() {
    const { isEditable, value } = this.state;
    const placeholderState = this.state.placeholder; // defined separately because 'placeholder' variable takes on a prop
    const {
      innerRef,
      type,
      name,
      value: defaultValue,
      saveValue,
      editValue,
      cancelValue,
      placeholder, // placeholder prop is unused, but declared s.t. it doesn't fall under ...remainProps
      // in fact, we use 'placeholderState' variable instead of 'placeholder'
      autoComplete,
      error,
      onClick,
      onFocus,
      onBlur,
      onChange,
      onCancel,
      onSave,
      ...remainProps
    } = this.props;
    return (
      <EditableInputContainer {...remainProps}>
        {isEditable ? (
          <StyledAnimatedInput
            isEditable={isEditable}
            innerRef={node => {
              this.input = node;
              if (innerRef !== null && node !== null) innerRef(node);
              // innerRef doesn't work as expected:
              // 'innerRef' is first defined as a null function and only then gets redefined as a passed function.
              // Similarly, 'node' is first defined as null and only then takes the actual node value.
              // TODO investigate (check createRef).
            }}
            placeholder={placeholderState}
            name={name}
            value={value}
            autoComplete={autoComplete}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={this.onInputChange}
          />
        ) : (
          <NoneditableDisplay>
            <Overflow>{this.state.lastSavedValue}</Overflow>
          </NoneditableDisplay>
        )}
        <ButtonsContainer>
          {isEditable ? (
            <StyledButton onClick={this.onCancelButtonClick} variant="link">
              {cancelValue}
            </StyledButton>
          ) : null}
          <StyledButton
            onClick={this.onStyledButtonClick}
            variant={isEditable ? 'outline' : null}
            innerRef={node => {
              this.editButton = node;
            }}
          >
            {isEditable ? saveValue : editValue}
          </StyledButton>
        </ButtonsContainer>
      </EditableInputContainer>
    );
  }
}

export default forwardRef((props, ref) => (
  <EditableInput innerRef={ref} {...props} />
));
