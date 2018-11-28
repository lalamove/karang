import React from 'react';
import { string, func, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import Icon from 'components/Icon';

import noop from 'utils/noop';
import {
  white,
  treePoppy,
  pictonBlue,
  valencia,
  mountainMeadow,
} from 'styles/colors';

const StyledIcon = styled(Icon)`
  margin: 0 0.5em 0 0;
`;

const Content = styled.div`
  flex: 1;
  line-height: 1.2em;

  & span {
    margin: 2px;
    display: inline-block;
  }

  & span:first-child {
    font-weight: bold;
  }
`;

const CloseButton = styled.button`
  appearance: none;
  margin: 0 0 0 1em;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.1em;
  color: ${white};

  ${({ type }) => {
    switch (type) {
      case 'warning':
        return css`
          background: ${rgba(treePoppy.main, 0.9)};
        `;
      case 'error':
        return css`
          background: ${rgba(valencia.main, 0.9)};
        `;
      case 'success':
        return css`
          background: ${rgba(mountainMeadow.main, 0.9)};
        `;
      case 'info':
      default:
        return css`
          background: ${rgba(pictonBlue.main, 0.9)};
        `;
    }
  }};

  ${({ variant }) =>
    variant === 'toast' &&
    css`
      width: 21em;
    `};
`;

const icon = {
  warning: 'warning',
  error: 'warning',
  success: 'tickMarkCircle',
  info: 'warning',
};

const Alert = ({ type, variant, message, description, onDismiss }) => (
  <Container type={type} variant={variant}>
    <StyledIcon type={icon[type]} color={white} size={24} />
    <Content>
      <span>{message}</span> <span>{description}</span>
    </Content>
    <CloseButton onClick={onDismiss}>
      <Icon type="cross" color={white} size={24} />
    </CloseButton>
  </Container>
);

Alert.propTypes = {
  type: string,
  variant: oneOf(['default', 'toast']),
  message: string.isRequired, // eslint-disable-line react/no-typos
  description: string,
  onDismiss: func,
};

Alert.defaultProps = {
  type: null,
  variant: 'default',
  description: null,
  onDismiss: noop,
};

export default Alert;
