import React, { Component } from 'react';
import styled from 'styled-components';
import { number, string, func, shape, bool } from 'prop-types';

import noop from 'utils/noop';
import { orange, lightGray, red } from 'styles/colors';
import { fontSize } from 'styles/fonts';

import withErrorMessage from 'hoc/withErrorMessage';

const TextAreaContainer = styled.div`
  height: calc(100% - 24px);
  width: calc(100% - 24px);
  padding: 11px;
  border: 1px solid ${lightGray};
  ${({ focused }) =>
    focused &&
    `
    border: 1px solid ${orange};
    `};
  ${({ error }) =>
    error &&
    `
    border: 1px solid ${red};
    `};
`;

const CharacterLimitDisplay = styled.div`
  font-size: ${fontSize.small};
  font-family: 'PingFangHK-Regular';
  line-height: 16px;
  color: lightGray;
`;

const StyledArea = styled.textarea`
  width: 100%;
  height: calc(100% - 11px);
  border: 0px solid transparent;
  padding: 0px;
  resize: none;
  &:focus {
    outline-width: 0;
  }

  ${({ hasCharacterLimit }) =>
    hasCharacterLimit ? `height: calc(100% - 11px);` : `height: 100%;`};

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: lightGray;
    font-size: ${fontSize.regular};
    font-family: 'PingFangHK-Regular';
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: lightGray;
    font-size: ${fontSize.regular};
    font-family: 'PingFangHK-Regular';
  }

  &:-ms-input-placeholder {
    /* IE 10+ */
    color: lightGray;
    font-size: ${fontSize.regular};
    font-family: 'PingFangHK-Regular';
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: lightGray;
    font-size: ${fontSize.regular};
    font-family: 'PingFangHK-Regular';
  }
`;

const PresentationalTextArea = props => {
  const {
    characterLimit,
    characterLimitMessage,
    charactersLeft,
    style,
    error,
    focused,
    ...remainProps
  } = props;
  const characterLimitDisplayOrNull = characterLimit ? (
    <CharacterLimitDisplay>
      {characterLimitMessage} {charactersLeft}
    </CharacterLimitDisplay>
  ) : null;
  return (
    <TextAreaContainer style={style} error={error} focused={focused}>
      <StyledArea hasCharacterLimit={!!characterLimit} {...remainProps} />
      {characterLimitDisplayOrNull}
    </TextAreaContainer>
  );
};

PresentationalTextArea.propTypes = {
  characterLimit: number,
  characterLimitMessage: string,
  charactersLeft: number,
  error: string,
  focused: bool,
  style: shape({}),
};

PresentationalTextArea.defaultProps = {
  characterLimit: null,
  characterLimitMessage: null,
  charactersLeft: null,
  style: {},
  error: null,
  focused: false,
};

const PresentationalTextAreaWithError = withErrorMessage(
  PresentationalTextArea
);

class TextArea extends Component {
  static propTypes = {
    characterLimit: number,
    onChange: func,
    style: shape({}),
    errorMessage: string,
    characterLimitMessage: string,
  };
  static defaultProps = {
    characterLimit: null,
    onChange: noop,
    style: {},
    errorMessage: 'Character limit exceeded',
    characterLimitMessage: 'Characters left: ',
  };
  constructor(props) {
    super(props);
    this.state = {
      charactersLeft: props.characterLimit,
      focused: false,
    };
  }
  onTextAreaChange = e => {
    if (this.props.characterLimit) {
      const charactersLeft = this.props.characterLimit - e.target.value.length;
      this.setState({
        charactersLeft,
      });
    }
    this.props.onChange(e);
  };
  onFocus = e => {
    this.setState({
      focused: true,
    });
  };
  onBlur = e => {
    this.setState({
      focused: false,
    });
  };
  render() {
    const { charactersLeft, focused } = this.state;
    const {
      characterLimit,
      errorMessage,
      onChange: defaultOnChange,
      ...remainProps
    } = this.props;
    return (
      <PresentationalTextAreaWithError
        characterLimit={characterLimit}
        charactersLeft={charactersLeft}
        onChange={this.onTextAreaChange}
        focused={focused}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        error={charactersLeft < 0 ? errorMessage : null}
        {...remainProps}
      />
    );
  }
}

export default TextArea;
