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
  line-height: 20px;

  ${({ variant }) => {
    switch (variant) {
      case 'small':
        return css`
          padding: 6px 0 6px 0;
        `;
      case 'large':
      default:
        return css`
          padding: 12px 0 12px 0;
        `;
    }
  }};
`;

const UL = styled.ul`
  ${resetList} box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22);
  display: inline-block;
  box-sizing: border-box;
  ${({ variant }) => {
    switch (variant) {
      case 'small':
        return css`
          min-width: 12.5rem;
        `;
      case 'large':
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
  padding-left: 8px;
  border-left: 2px solid ${white};
  background-color: ${white};
  outline: 0;

  ${({ variant }) => {
    switch (variant) {
      case 'small':
        return css`
          padding-right: 6px;
        `;
      case 'large':
      default:
        return css`
          padding-right: 20px;
        `;
    }
  }};

  &:not(:last-child) ${/* sc-selector */ Content} {
    ${({ variant }) => {
      switch (variant) {
        case 'small':
          return css`
            border-bottom: 0;
          `;
        case 'large':
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
  ${({ variant }) => {
    switch (variant) {
      case 'small':
        return css`
          margin: 7.5px 6px 0 0;
        `;
      case 'large':
      default:
        return css`
          margin-top: 12px;
          margin-right: 10px;
        `;
    }
  }};
`;

export const Item = ({ icon, variant, children, options, ...rest }) => (
  <Wrapper variant={variant} {...rest}>
    {icon && <Icon variant={variant}>{icon}</Icon>}
    <Content variant={variant}>{children}</Content>
    {options}
  </Wrapper>
);

const List = ({ children, items, hoverable, unique, variant, ...rest }) => (
  <UL variant={variant} {...rest}>
    {items.map((data, index) =>
      children({
        data,
        Item,
        index,
        getProps: props => ({
          ...props,
          hoverable,
          variant,
          key: unique ? data[unique] : index,
          tabIndex: 0,
        }),
      })
    )}
  </UL>
);

Item.defaultProps = {
  icon: null,
  variant: null,
  children: null,
  options: null,
};

Item.propTypes = {
  icon: node,
  variant: string,
  children: node,
  options: node,
};

List.defaultProps = {
  hoverable: false,
  unique: '',
  variant: null,
  children: noop,
};

List.propTypes = {
  unique: string,
  items: arrayOf(shape({})).isRequired,
  hoverable: bool,
  variant: string,
  children: func,
};

export default List;
