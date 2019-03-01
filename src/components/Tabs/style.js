import styled from 'styled-components';
import { orange as primaryColor } from 'styles/colors';

export const TabBarContainer = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
`;

export const TabContainer = styled.li`
  display: inline-block;
  padding: 0;
  border-bottom: ${({ selected }) =>
    selected ? `2px solid ${primaryColor}` : 'none'};
`;

export const RoundedTabContainer = styled.li`
  display: inline-block;
  margin: 0 0.25em;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
