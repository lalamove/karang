import React, { forwardRef } from 'react';

import styled from 'styled-components';
import { offWhite } from 'styles/colors';
import MagnifierIcon from 'icons/MagnifierIcon';
import TextInput from './TextInput';

const SearchContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 24px;
  border: 1px solid ${offWhite};
  height: 30px;
  padding-left: 14px;
`;

const StyledTextInput = styled(TextInput)`
  line-height: 1.143em; /* results in 16px with font size 14px */
  min-width: 20em;
  padding-right: 0.5em;
  margin-left: 10px;
`;

const SearchInput = forwardRef(({ ...remainProps }, ref) => (
  <SearchContainer>
    <MagnifierIcon size={20} />
    <StyledTextInput ref={ref} {...remainProps} />
  </SearchContainer>
));

export default SearchInput;
