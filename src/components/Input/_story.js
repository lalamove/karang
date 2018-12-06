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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <Input
          type="text"
          label="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          autoFocus
        />
        <br />
        <br />
        <Input
          type="password"
          label="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          masked
        />
        <br />
        <br />
        <Input
          type="password"
          label="not masked Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          masked={false}
        />
        <br />
        <br />
        <Input
          type="text"
          label="Address"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          error="Error Message"
        />
        <br />
        <br />
        <br />
        <br />
        <Input
          type="text"
          label="Company Name"
          name="companyName"
          value={this.state.companyName}
          onChange={this.handleChange}
          selectAll
        />
        <br />
        <br />
        <Input
          type="text"
          placeholder="Industry"
          name="industry"
          value={this.state.industry}
          onChange={this.handleChange}
          cursorEnd
        />
        <br />
        <br />
        <Input
          type="text"
          label="Uncontrolled Component"
          name="testing"
          defaultValue="Testing"
        />
      </Fragment>
    );
  }
}

// eslint-disable-next-line
class PinInputWrapper extends Component {
  state = {
    register: ['', '', '', ''],
    resetPassword: ['1', '3', '3', '4'],
  };

  render() {
    return (
      <Fragment>
        <PinInput pins={this.state.register} />
        <br />
        <br />
        <PinInput pins={this.state.resetPassword} error="Error Message" />
        <br />
        <br />
        <PinInput pins={this.state.resetPassword} variant="small" />
      </Fragment>
    );
  }
}

// eslint-disable-next-line
class SearchInputWrapper extends Component {
  render() {
    return (
      <SearchInput
        name="searchValue"
        placeholder="Search for Order ID, Driver's Mobile"
      />
    );
  }
}

// eslint-disable-next-line
class EditableInputWrapper extends Component {
  render() {
    return (
      <div style={{ maxWidth: '20em' }}>
        <EditableInput
          block
          name="Billing Email"
          value="alex.fok@lalamove.com"
          saveBtnText="Save Value"
          editBtnText="Edit Value"
          cancelBtnText="Cancel Value"
          label="Billing Email"
        />
      </div>
    );
  }
}

storiesOf('Input', module)
  .add('Input', () => <InputWrapper />)
  .add('PinInput', () => <PinInputWrapper />)
  .add('SearchInput', () => <SearchInputWrapper />)
  .add('EditableInput', () => <EditableInputWrapper />);
