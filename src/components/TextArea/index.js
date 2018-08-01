import React, { Component } from 'react';
import { number, string, func, shape, bool } from 'prop-types';

import noop from 'utils/noop';
import {
  TextAreaContainer,
  InnerInputArea,
  CharacterLimitDisplay,
} from './components/styles';
import withErrorMessage from 'hoc/withErrorMessage';

// Presentational Component (Layout)
const PresentationalTextArea = props => {
  const {
    characterLimit,
    displayedCharacterLimitMsg,
    charactersLeft,
    style,
    error,
    focused,
    ...remainProps
  } = props;
  return (
    <TextAreaContainer style={style} error={error} focused={focused}>
      <InnerInputArea hasCharacterLimit={!!characterLimit} {...remainProps} />
      <CharacterLimitDisplay>
        {displayedCharacterLimitMsg}
      </CharacterLimitDisplay>
    </TextAreaContainer>
  );
};

PresentationalTextArea.propTypes = {
  characterLimit: number,
  displayedCharacterLimitMsg: string,
  charactersLeft: number,
  error: string,
  focused: bool,
  style: shape({}),
};

PresentationalTextArea.defaultProps = {
  characterLimit: null,
  displayedCharacterLimitMsg: null,
  charactersLeft: null,
  style: {},
  error: null,
  focused: false,
};

// HOC
const PresentationalTextAreaWithError = withErrorMessage(
  PresentationalTextArea
);

// Container Component (Logic)
class TextArea extends Component {
  static propTypes = {
    characterLimit: number,
    onChange: func,
    style: shape({}),
    errorMsg: string,
    characterLimitMsgGenerator: func,
    exceedLimitMsgGenerator: func,
  };
  static defaultProps = {
    characterLimit: null,
    onChange: noop,
    style: {},
    errorMsg: 'Character limit exceeded',
    characterLimitMsgGenerator: charactersLeft =>
      `Characters left: ${charactersLeft}`,
    exceedLimitMsgGenerator: excessCharacters =>
      `Excess characters: ${excessCharacters}`,
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
      errorMsg,
      onChange: defaultOnChange,
      characterLimitMsgGenerator: defaultCharacterLimitMsgGenerator,
      exceedLimitMsgGenerator: defaultExceedLimitMsgGenerator,
      ...remainProps
    } = this.props;
    let displayedCharacterLimitMsg;
    if (characterLimit) {
      displayedCharacterLimitMsg =
        charactersLeft >= 0
          ? defaultCharacterLimitMsgGenerator(charactersLeft)
          : defaultExceedLimitMsgGenerator(-charactersLeft);
    } else {
      displayedCharacterLimitMsg = null;
    }
    return (
      <PresentationalTextAreaWithError
        characterLimit={characterLimit}
        charactersLeft={charactersLeft}
        onChange={this.onTextAreaChange}
        focused={focused}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        error={charactersLeft < 0 ? errorMsg : null}
        displayedCharacterLimitMsg={displayedCharacterLimitMsg}
        {...remainProps}
      />
    );
  }
}

export default TextArea;
