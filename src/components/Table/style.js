import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { fontSize, fontWeight } from 'styles/fonts';
import { offWhite, orange, lightGray, gray } from 'styles/colors';

const arrowMap = {
  default: '2195',
  asc: '2191',
  desc: '2193',
};

export const ColTitle = styled.div`
  padding: 0.5em 1em;
  color: ${lightGray};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.bold};
  text-align: inherit;
  user-select: none;

  ${({ onClick, sorted }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        background: ${lighten(0.05, offWhite)};
      }

      ${sorted &&
        css`&:after {
        content: '\\${arrowMap[sorted]}';
        margin-left: 0.5em;
        ${sorted !== 'default' &&
          css`
            color: ${gray};
          `}
      }`};
    `};
`;

export const SCTable = styled.table`
  width: 100%;
  border-spacing: 0;
  line-height: 1.4;

  th {
    border-top: 1px ${offWhite} solid;
    border-bottom: 1px ${offWhite} solid;
  }

  tbody td {
    padding: 1em;
    vertical-align: top;

    &:first-of-type {
      border-left: 4px solid transparent;
    }
  }
`;

export const Row = styled.tr`
  ${({ alternate }) =>
    alternate &&
    css`
      &:nth-child(even) {
        background: ${lighten(0.08, offWhite)};
      }
    `} ${({ hoverable }) =>
    hoverable &&
    css`
      &:hover {
        background: ${lighten(0.05, offWhite)};

        > td:first-of-type {
          border-left-color: ${orange};
        }
      }
    `};
`;
