import React, { forwardRef } from 'react';
import { string } from 'prop-types';
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

const CompWithRef = forwardRef((props, ref) => (
  <Container>
    <Icon type="magnifyingGlass" color={black} size={20} />
    <SCTextInput innerRef={ref} {...props} />
  </Container>
));

// Ugly fix for React Styleguidist as it cannot recognize forwardRef
// eslint-disable-next-line react/prop-types
const SearchInput = ({ innerRef, ...props }) => <CompWithRef {...props} />;

SearchInput.propTypes = {
  /** Type of input field to render, check
   *  [this](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) for more types */
  type: string,
  /** Specify a text that appears in the input field when it is empty */
  placeholder: string,
  /** Name of input field, which is submitted with the value as part of form data */
  name: string,
};

SearchInput.defaultProps = {
  type: 'text',
  placeholder: null,
  name: null,
};

export default SearchInput;
