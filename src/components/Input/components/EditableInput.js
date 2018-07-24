import React, { Component, forwardRef } from 'react';
import { func, string, bool, shape } from 'prop-types';
import styled from 'styled-components';
import noop from 'utils/noop';
// import withAnimatedContainer from 'hoc/withAnimatedContainer/index';
import { offWhite, orange } from 'styles/colors';

// import Button from 'components/Button/index';
import Input from 'components/Input/components/Input'; // eslint-disable-line import/no-named-as-default, import/no-named-as-default-member
import ButtonContainer from './ButtonContainer';
import NoneditableDisplay from './NoneditableDisplay';

const EditableInputContainer = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid ${offWhite};
  &:focus-within {
    border-color: ${orange};
  }
  [class^='withAnimatedContainer__Container'] {
    border-color: transparent;
  }
`;

const StyledAnimatedInput = styled(Input)`
  &:disabled {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

class EditableInput extends Component {
  static propTypes = {
    value: string,
    isEditable: bool,
    innerRef: func,
    type: string,
    label: string,
    error: string,
    onChange: func,
    onSave: func,
    onCancel: func,
    saveBtnText: string,
    editBtnText: string,
    cancelBtnText: string,
    style: shape({}),
    className: string,
  };

  static defaultProps = {
    value: '',
    isEditable: false,
    innerRef: noop,
    type: 'text',
    label: '',
    error: null,
    onChange: noop,
    onSave: noop,
    onCancel: noop,
    saveBtnText: 'Save',
    editBtnText: 'Edit',
    cancelBtnText: 'Cancel',
    style: {},
    className: '',
  };

  state = {
    value: this.props.value,
    lastSavedValue: this.props.value,
    isEditable: this.props.isEditable,
  };

  componentDidUpdate = (_, prevState) => {
    if (!prevState.isEditable) {
      this.focusTextInput();
    }
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

  onCancelButtonClick = e => {
    this.props.onCancel(this.state.lastSavedValue);
    this.setState({
      value: this.state.lastSavedValue,
      isEditable: !this.state.isEditable,
    });
    e.target.blur();
  };

  onInputChange = e => {
    const {
      target: { value },
    } = e;
    this.props.onChange(e);
    this.setState({ value });
  };

  getReference = node => {
    const { innerRef } = this.props;
    this.input = node;
    console.log('inside getReference ', node);
    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(node);
      } else {
        innerRef.current = node;
      }
    }
  };

  focusTextInput = () => {
    this.input.focus();
    this.input.setSelectionRange(
      this.input.value.length,
      this.input.value.length
    );
  };

  render() {
    const { isEditable, value } = this.state;
    const {
      innerRef,
      type,
      label,
      error,
      onChange,
      value: _,
      onCancel,
      onSave,
      saveBtnText,
      editBtnText,
      cancelBtnText,
      style,
      className,
      ...remainProps
    } = this.props;
    return (
      <EditableInputContainer style={style} className={className}>
        {isEditable ? (
          <StyledAnimatedInput
            isEditable={isEditable}
            innerRef={this.getReference}
            label={isEditable ? label : ''}
            value={value}
            onChange={this.onInputChange}
            {...remainProps}
          />
        ) : (
          <NoneditableDisplay value={value} {...remainProps} />
        )}
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
      </EditableInputContainer>
    );
  }
}

export default forwardRef((props, ref) => (
  <EditableInput innerRef={ref} {...props} />
));
