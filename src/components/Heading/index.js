import React from 'react';
import { string, node, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';

import { mineShaft } from 'styles/colors';
import { fontWeight, fontSize } from 'styles/fonts';

export const HeadingGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.span`
  ${/* sc-selector */ HeadingGroup} & {
    flex: 1 0 auto;
  }
  margin: 0.5em 0;
  color: ${mineShaft['500']};
  font-weight: ${fontWeight.bold};
  line-height: 1.286;
  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          font-size: ${fontSize.large};
          color: ${mineShaft['900']};
        `;
      case 'default':
      default:
        return css`
          font-size: ${fontSize.small};
          text-transform: uppercase;
        `;
    }
  }};
`;

const HeadingComp = ({ htmlTag, children, ...rest }) => {
  const HeadingWithTag = Heading.withComponent(htmlTag);
  return <HeadingWithTag {...rest}>{children}</HeadingWithTag>;
};

HeadingComp.defaultProps = {
  size: 'default',
  htmlTag: 'span',
  children: null,
};

HeadingComp.propTypes = {
  size: oneOf(['default', 'large']),
  htmlTag: string,
  children: node,
};

export default HeadingComp;
