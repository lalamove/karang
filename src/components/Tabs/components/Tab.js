import React from 'react';
import { bool, func, node, oneOf, string } from 'prop-types';
import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';

import Button from 'components/Button';
import { nobel, primary } from 'styles/colors';
import noop from 'utils/noop';

import { TabContainer, RoundedTabContainer } from '../style';

const TabButton = styled(Button).attrs({ variant: 'link' })`
  padding: 1.25em;
  color: ${({ selected }) => (selected ? primary.main : nobel.main)};

  text-shadow: ${({ selected }) =>
    selected
      ? `-0.75px 0px 0px ${primary.main}, -0.75px 0px 0px ${primary.main}`
      : 'none'};

  &:hover:enabled {
    color: ${primary.main};
    text-decoration: none;
  }

  &:active:enabled {
    color: ${darken(0.2, primary.main)};
    text-decoration: none;
  }

  &:focus:enabled {
    text-decoration: none;
  }
`;

const RoundedTabButton = styled.label`
  display: block;
  box-sizing: border-box;
  min-width: 10rem;
  padding: 0.25em 1em;
  border: 1px solid ${nobel['200']};
  border-radius: 2em;
  text-align: center;
  color: ${nobel.main};
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${nobel['100']};
  }

  &:active,
  &:focus {
    box-shadow: 0 0 0 4px ${rgba(nobel.main, 0.2)};
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${primary.main};
      color: white;
      font-weight: bold;
      background-color: ${primary.main};

      &:hover,
      &:active {
        background-color: ${primary.main};
      }

      &:active,
      &:focus {
        box-shadow: 0 0 0 4px ${rgba(primary.main, 0.2)};
      }
    `};
`;

const Tab = ({ children, selected, onTabChange, name, variant, ...rest }) => {
  let Container;
  let Content;
  if (variant === 'rounded') {
    Container = RoundedTabContainer;
    Content = RoundedTabButton;
  } else {
    Container = TabContainer;
    Content = TabButton;
  }
  return (
    <Container selected={selected} {...rest}>
      <Content
        aria-selected={selected}
        onClick={() => onTabChange(name)}
        role="tab"
        selected={selected}
      >
        {children}
      </Content>
    </Container>
  );
};

Tab.propTypes = {
  /** Children elements */
  children: node,
  /** Name of the tab */
  name: string.isRequired,
  /** Callback function. Managed by TabBar */
  onTabChange: func,
  /** Display the selected state. Managed by TabBar */
  selected: bool,
  /** Variant of tab button, `default` renders button with bottom border, `rounded` renders rounded button */
  variant: oneOf(['default', 'rounded']),
};

Tab.defaultProps = {
  children: null,
  onTabChange: noop,
  selected: false,
  variant: 'default',
};

export default Tab;
