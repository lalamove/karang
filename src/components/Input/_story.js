import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';

class Wrapper extends Component {
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
        <Input
          type="password"
          label="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
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
        <Input
          type="text"
          label="Company Name"
          name="companyName"
          value={this.state.companyName}
          onChange={this.handleChange}
          selectAll
        />
        <br />
        <Input
          type="text"
          placeholder="Industry"
          name="industry"
          value={this.state.industry}
          onChange={this.handleChange}
          cursorEnd
        />
      </Fragment>
    );
  }
}

storiesOf('Input', module).add('Basic', () => <Wrapper />);
