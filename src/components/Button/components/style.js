import styled from 'styled-components';
import { primaryFonts, fontSize } from 'styles/fonts';

const Base = styled.button`
  /* structure */
  appearance: none;
  display: block;
  padding: 0.5em 1em;

  /* style */
  border: 1px currentColor solid;
  background-color: transparent;
  border-radius: 2px;
  font-family: ${primaryFonts};
  font-size: ${fontSize.regular};
  font-weight: 400;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  outline: 0;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Base;
