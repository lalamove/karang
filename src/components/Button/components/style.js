import styled from 'styled-components';
import { fontSize } from 'styles/fonts';

const Base = styled.button`
  /* structure */
  appearance: none;
  display: block;
  padding: 0.5em 1em;

  /* style */
  border: 1px currentColor solid;
  background-color: transparent;
  border-radius: 2px;
  font-family: inherit;
  font-size: ${fontSize.regular};
  font-weight: 400;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  outline: 0;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:hover:enabled,
  &:focus:enabled {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
  }

  &:active:enabled {
    box-shadow: none;
  }
`;

export default Base;
