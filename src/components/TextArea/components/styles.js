import styled from 'styled-components';

import { orange, lightGray, red } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const TextAreaContainer = styled.div`
  height: calc(100% - 24px);
  width: calc(100% - 24px);
  padding: 11px;
  border: 1px solid ${lightGray};
  ${({ focused }) =>
    focused &&
    `
    border: 1px solid ${orange};
    `};
  ${({ error }) =>
    error &&
    `
    border: 1px solid ${red};
    `};
`;

const CharacterLimitDisplay = styled.div`
  font-size: ${fontSize.small};
  font-family: ${primaryFonts};
  line-height: 16px;
  color: lightGray;
`;

const InnerInputArea = styled.textarea`
  font-family: ${primaryFonts};
  width: 100%;
  border: 0px solid transparent;
  padding: 0px;
  resize: none;
  &:focus {
    outline-width: 0;
  }

  ${({ hasCharacterLimit }) =>
    hasCharacterLimit ? `height: calc(100% - 11px);` : `height: 100%;`};

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: lightGray;
    font-size: ${fontSize.regular};
    font-family: ${primaryFonts};
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: lightGray;
    font-size: ${fontSize.regular};
    font-family: ${primaryFonts};
  }

  &:-ms-input-placeholder {
    /* IE 10+ */
    color: lightGray;
    font-size: ${fontSize.regular};
    font-family: ${primaryFonts};
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: lightGray;
    font-size: ${fontSize.regular};
    font-family: ${primaryFonts};
  }
`;

export { TextAreaContainer, CharacterLimitDisplay, InnerInputArea };
