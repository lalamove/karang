import React from 'react';
import styled from 'styled-components';
import { bool, node, string, func } from 'prop-types';
import { darken } from 'polished';

import Button from 'components/Button';
import { orange as primaryColor, lightGray } from 'styles/colors';
import noop from 'utils/noop';

import { TabContainer } from '../style';

const TabButton = styled(Button).attrs({ variant: 'link' })`
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

  &:active:enabled {
    color: ${darken(0.2, primaryColor)};
    text-decoration: none;
  }

  &:focus:enabled {
    text-decoration: none;
  }
`;

const Tab = ({ children, selected, onTabChange, name }) => (
  <TabContainer selected={selected}>
    <TabButton selected={selected} onClick={() => onTabChange(name)}>
      {children}
    </TabButton>
  </TabContainer>
);

Tab.propTypes = {
  /** Children elements */
  children: node,
  /** Name of the tab */
  name: string.isRequired, // eslint-disable-line react/no-typos
  /** Callback function. Managed by TabBar */
  onTabChange: func,
  /** Display the selected state. Managed by TabBar */
  selected: bool,
};

Tab.defaultProps = {
  children: null,
  onTabChange: noop,
  selected: false,
};

export default Tab;
