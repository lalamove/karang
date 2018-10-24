import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

import { red } from 'styles/colors';
import { fontSize } from 'styles/fonts';
import Icon from 'components/Icon';

const Container = styled.div`
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  line-height: 1.4;
  text-align: left;
`;

const Text = styled.span`
  color: ${red};
  font-size: ${fontSize.small};
`;

const IconWrapper = styled.span`
  float: right;
  margin-left: 1em;
`;

const ErrorMessage = ({ error }) =>
  error &&
  error.length > 0 && (
    <Container>
      <IconWrapper>
        <Icon type="warning" color={red} size={13} />
      </IconWrapper>
      <Text>{error}</Text>
    </Container>
  );

ErrorMessage.propTypes = {
  /** Error message */
  error: string,
};

ErrorMessage.defaultProps = {
  error: null,
};

export default ErrorMessage;
