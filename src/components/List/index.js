import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { orange, offWhite, white } from 'styles/colors';
import { arrayOf, bool, func, node, string, shape } from 'prop-types';

import noop from 'utils/noop';

const resetList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Content = styled.div`
  flex: 1;
  padding: 12px 20px 12px 0;
  line-height: 20px;
`;

const UL = styled.ul`
  ${resetList} box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22);
  display: inline-block;
  box-sizing: border-box;
  min-width: 16rem;
`;

const activeStyle = css`
  background-color: ${lighten(0.05, offWhite)};
  border-left-color: ${orange};
`;

const LI = styled.li`
  padding-left: 8px;
  border-left: 2px solid ${white};
  background-color: ${white};
  outline: 0;

  &:not(:last-child) ${/* sc-selector */ Content} {
    border-bottom: 1px solid ${offWhite};
  }

  ${({ hoverable }) =>
    hoverable &&
    css`
      &:hover,
      &:focus {
        ${activeStyle};
      }
    `};
  ${({ active }) => active && activeStyle};
`;

const Wrapper = LI.extend`
  display: flex;
  align-items: top;
  cursor: pointer;
`;

const Icon = styled.div`
  margin-top: 12px;
  margin-right: 10px;
`;

export const Item = ({ icon, children, ...rest }) => (
  <Wrapper {...rest}>
    {icon && <Icon>{icon}</Icon>}
    <Content>{children}</Content>
  </Wrapper>
);

const List = ({ children, items, hoverable, unique, ...rest }) => (
  <UL {...rest}>
    {items.map((data, index) =>
      children({
        data,
        Item,
        index,
        getProps: props => ({
          ...props,
          hoverable,
          key: unique ? data[unique] : index,
          tabIndex: 0,
        }),
      })
    )}
  </UL>
);

Item.defaultProps = {
  icon: null,
  children: null,
};

Item.propTypes = {
  icon: node,
  children: node,
};

List.defaultProps = {
  hoverable: false,
  unique: '',
  children: noop,
};

List.propTypes = {
  unique: string,
  items: arrayOf(shape({})).isRequired,
  hoverable: bool,
  children: func,
};

export default List;
