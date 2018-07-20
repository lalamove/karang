import React, { Fragment } from 'react';
import styled from 'styled-components';
import Button from 'components/Button/index';
import noop from 'utils/noop';

import { bool, func, string } from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  min-width: 80px;
  width: auto;
  height: 32px;
  margin: 0 5px;
  white-space: nowrap;
`;

const ButtonContainer = props => (
  <Container>
    {props.isEditable ? (
      <Fragment>
        <StyledButton onClick={props.onCancelButtonClick} variant="link">
          {props.cancelBtnText}
        </StyledButton>
        <StyledButton
          onClick={props.onSaveButtonClick}
          variant="outline"
          innerRef={props.innerRef}
        >
          {props.saveBtnText}
        </StyledButton>
      </Fragment>
    ) : (
      <StyledButton onClick={props.onEditButtonClick} innerRef={props.innerRef}>
        {props.editBtnText}
      </StyledButton>
    )}
  </Container>
);

ButtonContainer.propTypes = {
  cancelBtnText: string,
  saveBtnText: string,
  editBtnText: string,
  isEditable: bool,
  onCancelButtonClick: func,
  onSaveButtonClick: func,
  onEditButtonClick: func,
  innerRef: func,
};

ButtonContainer.defaultProps = {
  cancelBtnText: 'Cancel',
  saveBtnText: 'Save',
  editBtnText: 'Edit',
  isEditable: true,
  onCancelButtonClick: noop,
  onSaveButtonClick: noop,
  onEditButtonClick: noop,
  innerRef: noop,
};

export default ButtonContainer;
