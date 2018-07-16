import React, { Component, forwardRef } from 'react';
import { oneOfType, func, object } from 'prop-types';
import noop from 'utils/noop';

function withOnClickSelect(WrappedComponent) {
  class WithOnClickSelect extends Component {
    static propTypes = {
      forwardedRef: oneOfType([func, object]),
      onClick: func,
    };

    static defaultProps = {
      forwardedRef: null,
      onClick: noop,
    };

    onClick = e => {
      if (this.input) {
        this.input.setSelectionRange(0, this.input.value.length);
      }
      this.props.onClick(e);
    };

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
      return (
        <WrappedComponent
          {...remainProps}
          onClick={this.onClick}
          ref={this.getReference}
        />
      );
    }
  }

  return forwardRef((props, ref) => (
    <WithOnClickSelect {...props} forwardedRef={ref} />
  ));
}

export default withOnClickSelect;
