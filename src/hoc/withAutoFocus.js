import React, { Component, forwardRef } from 'react';
import { oneOfType, func, object } from 'prop-types';

function withAutoFocus(WrappedComponent) {
  class WithAutoFocus extends Component {
    static propTypes = {
      forwardedRef: oneOfType([func, object]),
    };

    static defaultProps = {
      forwardedRef: null,
    };

    componentDidMount() {
      if (this.input) {
        this.input.focus();
      }
    }

    getReference = node => {
      const { forwardedRef } = this.props;
      this.input = node;

      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else {
          forwardedRef.current = node;
        }
      }
    };

    render() {
      const { forwardedRef, ...remainProps } = this.props;
      return <WrappedComponent {...remainProps} ref={this.getReference} />;
    }
  }

  return forwardRef((props, ref) => (
    <WithAutoFocus {...props} forwardedRef={ref} />
  ));
}

export default withAutoFocus;
