import React, { Component, Fragment } from 'react'; // forwardRef
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';

import AnimatedBorder from 'components/AnimatedBorder';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';
import Spinner from 'components/Spinner';
import SuccessIcon from 'components/Icon/icons/alert/success';
import { mountainMeadow } from 'styles/colors';
import noop from 'utils/noop';
import TextInput from './TextInput';

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1em;

  & > button:first-of-type {
    margin-right: 0.5em;
  }
`;

class EditableInput extends Component {
  static propTypes = {
    /** Label of the component */
    label: string,
    /** Error message of the component */
    error: string,
    /** Loading state of the component, show spinner if `true` */
    isLoading: bool,
    /** Success state of the component, show successful icon if `true` */
    isSuccess: bool,
    /** Text of save button */
    saveLabel: string,
    /** Text of cancel button */
    cancelLabel: string,
    /** Initial input content value, use it if you want to leave the component
     *  [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) */
    defaultValue: string,
    /** Input content value */
    value: string,
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
    /**
     * Callback function, to be executed when user type in input field
     *
     * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
     */
    onChange: func,
    /**
     * Callback function, to be executed when user focus on input field
     *
     * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
     */
    onFocus: func,
    /**
     * Callback function, to be executed when user blur on input field
     *
     * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
     */
    onBlur: func,
  };

  static defaultProps = {
    label: null,
    error: null,
    isLoading: false,
    isSuccess: false,
    saveLabel: 'Save',
    cancelLabel: 'Cancel',
    defaultValue: null,
    value: null,
    onSave: noop,
    onCancel: noop,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
  };

  state = {
    oldValue: this.props.defaultValue || this.props.value,
    currentValue: this.props.defaultValue || this.props.value,
    isDirty: false,
    isFocused: false,
  };

  handleSave = e => {
    const { currentValue } = this.state;
    this.setState({ isDirty: false, oldValue: currentValue }, () =>
      this.props.onSave(e)
    );
  };

  handleCancel = e => {
    const { oldValue } = this.state;
    this.setState({ isDirty: false, currentValue: oldValue }, () =>
      this.props.onCancel(e)
    );
  };

  handleChange = e => {
    const currentValue = e.target.value;
    const { oldValue } = this.state;
    this.setState({
      isDirty: currentValue !== oldValue,
      currentValue,
    });
    this.props.onChange(e);
  };

  handleFocus = e => {
    this.setState({ isFocused: true });
    this.props.onFocus(e);
  };

  handleBlur = e => {
    this.setState({ isFocused: false });
    this.props.onBlur(e);
  };

  render() {
    const { isDirty, isFocused, currentValue } = this.state;
    const {
      label,
      error,
      saveLabel,
      cancelLabel,
      isLoading,
      isSuccess,
      onFocus,
      onBlur,
      onChange,
      onSave,
      onCancel,
      value,
      defaultValue,
      ...remainProps
    } = this.props;
    return (
      <Wrapper>
        <AnimatedBorder
          label={label}
          dirty={!!currentValue}
          error={!!error}
          focused={isFocused}
        >
          <TextInput
            label={label}
            value={currentValue}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            disabled={isLoading}
            {...remainProps}
          />
          <ButtonGroup>
            {isDirty && !isLoading && (
              <Fragment>
                <Button onClick={this.handleCancel} variant="link">
                  {cancelLabel}
                </Button>
                <Button onClick={this.handleSave} variant="primary" solid>
                  {saveLabel}
                </Button>
              </Fragment>
            )}
            {isLoading && <Spinner />}
            {isSuccess && <SuccessIcon color={mountainMeadow.main} />}
          </ButtonGroup>
        </AnimatedBorder>
        <ErrorMessage error={error} />
      </Wrapper>
    );
  }
}

export default EditableInput;
