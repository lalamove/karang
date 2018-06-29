import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { red } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';
import ErrorIcon from 'icons/ErrorIcon';

const Container = styled.div`
  font-family: ${primaryFonts};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

const Text = styled.span`
  color: ${red};
  font-size: 12px;
`;

const ErrorMessage = ({ message }) => (
  <Container>
    <Text>{message}</Text>
    <ErrorIcon color={red} size={13} />
  </Container>
);

ErrorMessage.propTypes = {
  message: string,
};

ErrorMessage.defaultProps = {
  message: '',
};

export default ErrorMessage;
