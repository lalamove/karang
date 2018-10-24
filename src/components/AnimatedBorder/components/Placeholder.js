import React from 'react';
import { bool, string } from 'prop-types';
import styled, { css } from 'styled-components';

import { red, orange, silver, white } from 'styles/colors';
import { fontSize } from 'styles/fonts';

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 1em;
  color: ${silver};
  font-size: ${fontSize.regular};
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  transition: 0.15s;
  transform-origin: left center;
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
  <Label htmlFor={htmlFor} focused={focused} dirty={dirty} error={error}>
    {title}
  </Label>
);

Placeholder.propTypes = {
  dirty: bool,
  error: bool,
  focused: bool,
  htmlFor: string,
  title: string,
};

Placeholder.defaultProps = {
  dirty: false,
  error: false,
  focused: false,
  htmlFor: null,
  title: null,
};

export default Placeholder;
