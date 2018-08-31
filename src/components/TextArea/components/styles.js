import styled from 'styled-components';

import { orange, lightGray, red, offWhite } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const TextAreaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1em;
  padding-bottom: 3em;
  border: 1px solid ${offWhite};
  ${({ error }) =>
    error
      ? `
    border: 1px solid ${red};
    `
      : `
    &:focus-within {
      border: 1px solid ${orange};
    }
    `};
`;

const CharacterLimitDisplay = styled.div`
  position: absolute;
  bottom: 0.8rem;
  left: 1rem;
  color: ${lightGray};
  font-family: ${primaryFonts};
  font-size: ${fontSize.small};
  line-height: 1.4;
`;

const placeholderStyle = `
  color: ${lightGray};
  font-size: ${fontSize.regular};
  font-family: ${primaryFonts};
`;

const InnerInputArea = styled.textarea`
  display: block;
  flex: 1 1 auto;
  width: 100%;
  padding: 0;
  border: 0;
  font-family: ${primaryFonts};
  resize: none;

  &::placeholder {
    /* Chrome/Opera/Safari */
    ${placeholderStyle};
  }

  &:focus {
    outline-width: 0;
  }
`;

export { TextAreaContainer, CharacterLimitDisplay, InnerInputArea };
