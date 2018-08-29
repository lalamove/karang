import React, { Component } from 'react';
import { bool, func, number } from 'prop-types';
import { fontWeight } from 'styles/fonts';
import styled from 'styled-components';
import noop from 'utils/noop';

import Button from 'components/Button';

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Text = styled.span`
  padding-right: 8px;
  strong {
    font-weight: ${fontWeight.bold};
  }
`;

class Pagination extends Component {
  static propTypes = {
    limit: number,
    offset: number, // support custom page number as well ?
    count: number,
    onChange: func, // eslint-disable-line react/no-unused-prop-types
    // onChange? or onPrev / onNext ?
  };

  static defaultProps = {
    limit: 20,
    offset: 0,
    count: 36,
    onChange: noop,
  };

  // TODO: multi lang usage
  render() {
    const { count, offset, limit } = this.props;
    return (
      <Container>
        <Text>
          Viewing
          <strong>
            {' '}
            {offset + 1}-{(offset + 1) * limit}{' '}
          </strong>
          of <strong>{count}</strong>
        </Text>
        <Button>Back</Button>
        <Button>Next</Button>
      </Container>
    );
  }
}

export default Pagination;
