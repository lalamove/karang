/* eslint-disable max-classes-per-file */
import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Input, { PinInput, SearchInput, EditableInput } from './index';

class InputWrapper extends Component {
  state = {
    username: '',
    password: '',
    address: 'Sample Address',
    companyName: '',
    industry: '',
  };

  input = React.createRef();

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <h4>Basic</h4>
        <Input
          ref={this.input}
          type="text"
          label="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          autoFocus
        />
        <h4>Password</h4>
        <Input
          type="password"
          label="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          masked
        />
        <h4>Non-masked password</h4>
        <Input
          type="password"
          label="Non-masked Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          masked={false}
        />
        <h4>With error message</h4>
        <Input
          type="text"
          label="Address"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          error="Error Message"
        />
        <h4>Select all when clicked</h4>
        <Input
          type="text"
          label="Company Name"
          name="companyName"
          value={this.state.companyName}
          onChange={this.handleChange}
          selectAll
        />
        <h4>Move cursor to end of input</h4>
        <Input
          type="text"
          label="Industry"
          name="industry"
          value={this.state.industry}
          onChange={this.handleChange}
          cursorEnd
        />
        <h4>Uncontrolled component</h4>
        <Input
          type="text"
          label="Uncontrolled"
          name="uncontrolled"
          defaultValue=""
        />
      </Fragment>
    );
  }
}

class PinInputWrapper extends Component {
  state = {
    register: ['', '', '', ''],
    resetPassword: ['1', '3', '3', '4'],
  };

  render() {
    return (
      <Fragment>
        <h4>Basic</h4>
        <PinInput pins={this.state.register} />
        <h4>With error message</h4>
        <PinInput pins={this.state.resetPassword} error="Error Message" />
        <h4>Small size</h4>
        <PinInput pins={this.state.resetPassword} size="small" />
      </Fragment>
    );
  }
}

const SearchInputWrapper = () => (
  <SearchInput
    name="searchValue"
    placeholder="Search for Order ID, Driver's Mobile"
  />
);

class EditableInputWrapper extends Component {
  state = {
    isLoading: false,
    isSuccess: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (!prevState.isLoading && this.state.isLoading) {
      this.timeout = setTimeout(
        () => this.setState({ isLoading: false, isSuccess: true }),
        1000
      );
    }

    if (!prevState.isSuccess && this.state.isSuccess) {
      this.timeout = setTimeout(
        () => this.setState({ isSuccess: false }),
        3000
      );
    }
  }

  handleSave = () => {
    this.setState({ isLoading: true });
  };

  handleCancel = () => {
    this.setState({ error: null });
  };

  handleChange = () => {
    this.setState({ error: null });
  };

  handleError = () => {
    this.setState({ error: 'Email is invalid' });
  };

  render() {
    const { isLoading, isSuccess, error } = this.state;
    const validate = value => {
      // e.g. validating email
      const regexp = new RegExp(/^[\w-+]+(\.[\w-+]+)*@[\w-]+(\.[\w-]+)+$/i); // email pattern
      return regexp.test(value);
    };
    return (
      <Fragment>
        <h4>Basic</h4>
        <EditableInput
          name="Billing Email"
          placeholder="Billing Email"
          defaultValue="no-reply@lalamove.com"
          onSave={this.handleSave}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
        <h4>With validate function</h4>
        <EditableInput
          name="Billing Email"
          placeholder="Billing Email"
          defaultValue="no-reply@lalamove.com"
          onSave={this.handleSave}
          onError={this.handleError}
          onChange={this.handleChange}
          onCancel={this.handleCancel}
          validate={validate}
          error={error}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </Fragment>
    );
  }
}

storiesOf('Input', module)
  .add('Input', () => <InputWrapper />)
  .add('PinInput', () => <PinInputWrapper />)
  .add('SearchInput', () => <SearchInputWrapper />)
  .add('EditableInput', () => <EditableInputWrapper />);
