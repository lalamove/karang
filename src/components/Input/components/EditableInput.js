import React, { Component, Fragment, forwardRef } from 'react';
import { bool, func, string, oneOfType, object, shape } from 'prop-types';
import styled, { css } from 'styled-components';

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
  ${({ rtl }) =>
    rtl &&
    css`
      direction: rtl;
    `};
  ${({ error }) =>
    error &&
    css`
      padding-bottom: 2em;
    `};
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0em 1em;
  direction: ltr;
  &>button: first-of-type {
    margin-right: 0.5em;
  }
`;

const propTypes = {
  /** @ignore */
  forwardedRef: oneOfType([func, object]),
  /** @ignore */
  style: shape(),
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
   * Validation function, to be executed when user clicked Save button
   *
   *  @param {string} value current value
   *  @returns {bool} the validation result
   */
  validate: func,
  /**
   * Callback function, to be executed if `validate` is provided and `value` is invalid when user clicked Save button
   *
   * @param {string} value current value
   */
  onError: func,
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
  /** rtl prop added to support right-to-left  */
  rtl: bool,
};

const defaultProps = {
  forwardedRef: null,
  style: null,
  label: null,
  error: null,
  isLoading: false,
  isSuccess: false,
  saveLabel: 'Save',
  cancelLabel: 'Cancel',
  defaultValue: null,
  value: null,
  validate: () => true,
  onError: noop,
  onSave: noop,
  onCancel: noop,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  rtl: false,
};

export class EditableInput extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  state = {
    oldValue: this.props.defaultValue || this.props.value,
    currentValue: this.props.defaultValue || this.props.value,
    isDirty: false,
    isFocused: false,
  };

  handleSave = () => {
    const { currentValue } = this.state;
    const { onError, onSave, validate } = this.props;
    if (validate(currentValue)) {
      this.setState({ isDirty: false, oldValue: currentValue }, () =>
        onSave(currentValue)
      );
    } else {
      onError(currentValue);
    }
  };

  handleCancel = () => {
    const { oldValue } = this.state;
    this.setState({ isDirty: false, currentValue: oldValue }, () =>
      this.props.onCancel(oldValue)
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
      forwardedRef,
      style,
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
      rtl,
      ...remainProps
    } = this.props;
    return (
      <Wrapper style={style} rtl={rtl}>
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
            dir={rtl ? 'rtl' : 'ltr'}
            {...remainProps}
            ref={forwardedRef}
          />
          <ButtonGroup rtl={rtl}>
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

// eslint-disable-next-line react/no-multi-comp
const EditableInputWithRef = forwardRef((props, ref) => (
  <EditableInput {...props} forwardedRef={ref} />
));

EditableInputWithRef.displayName = 'EditableInput';
EditableInputWithRef.propTypes = propTypes;
EditableInputWithRef.defaultProps = defaultProps;

export default EditableInputWithRef;
