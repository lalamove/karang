import React from 'react';
import { bool, node, string } from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

import { primary, valencia, nobel } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';
import Placeholder from './components/Placeholder';

const Container = styled.div`
  position: relative;
  display: inline-flex;
  flex: 1;
  flex-flow: row nowrap;
  border: 1px solid ${nobel.main};
  font-family: ${primaryFonts};
  text-align: left;
  width: 100%;

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    `};

  ${({ focused, error }) =>
    focused &&
    `
    border: 1px solid ${primary.main};
    box-shadow: 0 0 0 4px ${
      error ? rgba(valencia.main, 0.2) : rgba(primary.main, 0.2)
    };
    `};

  ${({ error }) =>
    error &&
    `
    border: 1px solid ${valencia.main};
    background-color: ${rgba(valencia.main, 0.1)};
    `};
`;

const AnimatedBorder = ({
  children,
  dirty,
  error,
  focused,
  disabled,
  label,
  name,
  ...remainProps
}) => (
  <Container
    error={error}
    focused={focused}
    disabled={disabled}
    {...remainProps}
  >
    {label && (
      <Placeholder
        title={label}
        dirty={dirty}
        error={error}
        focused={focused}
        htmlFor={name}
      />
    )}
    {children}
  </Container>
);

AnimatedBorder.propTypes = {
  /** Children elements, HTML elements or `React.ReactElement` are allowed */
  children: node,
  /** Status of label text position, text will be placed at top left position if `true` */
  dirty: bool,
  /** Status of error border, red border will be applied if `true` */
  error: bool,
  /** Status of focused border, orange border will be applied if `true` */
  focused: bool,
  /** True if disable interaction with the element, applying opacity to the border */
  disabled: bool,
  /** Label text that will be shown on border / inside the border */
  label: string,
  /** Name that used to reference the children and label text */
  name: string,
};

AnimatedBorder.defaultProps = {
  children: null,
  dirty: false,
  error: false,
  focused: false,
  disabled: false,
  label: null,
  name: null,
};

export default AnimatedBorder;
