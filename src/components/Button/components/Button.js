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

const IconWrapper = styled.div`
  margin: -0.5em 0;
`;

const Text = styled.span`
  margin: ${({ iconPosition }) =>
    iconPosition === 'before' ? '0 0 0 10px' : '0 10px 0 0'};
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
          background-color: ${({ solid }) =>
            solid ? primary.main : 'initial'};
          border-color: ${primary.main};
          color: ${({ solid }) => (solid ? white : primary.main)};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${({ solid }) => (solid ? white : primary.main)};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${({ solid }) =>
              solid ? primary['800'] : primary.main};
            border-color: ${({ solid }) =>
              solid ? primary['800'] : primary.main};
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
      case 'secondary':
        return css`
          background-color: ${({ solid }) =>
            solid ? secondary.main : 'initial'};
          border-color: ${secondary.main};
          color: ${({ solid }) => (solid ? white : secondary.main)};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${({ solid }) => (solid ? white : secondary.main)};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${({ solid }) =>
              solid ? secondary['800'] : secondary.main};
            border-color: ${({ solid }) =>
              solid ? secondary['800'] : secondary.main};
            color: ${white};

            & ${/* sc-selector */ SpinnerWrapper} {
              color: ${white};
            }
          }

          &:active:enabled,
          &:focus:enabled {
            box-shadow: 0 0 0 4px ${rgba(secondary.main, 0.2)};
          }
        `;
      case 'danger':
        return css`
          background-color: ${({ solid }) =>
            solid ? valencia.main : 'initial'};
          border-color: ${valencia.main};
          color: ${({ solid }) => (solid ? white : valencia.main)};

          & ${/* sc-selector */ SpinnerWrapper} {
            color: ${({ solid }) => (solid ? white : valencia.main)};
          }

          &:hover:enabled,
          &:active:enabled {
            background-color: ${({ solid }) =>
              solid ? valencia['800'] : valencia.main};
            border-color: ${({ solid }) =>
              solid ? valencia['800'] : valencia.main};
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
 * Button component is used for actions in forms, dialogs, and more with multiple sizes and states.
 */
const Button = ({
  icon,
  iconPosition,
  isLoading,
  disabled,
  children,
  ...rest
}) => {
  if (icon) {
    return (
      <StyledButton isLoading={isLoading} disabled={disabled} {...rest}>
        {isLoading && (
          <SpinnerWrapper>
            <Spinner color="currentColor" />
          </SpinnerWrapper>
        )}
        {iconPosition === 'before' && <IconWrapper>{icon}</IconWrapper>}
        <Text iconPosition={iconPosition}>{children}</Text>
        {iconPosition === 'after' && <IconWrapper>{icon}</IconWrapper>}
      </StyledButton>
    );
  }
  return (
    <StyledButton isLoading={isLoading} disabled={disabled} {...rest}>
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
  disabled: false,
  size: null,
  variant: 'default',
  solid: false,
  block: false,
  icon: null,
  iconPosition: 'after',
  type: 'button',
};

const propTypes = {
  /** Loading status for AJAX calls, show spinner when it is `true` */
  isLoading: bool,
  /** Disable the button if it is `true` */
  disabled: bool,
  /** Size of Button component */
  size: oneOf(['small', 'large', 'xlarge']),
  /** Variant of Button component */
  variant: oneOf(['default', 'primary', 'secondary', 'danger', 'link']),
  /** `true` for showing as solid background color. Only apply if variant is `primary`,
   *  `secondary` or `danger`. */
  solid: bool,
  /** Fit the width to its parent width when it is `true` */
  block: bool,
  /** Custom element shown next to the label */
  icon: node,
  /** Custom element position, before or after the label */
  iconPosition: oneOf(['before', 'after']),
  /** @ignore */
  children: node.isRequired,
  /** @ignore */
  type: oneOf(['button', 'submit', 'reset']),
};

Button.propTypes = propTypes;

export function withComponent(Comp) {
  return StyledButton.withComponent(props => {
    const propsToFilter = Object.keys(propTypes);
    const filteredProps = omit(props, propsToFilter);
    return <Comp {...filteredProps}>{props.children}</Comp>;
  });
}

export default Button;
