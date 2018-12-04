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
    /** Callback function, to be executed when user selected an option and it has changed */
    onChange: func,
    /** Name of children */
    name: string,
    /** @ignore */
    children: func,
    /** Variant of children, `default` is the circle buttons, `list` is the circle buttons
     *  with border, `toggle` is the toggle buttons */
    variant: oneOf(['default', 'list', 'toggle']),
    /** Selected value */
    value: oneOfType([string, number, bool]),
    /** Initial selected value, use it if you want to leave the component
     *  [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) */
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
    const { name, variant, ...rest } = this.props;
    return (
      <div {...rest} aria-labelledby={name}>
        {this.props.children(
          radio({
            name,
            variant,
            onChange: this.handleChange,
            selected: this.state.value,
          })
        ) || null}
      </div>
    );
  }
}

export default RadioGroup;
