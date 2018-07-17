import React, { Component, Fragment, forwardRef } from 'react';
import { oneOfType, func, object, string } from 'prop-types';
import styled from 'styled-components';

import { red } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';
import ErrorIcon from 'icons/ErrorIcon';

const Container = styled.div`
  font-family: ${primaryFonts};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

const Text = styled.span`
  color: ${red};
  font-size: 12px;
`;

function withErrorMessage(WrappedComponent) {
  class WithErrorMessage extends Component {
    static propTypes = {
      forwardedRef: oneOfType([func, object]),
      error: string,
    };

    static defaultProps = {
      forwardedRef: null,
      error: '',
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
      const { forwardedRef, error, ...remainProps } = this.props;
      return (
        <Fragment>
          <WrappedComponent
            error={error}
            {...remainProps}
            ref={this.getReference}
          />
          {error &&
            error.length > 0 && (
              <Container>
                <Text>{error}</Text>
                <ErrorIcon color={red} size={13} />
              </Container>
            )}
        </Fragment>
      );
    }
  }

  return forwardRef((props, ref) => (
    <WithErrorMessage {...props} forwardedRef={ref} />
  ));
}

export default withErrorMessage;
