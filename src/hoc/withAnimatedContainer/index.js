import React, { Component, forwardRef } from 'react';
import { bool, oneOfType, func, object, string, shape } from 'prop-types';
import styled from 'styled-components';
import { red, orange, offWhite } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';
import noop from 'utils/noop';

import Placeholder from './components/Placeholder';

const Container = styled.div`
  position: relative;
  display: inline-flex;
  flex: 1;
  flex-flow: row nowrap;
  border: 1px solid ${offWhite};
  font-family: ${primaryFonts};
  text-align: left;

  ${({ focused }) =>
    focused &&
    `
    border: 1px solid ${orange};
    `};

  ${({ error }) =>
    error &&
    `
    border: 1px solid ${red};
    `};
`;

function withAnimatedContainer(WrappedComponent) {
  class WithAnimatedContainer extends Component {
    static propTypes = {
      forwardedRef: oneOfType([func, object]),
      label: string,
      placeholder: string,
      dirty: bool,
      error: string,
      onFocus: func,
      onBlur: func,
      onChange: func,
      style: shape({}),
      className: string,
    };

    static defaultProps = {
      forwardedRef: null,
      label: '',
      placeholder: '',
      dirty: false,
      error: null,
      onFocus: noop,
      onBlur: noop,
      onChange: noop,
      style: {},
      className: '',
    };

    constructor() {
      super();
      this.input = null;
    }

    state = {
      focused: false,
      dirty: false,
    };

    onFocus = e => {
      this.setState({ focused: true });
      this.props.onFocus(e);
    };

    onBlur = e => {
      this.setState({ focused: false });
      this.updateDirtyState();
      this.props.onBlur(e);
    };

    getReference = node => {
      const { forwardedRef } = this.props;
      this.input = node;
      this.updateDirtyState();

      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else {
          forwardedRef.current = node;
        }
      }
    };

    updateDirtyState = () => {
      if (this.input) {
        this.setState({
          dirty: this.input.value ? this.input.value.length > 0 : false,
        });
      }
    };

    render() {
      const {
        error,
        label,
        placeholder,
        onFocus,
        onBlur,
        forwardedRef,
        style,
        className,
        ...remainProps
      } = this.props;
      const { focused, dirty } = this.state;
      return (
        <Container
          style={style}
          className={className}
          focused={focused}
          error={error !== null && error.length > 0}
        >
          {Boolean(label) && (
            <Placeholder
              focused={focused}
              dirty={dirty}
              error={error !== null && error.length > 0}
              title={label}
              htmlFor={`llmInput_${remainProps.name}`}
            />
          )}
          <WrappedComponent
            id={`llmInput_${remainProps.name}`}
            error={error}
            label={label}
            placeholder={label || placeholder}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            {...remainProps}
            ref={this.getReference}
          />
        </Container>
      );
    }
  }

  return forwardRef((props, ref) => (
    <WithAnimatedContainer {...props} forwardedRef={ref} />
  ));
}

export default withAnimatedContainer;
