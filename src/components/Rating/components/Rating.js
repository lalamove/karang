import React, { PureComponent } from 'react';
import { func, oneOf } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import { small, large } from '../ratingSizes';
import Star from './Star';
import { gold, offWhite } from 'styles/colors';

const RatingContainer = styled.div`
  display: inline-block;
`;

class Rating extends PureComponent {
  static propTypes = {
    size: oneOf([small, large]),
    value: oneOf([0, 1, 2, 3, 4, 5]),
    onClick: func,
  };

  static defaultProps = {
    size: small,
    value: 0,
    onClick: noop,
  };

  state = {
    value: Math.min(Math.max(this.props.value, 0), 5),
    hoverValue: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ value: this.props.value });
    }
  }

  onClick = i => {
    const value = i + 1; // map from index to value
    this.setState({ value });
    this.props.onClick(value);
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
      <RatingContainer>
        {[0, 1, 2, 3, 4].map(i => (
          <Star
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
      </RatingContainer>
    );
  }
}

export default Rating;
