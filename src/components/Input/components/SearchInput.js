import React, { forwardRef } from 'react';

import styled from 'styled-components';
import { offWhite } from 'styles/colors';
import { fontSize } from 'styles/fonts';
import MagnifierIcon from 'icons/Magnifier';
import TextInput from './TextInput';

const SearchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 24px;
  border: 1px solid ${offWhite};
  height: 30px;
  padding: 0 14px;
  font-size: ${fontSize.regular};
`;

const StyledTextInput = styled(TextInput)`
  min-width: 20em;
  padding: 0;
  margin-left: 10px;
`;

const SearchInput = forwardRef(({ ...remainProps }, ref) => (
  <SearchContainer>
    <MagnifierIcon size={20} />
    <StyledTextInput ref={ref} {...remainProps} />
  </SearchContainer>
));

export default SearchInput;
