import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Input, { PinInput, SearchInput, EditableInput, TextArea } from './index';

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
          width={150}
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
        />
        <br />
        <br />
        <Input
          type="text"
          label="Address"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          error="Error Message Error Message Error Message Error Message Error Message Error Message Error Message"
        />
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
          onChange={this.handleChange}
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
      <EditableInput
        name="Billing Email"
        value="david.lam@lalamove.com"
        onSave={address => {
          console.log('saved', address);
        }}
        onCancel={address => {
          console.log('cancel', address);
        }}
        ref={node => {
          console.log('ref', node);
        }}
        saveBtnText="Save Value"
        editBtnText="Edit Value"
        cancelBtnText="Cancel Value"
        label="Billing Email"
      />
    );
  }
}

// eslint-disable-next-line
class TextAreaWrapper extends Component {
  render() {
    return (
      <Fragment>
        <TextArea
          name="Comments"
          placeholder="+ Add any important instructions about your delivery"
          characterLimit={10}
        />
        <br />
        <TextArea
          name="Comments"
          placeholder="+ Add any important instructions about your delivery"
          style={{ width: '500px', height: '96px' }}
        />
      </Fragment>
    );
  }
}

storiesOf('Input', module)
  .add('Input', () => <InputWrapper />)
  .add('PinInput', () => <PinInputWrapper />)
  .add('SearchInput', () => <SearchInputWrapper />)
  .add('EditableInput', () => <EditableInputWrapper />)
  .add('TextArea', () => <TextAreaWrapper />);
