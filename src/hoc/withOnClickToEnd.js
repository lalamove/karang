import React, { Component } from 'react';
import { func } from 'prop-types';

import noop from 'utils/noop';

const withOnClickToEnd = (WrappedComponent, refKey = 'ref') =>
  class extends Component {
    static propTypes = {
      getReference: func,
      onClick: func,
    };

    static defaultProps = {
      getReference: () => false,
      onClick: noop,
    };

    onClick = e => {
      this.input.setSelectionRange(
        this.input.value.length,
        this.input.value.length
      );
      this.props.onClick(e);
    };

    getReference = ref => {
      this.input = ref;
      this.props.getReference(ref);
    };

    render() {
      const dynamicProps = {
        // ref / innerRef
        [refKey]: this.getReference,
      };
      return (
        <WrappedComponent
          {...this.props}
          onClick={this.onClick}
          {...dynamicProps}
        />
      );
    }
  };

export default withOnClickToEnd;
