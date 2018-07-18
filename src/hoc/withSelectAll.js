import React, { Component, forwardRef } from 'react';
import { oneOfType, func, object } from 'prop-types';
import noop from 'utils/noop';

function withSelectAll(WrappedComponent) {
  class WithSelectAll extends Component {
    static propTypes = {
      forwardedRef: oneOfType([func, object]),
      onClick: func,
    };

    static defaultProps = {
      forwardedRef: null,
      onClick: noop,
    };

    onClick = e => {
      e.target.select();
      this.props.onClick(e);
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
      const { forwardedRef, ...remainProps } = this.props;
      return (
        <WrappedComponent
          {...remainProps}
          onClick={this.onClick}
          ref={this.getReference}
        />
      );
    }
  }

  const name = Component.displayName || Component.name;
  forwardRef.displayName = `withSelectAll(${name})`;

  return forwardRef((props, ref) => (
    <WithSelectAll {...props} forwardedRef={ref} />
  ));
}

export default withSelectAll;
