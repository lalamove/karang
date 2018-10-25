import React, { Component, forwardRef } from 'react';
import { oneOfType, func, object, string, shape } from 'prop-types';
import styled from 'styled-components';

import { red } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';
import ErrorIcon from 'icons/Error';

const Container = styled.div`
  display: inline-block;
`;

const ErrorMessageContainer = styled.div`
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  line-height: 1.4;
`;

const Text = styled.span`
  color: ${red};
  font-family: ${primaryFonts};
  font-size: ${fontSize.small};
`;

const Icon = styled.span`
  float: right;
  margin-left: 1em;
`;

function withErrorMessage(WrappedComponent) {
  const ScWrappedComponent = styled(WrappedComponent)`
    width: 100%;
  `;

  class WithErrorMessage extends Component {
    static propTypes = {
      forwardedRef: oneOfType([func, object]),
      error: string,
      className: string,
      style: shape({}),
    };

    static defaultProps = {
      forwardedRef: null,
      error: '',
      style: {},
      className: '',
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
        className,
        style,
        forwardedRef,
        error,
        ...remainProps
      } = this.props;
      return (
        <Container className={className} style={style}>
          <ScWrappedComponent
            error={error}
            {...remainProps}
            ref={this.getReference}
          />
          {error &&
            error.length > 0 && (
              <ErrorMessageContainer>
                <Icon>
                  <ErrorIcon color={red} size={13} />
                </Icon>
                <Text>{error}</Text>
              </ErrorMessageContainer>
            )}
        </Container>
      );
    }
  }

  return forwardRef((props, ref) => (
    <WithErrorMessage {...props} forwardedRef={ref} />
  ));
}

export default withErrorMessage;
