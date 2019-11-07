import React from 'react';
import { node, bool } from 'prop-types';
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
  ${({ rtl }) =>
    rtl &&
    css`
      direction: rtl;
    `};
`;

const Text = styled.span`
  flex-grow: 1;
  width: 0;
  color: ${valencia.main};
  font-family: ${primaryFonts};
  font-size: ${fontSize.small};
`;

const IconWrapper = styled.span`
  ${({ rtl }) =>
    !rtl &&
    css`
      margin-left: 1em;
    `}
`;

const ErrorMessage = ({ error, rtl, ...rest }) =>
  error &&
  error.length > 0 && (
    <Container rtl={rtl} {...rest}>
      <Text>{error}</Text>
      <IconWrapper rtl={rtl}>
        <WarningIcon color={valencia.main} size={13} />
      </IconWrapper>
    </Container>
  );

ErrorMessage.propTypes = {
  error: node,
  rtl: bool,
};

ErrorMessage.defaultProps = {
  error: null,
  rtl: false,
};

export default ErrorMessage;
