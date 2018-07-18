import React, { Component, forwardRef } from 'react';
import { bool, oneOfType, func, number, object, string } from 'prop-types';
import styled from 'styled-components';
import { red, orange, offWhite } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';
import noop from 'utils/noop';

import Placeholder from './components/Placeholder';

const Container = styled.div`
  font-family: ${primaryFonts};
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
  border: 1px solid ${offWhite};
  position: relative;
  text-align: left;

  ${({ width }) =>
    width &&
    `
    width: ${width}px;
    `};

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
      value: string,
      width: number,
      placeholder: string,
      dirty: bool,
      error: string,
      onFocus: func,
      onBlur: func,
    };

    static defaultProps = {
      forwardedRef: null,
      value: '',
      width: null,
      placeholder: '',
      dirty: null,
      error: null,
      onFocus: noop,
      onBlur: noop,
    };

    state = {
      focused: false,
    };

    onFocus = e => {
      this.setState({ focused: true });
      this.props.onFocus(e);
    };

    onBlur = e => {
      this.setState({ focused: false });
      this.props.onBlur(e);
    };

    getReference = node => {
      const { forwardedRef } = this.props;
      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else {
          forwardedRef.current = node;
        }
      }
    };

    render() {
      const {
        dirty,
        error,
        forwardedRef,
        placeholder,
        value,
        width,
        onFocus,
        onBlur,
        ...remainProps
      } = this.props;
      const { focused } = this.state;
      return (
        <Container
          focused={focused}
          error={error !== null && error.length > 0}
          width={width}
        >
          <Placeholder
            focused={focused}
            dirty={dirty || (value !== null && value.length > 0)}
            error={error !== null && error.length > 0}
            title={placeholder}
          />
          <WrappedComponent
            error={error}
            placeholder={placeholder}
            value={value}
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
