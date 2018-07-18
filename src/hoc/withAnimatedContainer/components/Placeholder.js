import React from 'react';
import { bool, string } from 'prop-types';
import styled from 'styled-components';

import { red, orange, silver, white } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const Container = styled.div`
  color: ${silver};
  font-size: ${fontSize.regular};
  font-family: ${primaryFonts};
  left: 8px;
  top: 16px;
  pointer-events: none;
  position: absolute;
  transition: 150ms;

  ${({ focused }) =>
    focused &&
    `
    color: ${orange};
    `};

  ${({ error }) =>
    error &&
    `
    color: ${red};
    `};

  ${({ focused, dirty, error }) =>
    (focused || dirty || error) &&
    `
    background-color: ${white};
    font-size: ${fontSize.micro};
    left: 8px;
    top: -6px;
    padding: 0 4px 0 4px;
    `};
`;

const Placeholder = ({ title, focused, dirty, error }) => (
  <Container focused={focused} dirty={dirty} error={error}>
    {title}
  </Container>
);

Placeholder.propTypes = {
  title: string,
  focused: bool.isRequired, // eslint-disable-line react/no-typos
  dirty: bool,
  error: bool,
};

Placeholder.defaultProps = {
  title: '',
  dirty: false,
  error: false,
};

export default Placeholder;
