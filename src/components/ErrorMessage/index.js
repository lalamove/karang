import React from 'react';
import { node, string } from 'prop-types';
import styled, { css } from 'styled-components';

import { valencia } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';
import WarningIcon from 'components/Icon/icons/alert/warning';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  line-height: 1.4;
  direction: ${({ langDirection }) => langDirection};
`;

const Text = styled.span`
  flex-grow: 1;
  width: 0;
  color: ${valencia.main};
  font-family: ${primaryFonts};
  font-size: ${fontSize.small};
`;

const IconWrapper = styled.span`
  ${({ langDirection }) =>
    langDirection !== 'rtl' &&
    css`
      margin-left: 1em;
    `}
`;

const ErrorMessage = ({ error, langDirection, ...rest }) =>
  error &&
  error.length > 0 && (
    <Container langDirection={langDirection} {...rest}>
      <Text>{error}</Text>
      <IconWrapper langDirection={langDirection}>
        <WarningIcon color={valencia.main} size={13} />
      </IconWrapper>
    </Container>
  );

ErrorMessage.propTypes = {
  error: node,
  langDirection: string,
};

ErrorMessage.defaultProps = {
  error: null,
  langDirection: 'ltr',
};

export default ErrorMessage;
