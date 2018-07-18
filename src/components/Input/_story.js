import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import AnimatedInput from './index';

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
        <AnimatedInput
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          autoFocus
        />
        <br />
        <AnimatedInput
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <AnimatedInput
          type="text"
          placeholder="Address"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          error="Error Message"
        />
        <br />
        <AnimatedInput
          type="text"
          placeholder="Company Name"
          name="companyName"
          value={this.state.companyName}
          onChange={this.handleChange}
          selectAll
        />
        <br />
        <AnimatedInput
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
