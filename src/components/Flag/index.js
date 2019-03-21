import React from 'react';
import { node, oneOf } from 'prop-types';
import styled from 'styled-components';

const FlagContainer = styled.div`
  display: flex;
  align-items: ${({ variant }) => {
    switch (variant) {
      case 'top':
        return 'flex-start';
      case 'bottom':
        return 'flex-end';
      case 'center':
      default:
        return 'center';
    }
  }};
`;

const FlagImg = styled.figure`
  margin: 0; /* reset */
  margin-right: 1em;
`;

const FlagBody = styled.div`
  flex: 1;
`;

/**
 * The Flag component (also known as media object) is composed of an image to the left, with descriptive content to the right.
 * The content area on the right can contain any other objects. Commonly, it contains text, but we could put lists, tables, or even other Flag inside.
 */
/* eslint-disable react/destructuring-assignment */
const Flag = props => (
  <FlagContainer {...props}>
    <FlagImg>{props.img}</FlagImg>
    <FlagBody>{props.children}</FlagBody>
  </FlagContainer>
);
/* eslint-enable react/destructuring-assignment */

Flag.propTypes = {
  /** The image to the left */
  img: node,
  /** Image placement variation */
  variant: oneOf(['top', 'center', 'bottom']),
  /** The descriptive content to the right */
  children: node,
};

Flag.defaultProps = {
  img: null,
  variant: 'center',
  children: null,
};

export default Flag;
