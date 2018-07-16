import React, { Component, forwardRef } from 'react';
import { func, string, bool } from 'prop-types';
import styled from 'styled-components';
import noop from 'utils/noop';
import Button from 'components/Button/index';
import AnimatedInput from 'components/Input/components/AnimatedInput';
import { orange } from 'styles/colors';

const EditableInputContainer = styled.div`
  display: inline-block;
  position: relative;
  min-width: 350px;
`;

const StyledAnimatedInput = styled(AnimatedInput)`
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 96%;
  padding-right: ${({ isEditable }) =>
    isEditable ? 'calc(6% + 160px)' : 'calc(3% + 80px)'};
`;

const StyledButton = styled(Button)`
  position: absolute;
  width: 80px;
  height: 32px;
  top: 50%;
  transform: translateY(-50%);
  right: 3%;
`;

const CancelButton = styled(StyledButton)`
  right: calc(6% + 80px);
  border: none;
  color: ${orange};
`;

class EditableInput extends Component {
  static propTypes = {
    name: string.isRequired,
    value: string,
    onValueSave: func,
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
  };
  static defaultProps = {
    value: '',
    onValueSave: noop,
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
      this.props.onValueSave(this.state.value);
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
      placeholder, // placeholder prop is unused, but declared s.t. it doesn't fall under ...remainProps
      // in fact, we use 'placeholderState' variable instead of 'placeholder'
      autoComplete,
      error,
      onClick,
      onFocus,
      onBlur,
      onChange,
      ...remainProps
    } = this.props;
    return (
      <EditableInputContainer {...remainProps}>
        <StyledAnimatedInput
          isEditable={isEditable}
          innerRef={node => {
            this.input = node;
            if (innerRef !== null && node !== null) innerRef(node);
            // innerRef doesn't work as expected:
            // 'innerRef' is first defined as a null function and only then gets redefined as a passed function.
            // Similarly, 'node' is first defined as null and only then takes the actual node value.
            // TODO investigate.
          }}
          disabled={!isEditable}
          placeholder={placeholderState}
          name={name}
          value={value}
          autoComplete={autoComplete}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.onInputChange}
        />
        <StyledButton
          onClick={this.onStyledButtonClick}
          variant={isEditable ? 'outline' : null}
          innerRef={node => {
            this.editButton = node;
          }}
        >
          {isEditable ? 'Save' : 'Edit'}
        </StyledButton>
        {isEditable ? (
          <CancelButton onClick={this.onCancelButtonClick}>Cancel</CancelButton>
        ) : null}
      </EditableInputContainer>
    );
  }
}

export default forwardRef((props, ref) => (
  <EditableInput innerRef={ref} {...props} />
));
