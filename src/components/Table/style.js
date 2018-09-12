import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { fontSize, fontWeight } from 'styles/fonts';
import { offWhite, orange, silver } from 'styles/colors';

export const SCTable = styled.table`
  width: 100%;
  border-spacing: 0;
  line-height: 1.4;

  thead th {
    padding: 0.5em 1em;
    border-top: 1px ${offWhite} solid;
    border-bottom: 1px ${offWhite} solid;
    color: ${silver};
    font-size: ${fontSize.small}px;
    font-weight: ${fontWeight.bold};
    text-align: left;
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
  &:nth-child(even) {
    background: ${lighten(0.08, offWhite)};
  }
  ${({ hoverable }) =>
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
