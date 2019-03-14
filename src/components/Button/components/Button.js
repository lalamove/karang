import React from 'react';
import { bool, oneOf, node } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import Spinner from 'components/Spinner';
import omit from 'utils/omit';
import {
  primary,
  secondary,
  valencia,
  nobel,
  mineShaft,
  white,
} from 'styles/colors';
import Base from './style';

const Text = styled.span`
  margin-right: 10px;
`;

const IconWrapper = styled.div`
  margin: -0.5em 0;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledButton = styled(Base)`
  position: relative;
  display: ${({ block }) => (block ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  ${({ block }) => block && 'width: 100%;'};

  /* size */
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 0.25em 1em;
        `;
      case 'large':
        return css`
          padding: 0.75em 1em;
          font-size: 16px;
          font-weight: 700;
        `;
      case 'xlarge':
        return css`
          padding: 0.9em 1em;
          font-size: 18px;
          font-weight: 700;
        `;
      default:
        return css``;
    }
  }}

  /* type */
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${primary.main};
          border-color: ${primary.main};
          color: ${white};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${white};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${primary['800']};
            border-color: ${primary['800']};
          }

          &:active:enabled,
          &:focus:enabled {
            box-shadow: 0 0 0 4px ${rgba(primary.main, 0.2)};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${secondary.main};
          border-color: ${secondary.main};
          color: ${white};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${white};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${secondary['800']};
            border-color: ${secondary['800']};
          }

          &:active:enabled,
          &:focus:enabled {
            box-shadow: 0 0 0 4px ${rgba(secondary.main, 0.2)};
          }
        `;
      case 'outline':
        return css`
          color: ${primary.main};
          border-color: ${primary.main};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${primary.main};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${primary.main};
            border-color: ${primary.main};
            color: ${white};

            & ${/* sc-selector */ SpinnerWrapper} {
              color: ${white};
            }
          }

          &:active:enabled,
          &:focus:enabled {
            box-shadow: 0 0 0 4px ${rgba(primary.main, 0.2)};
          }
        `;
      case 'dangerOutline':
        return css`
          color: ${valencia.main};
          border-color: ${valencia.main};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${valencia.main};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${valencia.main};
            border-color: ${valencia.main};
            color: ${white};

            & ${/* sc-selector */ SpinnerWrapper} {
              color: ${white};
            }
          }

          &:active:enabled,
          &:focus:enabled {
            box-shadow: 0 0 0 4px ${rgba(valencia.main, 0.2)};
          }
        `;
      case 'danger':
        return css`
          background-color: ${valencia.main};
          border-color: ${valencia.main};
          color: ${white};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${white};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${valencia['800']};
            border-color: ${valencia['800']};
          }

          &:active:enabled,
          &:focus:enabled {
            box-shadow: 0 0 0 4px ${rgba(valencia.main, 0.2)};
          }
        `;
      case 'link':
        return css`
          border-color: transparent;
          color: ${primary.main};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${primary.main};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${primary['050']};
          }

          &:active:enabled,
          &:focus:enabled {
            box-shadow: 0 0 0 4px ${rgba(primary['050'], 0.2)};
          }
        `;
      default:
        return css`
          border-color: ${nobel.main};
          color: ${mineShaft['800']};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${mineShaft['800']};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${nobel['100']};
          }

          &:active:enabled,
          &:focus:enabled {
            box-shadow: 0 0 0 4px ${rgba(nobel.main, 0.2)};
          }
        `;
    }
  }}

  /* loading */
  ${({ isLoading }) =>
    isLoading &&
    css`
      color: rgba(0, 0, 0, 0) !important;
    `}
`;

/**
 * Button component is the button component for actions in forms, dialogs, and more with
 * multiple sizes and states.
 */
const Button = ({ icon, isLoading, children, ...rest }) => {
  if (icon) {
    return (
      <StyledButton isLoading={isLoading} disabled={isLoading} {...rest}>
        <Text>{children}</Text>
        <IconWrapper>{icon}</IconWrapper>
      </StyledButton>
    );
  }
  return (
    <StyledButton isLoading={isLoading} disabled={isLoading} {...rest}>
      {isLoading && (
        <SpinnerWrapper>
          <Spinner color="currentColor" />
        </SpinnerWrapper>
      )}
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  size: null,
  variant: 'default',
  block: false,
  icon: null,
  type: 'button',
};

Button.propTypes = {
  /** Loading status for AJAX calls, show spinner when it is `true`. This also disables the
   *  button. */
  isLoading: bool,
  /** Size of Button component */
  size: oneOf(['small', 'large', 'xlarge']),
  /** Variant of Button component */
  variant: oneOf([
    'default',
    'primary',
    'secondary',
    'outline',
    'danger',
    'dangerOutline',
    'link',
  ]),
  /** Fit the width to its parent width when it is `true` */
  block: bool,
  /** Element shown next to the text */
  icon: node,
  /** @ignore */
  children: node.isRequired,
  /** @ignore */
  type: oneOf(['button', 'submit', 'reset']),
};

export function withComponent(Comp) {
  return StyledButton.withComponent(props => {
    const propsToFilter = Object.keys(Button.propTypes);
    const filteredProps = omit(props, propsToFilter);
    return <Comp {...filteredProps}>{props.children}</Comp>;
  });
}

export default Button;
