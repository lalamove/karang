import React, { PureComponent } from 'react';
import { func, oneOf } from 'prop-types';
import styled from 'styled-components';

import { nobel, secondary } from 'styles/colors';
import noop from 'utils/noop';

import { small, large } from '../ratingSizes';
import Star from './Star';

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
    // eslint-disable-next-line react/destructuring-assignment
    value: Math.min(Math.max(this.props.value, 0), 5),
    hoverValue: 0,
  };

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (prevProps.value !== value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ value });
    }
  }

  onClick = i => {
    const { onClick } = this.props;
    const value = i + 1; // map from index to value
    this.setState({ value });
    onClick(value);
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
    const { hoverValue, value } = this.state;
    if (hoverValue) {
      return i < hoverValue ? secondary.main : nobel['200'];
    }
    return i < value ? secondary.main : nobel['200'];
  };

  render() {
    const { size, onClick } = this.props;
    return (
      <RatingContainer>
        {[0, 1, 2, 3, 4].map(i => (
          <Star
            key={i}
            color={this.colorFill(i)}
            size={size}
            onClick={onClick !== noop ? () => this.onClick(i) : null}
            onMouseEnter={onClick !== noop ? () => this.onMouseEnter(i) : null}
            onMouseLeave={onClick !== noop ? () => this.onMouseLeave(i) : null}
          />
        ))}
      </RatingContainer>
    );
  }
}

export default Rating;
