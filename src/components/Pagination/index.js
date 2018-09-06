import React, { Component } from 'react';
import { bool, func, node, number, string } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import Button from 'components/Button';
import Icon from 'components/Icon';

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Text = styled.span`
  padding-right: 0.6em;
`;

const SCButton = styled(Button)`
  ${({ showLabel }) => !showLabel && 'padding: 0.5em;'};
`;

SCButton.displayName = 'SCButton';

class Pagination extends Component {
  static propTypes = {
    /** Current Page number */
    current: number,
    /** Number of items per page */
    pageSize: number,
    /** Total number of items */
    total: number,
    /** Loading status for AJAX calls, disable buttons when it is `true` */
    loading: bool,
    /** Text and title of prev button */
    prevLabel: string,
    /** Text and title of next button */
    nextLabel: string,
    /** Show text instead of icon for prev and next button */
    showLabel: bool,
    /**
     * Callback function, to be executed when clicked prev and next button.
     *
     * @param {Integer} nextPage Next page number.
     * @param {Integer} pageSize Number of items per page.
     */
    onChange: func,
    /** Description next to pagination buttons */
    description: node,
    /** Default initial page number */
    defaultCurrent: number,
    /** Default number of items per page */
    defaultPageSize: number,
    /** Default total number of items */
    defaultTotal: number,
  };

  static defaultProps = {
    current: null,
    pageSize: null,
    total: null,
    loading: false,
    prevLabel: 'Prev',
    nextLabel: 'Next',
    showLabel: false,
    onChange: noop,
    description: null,
    defaultCurrent: 1,
    defaultPageSize: 20,
    defaultTotal: 40,
  };

  state = {
    current: this.props.current || this.props.defaultCurrent,
    pageSize: this.props.pageSize || this.props.defaultPageSize,
    total: this.props.total || this.props.defaultTotal,
  };

  componentDidMount() {
    if (this.props.current && this.props.onChange === noop) {
      // eslint-disable-next-line no-console
      console.warn(
        'No `onChange` handler provided with `current` prop. This will render a read-only' +
          ' component.'
      );
    }
  }

  handleChange = nextPage => {
    const { pageSize } = this.props;
    if (!this.props.current) {
      this.setState({ current: nextPage });
    }
    this.props.onChange(nextPage, pageSize);
  };

  prev = () => {
    if (this.hasPrev()) {
      this.handleChange(this.state.current - 1);
    }
  };

  next = () => {
    if (this.hasNext()) {
      this.handleChange(this.state.current + 1);
    }
  };

  hasPrev = () => this.state.current > 1;

  hasNext = () => this.state.current < this.totalPages();

  totalPages = () => Math.ceil(this.state.total / this.state.pageSize);

  render() {
    const { current, pageSize, total } = this.state;
    const {
      loading,
      prevLabel,
      nextLabel,
      showLabel,
      description,
    } = this.props;
    const firstRow = current * pageSize - pageSize + 1;
    const lastRow = current * pageSize;
    return (
      <Container>
        <Text>
          {description || `Viewing ${firstRow}-${lastRow} of ${total}`}
        </Text>
        <SCButton
          onClick={this.prev}
          disabled={loading || !this.hasPrev()}
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
          onClick={this.next}
          disabled={loading || !this.hasNext()}
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
