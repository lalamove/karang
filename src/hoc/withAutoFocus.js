import React, { Component, forwardRef } from 'react';
import { object } from 'prop-types';

function withAutoFocus(WrappedComponent) {
  class WithAutoFocus extends Component {
    static propTypes = {
      forwardedRef: object, // eslint-disable-line
    };

    static defaultProps = {
      forwardedRef: null,
    };

    constructor(props) {
      super(props);
      this.input = null;
    }

    componentDidMount() {
      const { forwardedRef } = this.props;
      if (forwardedRef) {
        forwardedRef.current.focus();
      }
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent {...rest} ref={forwardedRef} />;
    }
  }

  return forwardRef((props, ref) => (
    <WithAutoFocus {...props} forwardedRef={ref} />
  ));
}

export default withAutoFocus;
