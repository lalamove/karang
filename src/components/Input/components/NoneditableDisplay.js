import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const DisplayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  min-height: 20px;
  margin: 14px 8px;
  padding: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

// text-overflow: ellipsis doesn't work with flexbox
const OverflownMessage = styled.div`
  display: block;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
`;

const NoneditableDisplay = props => {
  const { value, ...remainProps } = props;
  return (
    <DisplayContainer {...remainProps}>
      <OverflownMessage>{value}</OverflownMessage>
    </DisplayContainer>
  );
};

NoneditableDisplay.propTypes = {
  value: string.isRequired,
};

export default NoneditableDisplay;
