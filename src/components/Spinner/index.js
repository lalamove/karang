import { oneOf, string } from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { primary } from 'styles/colors';

const load8 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;

const Spinner = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;

  border-width: 0.2em;
  border-style: solid;
  border-color: ${({ color }) => transparentize(0.8, color)};
  border-left-color: ${({ color }) => color};

  ${({ size }) =>
    size === 'large' &&
    css`
      border-width: 0.1em;
    `}text-indent: -9999em;
  transform: translateZ(0);
  animation: ${load8} 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 1em;
    height: 1em;
    ${({ size }) =>
      size === 'large'
        ? css`
            display: block;
            font-size: 10rem;
          `
        : css`
            font-size: 1rem;
          `};
  }
`;

Spinner.defaultProps = {
  size: null,
  color: primary.main,
};

Spinner.propTypes = {
  /** Size of the spinner */
  size: oneOf(['large']),
  /** Color of the spinner */
  color: string,
};

export default Spinner;
