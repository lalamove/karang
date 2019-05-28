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

  input = React.createRef();

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

// eslint-disable-next-line react/no-multi-comp
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

// TODO: Code cleanup
const EditableInputWrapper = () => (
  <div style={{ maxWidth: '20em' }}>
    <EditableInput
      block
      name="Billing Email"
      value="no-reply@lalamove.com"
      saveBtnText="Save Value"
      editBtnText="Edit Value"
      cancelBtnText="Cancel Value"
      label="Billing Email"
    />
  </div>
);

storiesOf('Input', module)
  .add('Input', () => <InputWrapper />)
  .add('PinInput', () => <PinInputWrapper />)
  .add('SearchInput', () => <SearchInputWrapper />)
  .add('EditableInput', () => <EditableInputWrapper />);
