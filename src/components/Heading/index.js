import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { silver } from 'styles/colors';
import { fontWeight } from 'styles/fonts';

export const HeadingGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Heading = styled.span`
  ${/* sc-selector */ HeadingGroup} & {
    flex: 1 0 auto;
  }
  margin: 0.5em 0;
  color: ${silver};
  font-size: 0.857em;
  font-weight: ${fontWeight.bold};
  line-height: 1.286;
  text-transform: uppercase;
`;

const HeadingComp = ({ htmlTag, children, ...rest }) => {
  const HeadingWithTag = Heading.withComponent(htmlTag);
  return <HeadingWithTag {...rest}>{children}</HeadingWithTag>;
};

HeadingComp.defaultProps = {
  htmlTag: 'span',
  children: null,
};

HeadingComp.propTypes = {
  htmlTag: PropTypes.string,
  children: PropTypes.node,
};

export default HeadingComp;
