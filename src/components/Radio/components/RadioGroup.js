import React, { Component } from 'react';
import { bool, func, string, number, oneOfType } from 'prop-types';
import noop from 'utils/noop';
import Radio from './RadioButton';

function radio({ name, selected, onChange }) {
  return ({ ...props }) => (
    <Radio
      {...props}
      name={name}
      onChange={onChange}
      checked={props.value === selected} // eslint-disable-line react/prop-types
    />
  );
}

class RadioGroup extends Component {
  static defaultProps = {
    onChange: noop,
    children: noop,
    name: '',
    value: '',
  };

  static propTypes = {
    onChange: func,
    name: string,
    children: func,
    value: oneOfType([string, number, bool]),
  };

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { name, value } = this.props;
    return (
      this.props.children(
        radio({ name, onChange: this.handleChange, selected: value })
      ) || null
    );
  }
}

export default RadioGroup;
