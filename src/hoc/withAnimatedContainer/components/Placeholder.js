import React from 'react';
import { bool, string } from 'prop-types';
import styled, { css } from 'styled-components';

import { red, orange, silver, white } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const Container = styled.label`
  position: absolute;
  top: 50%;
  left: 1em;
  color: ${silver};
  font-family: ${primaryFonts};
  font-size: ${fontSize.regular};
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  transition: 0.15s;
  transform-origin: center left;
  transform: translateY(-50%);

  ${({ focused }) =>
    focused &&
    css`
      color: ${orange};
    `};

  ${({ error }) =>
    error &&
    css`
      color: ${red};
    `};

  ${({ focused, dirty, error }) =>
    (focused || dirty || error) &&
    css`
      top: 0;
      left: 0.5em;
      padding: 0 4px;
      background-color: ${white};
      transform: translateY(-50%) scale(0.7);
    `};
`;

const Placeholder = ({ title, focused, dirty, error, htmlFor }) => (
  <Container htmlFor={htmlFor} focused={focused} dirty={dirty} error={error}>
    {title}
  </Container>
);

Placeholder.propTypes = {
  title: string,
  focused: bool.isRequired, // eslint-disable-line react/no-typos
  dirty: bool,
  error: bool,
  htmlFor: string,
};

Placeholder.defaultProps = {
  htmlFor: '',
  title: '',
  dirty: false,
  error: false,
};

export default Placeholder;
