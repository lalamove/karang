import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { black, orange, offWhite, white } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';
import { arrayOf, bool, func, oneOf, node, string, shape } from 'prop-types';

import noop from 'utils/noop';

const resetList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Content = styled.div`
  flex: 1;
  font-family: ${primaryFonts};
  font-size: ${fontSize.regular};
  line-height: 20px;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 6px 6px 6px 0;
        `;
      default:
        return css`
          padding: 12px 20px 12px 0;
        `;
    }
  }};
`;

const UL = styled.ul`
  ${resetList} box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.22);
  display: inline-block;
  box-sizing: border-box;
  background-color: ${white};
  color: ${black};
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          min-width: 12.5rem;
        `;
      default:
        return css`
          min-width: 16rem;
        `;
    }
  }};
`;

const activeStyle = css`
  background-color: ${lighten(0.05, offWhite)};
  border-left-color: ${orange};
`;

const LI = styled.li`
  position: relative;
  padding-left: 8px;
  border-left: 2px solid transparent;
  outline: 0;

  ${({ size }) =>
    size === 'small' &&
    css`
      margin-top: 8px;
      margin-bottom: 4px;
      &:not(:first-child) {
        margin-top: 4px;
      }
      &:last-child {
        margin-bottom: 8px;
      }
    `};

  &:not(:last-child) ${/* sc-selector */ Content} {
    ${({ size }) => {
      switch (size) {
        case 'small':
          return css`
            border-bottom: 0;
          `;
        default:
          return css`
            border-bottom: 1px solid ${offWhite};
          `;
      }
    }};
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
  align-self: center;
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          margin: 0 6px 0 0;
        `;
      default:
        return css`
          margin-top: 12px;
          margin-right: 10px;
        `;
    }
  }};
`;

export const Item = ({ icon, size, children, options, ...rest }) => (
  <Wrapper size={size} {...rest}>
    {icon && <Icon size={size}>{icon}</Icon>}
    <Content size={size}>{children}</Content>
    {options}
  </Wrapper>
);

const List = ({ children, items, hoverable, unique, size, ...rest }) => (
  <UL size={size} {...rest}>
    {items.map((data, index) =>
      children({
        data,
        Item,
        index,
        getProps: props => ({
          ...props,
          hoverable,
          size,
          key: unique ? data[unique] : index,
          tabIndex: 0,
        }),
      })
    )}
  </UL>
);

Item.defaultProps = {
  icon: null,
  size: null,
  children: null,
  options: null,
};

Item.propTypes = {
  icon: node,
  size: string,
  children: node,
  options: node,
};

List.defaultProps = {
  hoverable: false,
  unique: '',
  size: null,
  children: noop,
};

List.propTypes = {
  unique: string,
  items: arrayOf(shape({})).isRequired,
  hoverable: bool,
  size: oneOf(['small']),
  children: func,
};

export default List;
