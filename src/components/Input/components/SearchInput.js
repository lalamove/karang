import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { black, offWhite } from 'styles/colors';
import { fontSize } from 'styles/fonts';
import Icon from 'components/Icon';
import TextInput from './TextInput';

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 24px;
  border: 1px solid ${offWhite};
  height: 30px;
  padding: 0 1em;
  font-size: ${fontSize.regular};
`;

const SCTextInput = styled(TextInput)`
  min-width: 20em;
  padding: 0;
  margin-left: 10px;
`;

const SearchInput = forwardRef((props, ref) => (
  <Container>
    <Icon type="magnifyingGlass" color={black} size={20} />
    <SCTextInput innerRef={ref} {...props} />
  </Container>
));

export default SearchInput;
