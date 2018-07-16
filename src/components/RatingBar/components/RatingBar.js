import React, { PureComponent } from 'react';
import { func, PropTypes } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import { small, large } from '../ratingBarSizes';
import Star from './Star';
import { gold, offWhite } from 'styles/colors';

const RatingStyle = styled.div``;

class RatingBar extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf([small, large]),
    value: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    onClick: func,
  };

  static defaultProps = {
    size: small,
    value: 0,
    onClick: noop,
  };

  constructor(props) {
    super(props);
    let value;
    if (this.props.value > 5) {
      value = 5;
    } else if (this.props.value < 0) {
      value = 0;
    } else {
      ({ value } = this.props);
    }
    this.state = {
      value,
      hoverValue: 0,
    };
  }

  onClick = i => {
    const value = i + 1; // map from index to value
    if (this.props.onClick) {
      this.props.onClick(value);
    }
    this.setState({
      value,
    });
  };

  onMouseEnter = i => {
    this.setState({
      hoverValue: i + 1,
    });
  };
  onMouseLeave = () => {
    this.setState({
      hoverValue: 0,
    });
  };
  colorFill = i => {
    if (this.state.hoverValue) {
      return i < this.state.hoverValue ? gold : offWhite;
    }
    return i < this.state.value ? gold : offWhite;
  };
  render() {
    return (
      <RatingStyle>
        {[0, 1, 2, 3, 4].map(i => (
          <Star
            id={i}
            key={i}
            color={this.colorFill(i)}
            size={this.props.size}
            onClick={this.props.onClick !== noop ? () => this.onClick(i) : null}
            onMouseEnter={
              this.props.onClick !== noop ? () => this.onMouseEnter(i) : null
            }
            onMouseLeave={
              this.props.onClick !== noop ? () => this.onMouseLeave(i) : null
            }
          />
        ))}
      </RatingStyle>
    );
  }
}

export default RatingBar;
