import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import { primary, white } from 'styles/colors';
import { fontSize, fontWeight } from 'styles/fonts';
import { GROUND } from 'styles/zIndex';

const fillup = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 2.625em;
  line-height: 2.625em;
  border-radius: 2px;
  background: ${lighten(0.3, primary.main)};
  color: ${white};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  cursor: not-allowed;
`;

const Progress = styled.div`
  position: absolute;
  width: 0;
  height: 2.625em;
  border-radius: 2px;
  background: ${primary.main};
  animation-name: ${fillup};
  animation-duration: ${({ duration }) => duration};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

const Label = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: ${GROUND + 1};
`;

/**
 * CountdownBar component is like progress bar for a fixed duration.
 * Commonly used when you need to delay user action/input/submission for a predetermined duration,
 * while providing a sense of progression to the user.
 */
export default class CountdownBar extends PureComponent {
  static propTypes = {
    /** Label for the bar */
    label: string,
    /** Duration of the wait, may be specified in either seconds (s) or milliseconds (ms) */
    duration: string,
    /** String representing information related to the countdown */
    title: string,
  };

  static defaultProps = {
    label: '',
    duration: '60000ms',
    title: '',
  };

  render() {
    const { duration, label, title, ...rest } = this.props;
    return (
      <Container title={title} {...rest}>
        <Progress duration={duration} />
        <Label>{label}</Label>
      </Container>
    );
  }
}
