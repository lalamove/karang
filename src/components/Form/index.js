import React, { Component } from 'react';
import { func } from 'prop-types';

import noop from 'utils/noop';
import FormItem from './components/FormItem';

class Form extends Component {
  static propTypes = {
    onSubmit: func,
  };

  static defaultProps = {
    onSubmit: noop,
  };

  static Item = FormItem;

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  render() {
    const { onSubmit, ...remainProps } = this.props;

    return <form onSubmit={this.handleSubmit} {...remainProps} />;
  }
}

export default Form;
