import styled from 'styled-components';

import { orange, lightGray, red, offWhite } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 11px 11px 6px 11px;
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
  font-size: ${fontSize.small};
  font-family: ${primaryFonts};
  line-height: 16px;
  color: ${lightGray};
`;

const placeholderStyle = `
  color: ${lightGray};
  font-size: ${fontSize.regular};
  font-family: ${primaryFonts};
`;

const InnerInputArea = styled.textarea`
  display: block;
  flex-grow: 1;
  font-family: ${primaryFonts};
  width: 100%;
  border: 0px solid transparent;
  padding: 0px;
  resize: none;
  &:focus {
    outline-width: 0;
  }

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    ${placeholderStyle};
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    ${placeholderStyle};
  }

  &:-ms-input-placeholder {
    /* IE 10+ */
    ${placeholderStyle};
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    ${placeholderStyle};
  }
`;

export { TextAreaContainer, CharacterLimitDisplay, InnerInputArea };
