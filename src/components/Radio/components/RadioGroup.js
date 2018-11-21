import React, { Component } from 'react';
import { bool, func, string, number, oneOf, oneOfType } from 'prop-types';
import noop from 'utils/noop';
import Radio from './RadioButton';

function radio({ name, variant, selected, onChange }) {
  return ({ ...props }) => (
    <Radio
      {...props}
      name={name}
      variant={variant}
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
    variant: 'default',
    value: null,
    defaultValue: null,
  };

  static propTypes = {
    onChange: func,
    name: string,
    children: func,
    variant: oneOf(['default', 'list', 'toggle']),
    value: oneOfType([string, number, bool]),
    defaultValue: oneOfType([string, number, bool]),
  };

  state = {
    value:
      this.props.value !== null ? this.props.value : this.props.defaultValue,
  };

  componentDidUpdate(prevProps) {
    const { value, defaultValue } = this.props;
    if (value && defaultValue) {
      // eslint-disable-next-line no-console
      console.warn(
        'Trying to set defaultValue and value at the same time.' +
          '\nComponent can only be either controlled or uncontrolled.'
      );
    }

    if (this.props.value !== prevProps.value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ value: this.props.value });
    }
  }

  handleChange = e => {
    const { onChange } = this.props;
    const { value } = e.target;
    if (this.props.value === null) {
      this.setState(state => ({ value }));
    }
    onChange(value);
  };

  render() {
    const { name, variant } = this.props;
    return (
      this.props.children(
        radio({
          name,
          variant,
          onChange: this.handleChange,
          selected: this.state.value,
        })
      ) || null
    );
  }
}

export default RadioGroup;
