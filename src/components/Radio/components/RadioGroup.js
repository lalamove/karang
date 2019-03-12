import React, { Component } from 'react';
import { bool, func, string, oneOf } from 'prop-types';
import styled from 'styled-components';
import noop from 'utils/noop';
import RadioButton from './RadioButton';

const Wrapper = styled.div`
  margin-right: -0.5em;
  margin-left: -0.5em;
`;

const Radio = styled(RadioButton)`
  ${/* sc-selector */ Wrapper} & {
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
      checked={props.value === selected} // eslint-disable-line react/prop-types,react/destructuring-assignment
      disabled={disabled}
    />
  );
}

class RadioGroup extends Component {
  static defaultProps = {
    onChange: noop,
    children: noop,
    variant: 'default',
    value: null,
    defaultValue: null,
    disabled: false,
  };

  static propTypes = {
    /** Callback function, to be executed when user selected an option and it has changed
     *
     * @param {string} value - the selected value
     */
    onChange: func,
    /** Name for radio buttons, will apply to html `<input type="radio" name="xxx" ... >` */
    name: string.isRequired,
    /** @ignore */
    children: func,
    /** Variant of children, `default` is the circle buttons, `list` is the circle buttons
     *  with border, `toggle` is the toggle buttons */
    variant: oneOf(['default', 'list', 'toggle']),
    /** Selected value */
    value: string,
    /** Initial selected value, use it if you want to leave the component
     *  [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) */
    defaultValue: string,
    /** Disable the radio buttons if it is set to `true` */
    disabled: bool,
  };

  /* eslint-disable react/destructuring-assignment */
  state = {
    value:
      this.props.value !== null ? this.props.value : this.props.defaultValue,
  };
  /* eslint-enable react/destructuring-assignment */

  componentDidUpdate(prevProps) {
    const { value, defaultValue } = this.props;
    if (value && defaultValue) {
      // eslint-disable-next-line no-console
      console.warn(
        'Trying to set defaultValue and value at the same time.' +
          '\nComponent can only be either controlled or uncontrolled.'
      );
    }

    if (value !== prevProps.value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ value });
    }
  }

  handleChange = e => {
    const { onChange, value } = this.props;
    const targetVal = e.target.value;
    if (value === null) {
      this.setState(() => ({ value: targetVal }));
    }
    onChange(targetVal);
  };

  render() {
    const { name, variant, disabled, onChange, children, ...rest } = this.props;
    const { value } = this.state;
    return (
      <Wrapper {...rest} aria-labelledby={name}>
        {children(
          radio({
            name,
            variant,
            onChange: this.handleChange,
            selected: value,
            disabled,
          }),
          this.handleChange
        ) || null}
      </Wrapper>
    );
  }
}

export default RadioGroup;
