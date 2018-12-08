import React, { Component } from 'react';
import { bool, func, string, number, oneOf, oneOfType } from 'prop-types';
import styled from 'styled-components';
import noop from 'utils/noop';
import RadioButton from './RadioButton';

const Wrapper = styled.div`
  margin-right: -0.5em;
  margin-left: -0.5em;
`;

const Radio = styled(RadioButton)`
  ${Wrapper} & {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }
`;

function radio({ name, variant, selected, onChange, disabled }) {
  return ({ ...props }) => (
    <Radio
      {...props}
      name={name}
      variant={variant}
      onChange={onChange}
      checked={props.value === selected} // eslint-disable-line react/prop-types
      disabled={disabled}
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
    disabled: false,
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
    /** Disable the radio buttons if it is set to `true` */
    disabled: bool,
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
    const { name, variant, disabled, onChange, ...rest } = this.props;
    return (
      <Wrapper {...rest} aria-labelledby={name}>
        {this.props.children(
          radio({
            name,
            variant,
            onChange: this.handleChange,
            selected: this.state.value,
            disabled,
          })
        ) || null}
      </Wrapper>
    );
  }
}

export default RadioGroup;
