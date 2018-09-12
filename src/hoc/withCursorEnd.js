import React, { Component, forwardRef } from 'react';
import { bool, func, object, oneOfType } from 'prop-types';
import noop from 'utils/noop';

function withCursorEnd(WrappedComponent) {
  class WithCursorEnd extends Component {
    static propTypes = {
      cursorEnd: bool,
      forwardedRef: oneOfType([func, object]),
      onClick: func,
    };

    static defaultProps = {
      cursorEnd: null,
      forwardedRef: null,
      onClick: noop,
    };

    onClick = e => {
      if (this.props.cursorEnd) {
        e.target.setSelectionRange(
          e.target.value.length,
          e.target.value.length
        );
      }
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
  forwardRef.displayName = `withCursorEnd(${name})`;

  return forwardRef((props, ref) => (
    <WithCursorEnd {...props} forwardedRef={ref} />
  ));
}

export default withCursorEnd;
