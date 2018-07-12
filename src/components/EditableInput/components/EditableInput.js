import React, { Component } from 'react';
import { func, string, bool, object, PropTypes } from 'prop-types';
import styled from 'styled-components';
import noop from 'utils/noop';
import Button from './Button';
import AnimatedInput from 'components/Input/components/AnimatedInput';
// import TextInput from '../../Input/components/TextInput';
import { offWhite, orange } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';

const EditableInputContainer = styled.div`
  position: relative;
`;

// const StyledAnimatedInput = styled(AnimatedInput)`
//   -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
//   -moz-box-sizing: border-box;
//   box-sizing: border-box;
//   padding-right: calc(6% + 160px);
// `;

const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: 'pointer';
  right: 3%;
  width: 80px;
  height: 32px;
  border-radius: 2px;
  font-family: ${primaryFonts};
  ${({ isEditable }) =>
    isEditable
      ? `
    border: 1px solid ${orange};
    color: ${orange}
    `
      : `
    border: 1px solid ${offWhite};
    `};
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
    style: PropTypes.shape({}),
    // from Andrew's code
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
    style: { width: '404px' },
    // from Andrew's code
    innerRef: null,
    type: 'text',
    placeholder: '',
    error: null,
    // autocomplete=off is ignored on non-login INPUT elements
    // https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164
    autoComplete: 'new-password',
    onClick: noop,
    onFocus: noop,
    onBlur: noop,
    onChange: noop,
  };

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this)
    this.state = {
      value: props.value,
      lastSavedValue: props.value,
      isEditable: props.isEditable,
      placeholder: props.isEditable ? props.placeholder : '',
    };
  }

  componentDidUpdate = (_, prevState) => {
    if (!prevState.isEditable) this.focusTextInput();
    if (prevState.isEditable && !this.state.isEditable) this.blurEditButton();
  };

  onStyledButtonClick = e => {
    e.preventDefault();
    if (this.state.isEditable) {
      // execute callback before the input is switched to non-editable
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
    const {
      innerRef,
      type,
      name,
      style,
      value: defaultValue,
      placeholder, // a bit hacky
      autoComplete,
      error,
      onClick,
      onFocus,
      onBlur,
      onChange,
      ...remainProps
    } = this.props;
    // TODO double check innerRef
    return (
      <EditableInputContainer>
        <AnimatedInput
          style={style}
          disabled={!isEditable}
          placeholder={this.state.placeholder}
          innerRef={node => {
            this.input = node;
            () => innerRef;
          }}
          name={name}
          value={value}
          autoComplete={autoComplete}
          onClick={this.onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.onInputChange}
          {...remainProps}
        />
        <StyledButton
          onClick={this.onStyledButtonClick}
          value={isEditable ? 'Save' : 'Edit'}
          isEditable={isEditable}
          innerRef={node => {
            this.editButton = node;
          }}
        />
        {isEditable ? (
          <CancelButton value="Cancel" onClick={this.onCancelButtonClick} />
        ) : null}
      </EditableInputContainer>
    );
  }
}

export default EditableInput;
