import React from 'react';
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
`;

const ButtonContainer = props => (
  <Container>
    {props.isEditable ? (
      <StyledButton onClick={props.onCancelButtonClick} variant="link">
        {props.cancelValue}
      </StyledButton>
    ) : null}
    <StyledButton
      onClick={
        props.isEditable ? props.onSaveButtonClick : props.onEditButtonClick
      }
      variant={props.isEditable ? 'outline' : null}
      innerRef={props.innerRef}
    >
      {props.isEditable ? props.saveValue : props.editValue}
    </StyledButton>
  </Container>
);

// separate the logic for Save and Edit button functions
ButtonContainer.propTypes = {
  cancelValue: string,
  saveValue: string,
  editValue: string,
  isEditable: bool,
  onCancelButtonClick: func,
  onSaveButtonClick: func,
  onEditButtonClick: func,
  innerRef: func,
};

ButtonContainer.defaultProps = {
  cancelValue: 'Cancel',
  saveValue: 'Save',
  editValue: 'Edit',
  isEditable: true,
  onCancelButtonClick: noop,
  onSaveButtonClick: func,
  onEditButtonClick: func,
  innerRef: noop,
};

export default ButtonContainer;
