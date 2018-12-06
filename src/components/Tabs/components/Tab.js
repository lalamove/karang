import React from 'react';
import styled from 'styled-components';
import { bool, node, string, func } from 'prop-types';
import { darken } from 'polished';

import Button from 'components/Button';
import { orange as primaryColor, lightGray } from 'styles/colors';
import noop from 'utils/noop';

const Container = styled.li`
  display: inline-block;
  padding: 0;
  border-bottom: ${({ selected }) =>
    selected ? `2px solid ${primaryColor}` : 'none'};
`;

const LinkButton = props => <Button {...props} variant="link" />;
const TabButton = styled(LinkButton)`
  padding: 1.25em;
  color: ${({ selected }) => (selected ? primaryColor : lightGray)};

  text-shadow: ${({ selected }) =>
    selected
      ? `-0.75px 0px 0px ${primaryColor}, -0.75px 0px 0px ${primaryColor}`
      : 'none'};

  &:hover:enabled {
    color: ${primaryColor};
    text-decoration: none;
  }

  &:focus:enabled {
    color: ${darken(0.2, primaryColor)};
    text-decoration: none;
  }
`;

const Tab = ({ children, selected, onClick, name }) => (
  <Container selected={selected}>
    <TabButton selected={selected} onClick={onClick}>
      {children}
    </TabButton>
  </Container>
);

Tab.propTypes = {
  /** Children elements */
  children: node,
  /** Name of the tab */
  name: string.isRequired, // eslint-disable-line react/no-typos
  /** Callback function. Managed by TabBar */
  onClick: func,
  /** Display the selected state. Managed by TabBar */
  selected: bool,
};

Tab.defaultProps = {
  children: null,
  onClick: noop,
  selected: false,
};

export default Tab;
