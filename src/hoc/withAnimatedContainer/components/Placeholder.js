import React from 'react';
import { bool, string } from 'prop-types';
import styled from 'styled-components';

import { red, orange, silver, white } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';

const Container = styled.div`
  font-family: ${primaryFonts};
  color: ${silver};
  font-size: 14px;
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
    font-size: 10px;
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
  dirty: bool, // eslint-disable-line react/no-typos
  error: bool,
};

Placeholder.defaultProps = {
  title: '',
  dirty: false,
  error: false,
};

export default Placeholder;
