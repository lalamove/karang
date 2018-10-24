import React from 'react';
import { bool, node, string } from 'prop-types';
import styled from 'styled-components';

import { red, orange, offWhite } from 'styles/colors';
import Placeholder from './components/Placeholder';

const Container = styled.div`
  position: relative;
  display: inline-flex;
  flex: 1;
  flex-flow: row nowrap;
  border: 1px solid ${offWhite};
  text-align: left;
  width: 100%;

  ${({ focused }) =>
    focused &&
    `
    border: 1px solid ${orange};
    `};

  ${({ error }) =>
    error &&
    `
    border: 1px solid ${red};
    `};
`;

const AnimatedBorder = ({
  children,
  dirty,
  error,
  focused,
  label,
  name,
  ...remainProps
}) => (
  <Container error={error} focused={focused} {...remainProps}>
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
  label: null,
  name: null,
};

export default AnimatedBorder;
