import React, { Component, forwardRef } from 'react';
import { bool, oneOfType, func, object, string } from 'prop-types';
import styled from 'styled-components';
import { red, orange, offWhite } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';
import noop from 'utils/noop';

import Placeholder from './components/Placeholder';

const Container = styled.div`
  font-family: ${primaryFonts};
  display: inline-flex;
  flex-flow: row nowrap;
  flex: 1;
  border: 1px solid ${offWhite};
  position: relative;
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
        ...remainProps
      } = this.props;
      const { focused, dirty } = this.state;
      return (
        <Container focused={focused} error={error !== null && error.length > 0}>
          {Boolean(label) && (
            <Placeholder
              focused={focused}
              dirty={dirty}
              error={error !== null && error.length > 0}
              title={label}
            />
          )}
          <WrappedComponent
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
