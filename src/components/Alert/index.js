import React from 'react';
import { string, func, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import InfoIcon from 'components/Icon/icons/alert/info';
import SuccessIcon from 'components/Icon/icons/alert/success';
import WarningIcon from 'components/Icon/icons/alert/warning';
import CloseIcon from 'components/Icon/icons/content/close';

import noop from 'utils/noop';
import {
  white,
  treePoppy,
  pictonBlue,
  valencia,
  mountainMeadow,
} from 'styles/colors';

const IconContainer = styled.div`
  margin: 0 0.5em 0 0;
`;

const Content = styled.div`
  flex: 1;
  line-height: 1.2em;

  & span {
    display: inline-block;
    margin: 2px;
  }

  & span:first-child {
    font-weight: bold;
  }
`;

const CloseButton = styled.button`
  appearance: none;
  padding: 0;
  border: none;
  margin: 0 0 0 1em;
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
  warning: WarningIcon,
  error: WarningIcon,
  success: SuccessIcon,
  info: InfoIcon,
};

/**
 * Alert component is used to give feedback to the user action or state changes.
 */
const Alert = ({
  type,
  variant,
  message,
  description,
  onDismiss,
  ...props
}) => {
  const Icon = icon[type];
  return (
    <Container type={type} variant={variant} {...props}>
      <IconContainer>
        <Icon color={white} size={24} />
      </IconContainer>
      <Content>
        <span>{message}</span>
        {description && <span>{description}</span>}
      </Content>
      {onDismiss !== noop && (
        <CloseButton onClick={onDismiss}>
          <CloseIcon color={white} size={20} />
        </CloseButton>
      )}
    </Container>
  );
};

Alert.propTypes = {
  /** Type of Alert component */
  type: oneOf(['warning', 'error', 'success', 'info']),
  /** Variant of Alert component, controlling the size of the Alert */
  variant: oneOf(['default', 'toast']),
  /** Title of the Alert message */
  message: string.isRequired, // eslint-disable-line react/no-typos
  /** Description of the Alert message */
  description: string,
  /** Callback function, to be executed when clicked close button. No close button if no
   *  function passed */
  onDismiss: func,
};

Alert.defaultProps = {
  type: 'info',
  variant: 'default',
  description: null,
  onDismiss: noop,
};

export default Alert;
