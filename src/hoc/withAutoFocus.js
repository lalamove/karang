import React, { Component } from 'react';
import { func } from 'prop-types';

const withAutoFocus = (WrappedComponent, refKey = 'ref') =>
  class extends Component {
    static propTypes = {
      getReference: func,
    };

    static defaultProps = {
      getReference: () => false,
    };

    componentDidMount() {
      this.input.focus();
    }

    getReference = ref => {
      this.input = ref;
      this.props.getReference(ref);
    };

    render() {
      const dynamicProps = {
        // ref / innerRef
        [refKey]: this.getReference,
      };
      return <WrappedComponent {...this.props} {...dynamicProps} />;
    }
  };

export default withAutoFocus;
