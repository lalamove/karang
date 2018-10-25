import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import { orange, white } from 'styles/colors';
import { primaryFonts, fontSize, fontWeight } from 'styles/fonts';

const fillup = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Container = styled.div`
  background: ${lighten(0.3, orange)};
  border-radius: 2px;
  color: ${white};
  cursor: not-allowed;
  font-family: ${primaryFonts};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  height: 2.625em;
  line-height: 2.625em;
  position: relative;
  width: 100%;
`;

const Progress = styled.div`
  animation-name: ${fillup};
  animation-duration: ${({ duration }) => duration};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  background: ${orange};
  border-radius: 2px;
  height: 2.625em;
  position: absolute;
  width: 0;
`;

const Label = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;
`;

export default class CountdownBar extends PureComponent {
  static propTypes = {
    label: string,
    duration: string,
  };

  static defaultProps = {
    label: '',
    duration: '60000ms',
  };

  render() {
    const { duration, label } = this.props;
    return (
      <Container>
        <Progress duration={duration} />
        <Label>{label}</Label>
      </Container>
    );
  }
}
