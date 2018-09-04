import React, { Component } from 'react';
import { bool, func, number, string } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import Button from 'components/Button';
import Icon from 'components/Icon';

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Text = styled.span`
  padding-right: 8px;
`;

const SCButton = styled(Button)`
  ${({ showLabel }) => !showLabel && 'padding: 0.5em;'};
`;

class Pagination extends Component {
  static propTypes = {
    current: number.isRequired,
    pageSize: number.isRequired,
    total: number.isRequired,
    loading: bool,
    prevLabel: string,
    nextLabel: string,
    showLabel: bool,
    onChange: func,
  };

  static defaultProps = {
    loading: false,
    prevLabel: 'Prev',
    nextLabel: 'Next',
    showLabel: false,
    onChange: noop,
  };

  handleChange = () => {
    this.props.onChange();
  };

  // TODO: multi lang usage
  render() {
    const {
      current,
      pageSize,
      total,
      loading,
      prevLabel,
      nextLabel,
      showLabel,
    } = this.props;
    return (
      <Container>
        <Text>
          Viewing {current * pageSize - pageSize + 1}-{current * pageSize} of{' '}
          {total}
        </Text>
        <SCButton
          onClick={this.handleChange}
          disabled={loading}
          showLabel={showLabel}
        >
          {showLabel ? (
            prevLabel
          ) : (
            <Icon
              title={prevLabel}
              type="arrow"
              size={20}
              style={{ transform: 'rotate(90deg)' }}
            />
          )}
        </SCButton>
        <SCButton
          onClick={this.handleChange}
          disabled={loading}
          showLabel={showLabel}
        >
          {showLabel ? (
            nextLabel
          ) : (
            <Icon
              title={nextLabel}
              type="arrow"
              size={20}
              style={{ transform: 'rotate(-90deg)' }}
            />
          )}
        </SCButton>
      </Container>
    );
  }
}

export default Pagination;
