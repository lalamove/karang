import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import { red } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';
import Icon from 'components/Icon';

const Container = styled.div`
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  line-height: 1.4;
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  color: ${red};
  font-family: ${primaryFonts};
  font-size: ${fontSize.small};
  flex-grow: 1;
  width: 0;
`;

const IconWrapper = styled.span`
  margin-left: 1em;
`;

const ErrorMessage = ({ error, ...rest }) =>
  error &&
  error.length > 0 && (
    <Container {...rest}>
      <Text>{error}</Text>
      <IconWrapper>
        <Icon type="warning" color={red} size={13} />
      </IconWrapper>
    </Container>
  );

ErrorMessage.propTypes = {
  error: node,
};

ErrorMessage.defaultProps = {
  error: null,
};

export default ErrorMessage;
