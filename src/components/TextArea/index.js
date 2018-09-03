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
    displayedCharacterLimitMsg,
    charactersLeft,
    style,
    error,
    ...remainProps
  } = props;
  return (
    <TextAreaContainer style={style} error={error}>
      <InnerInputArea {...remainProps} />
      <CharacterLimitDisplay>
        {displayedCharacterLimitMsg}
      </CharacterLimitDisplay>
    </TextAreaContainer>
  );
};

PresentationalTextArea.propTypes = {
  maxLength: number,
  disableForceLimit: bool,
  displayedCharacterLimitMsg: string,
  charactersLeft: number,
  error: string,
  style: shape({}),
  value: string,
};

PresentationalTextArea.defaultProps = {
  maxLength: null,
  disableForceLimit: false,
  displayedCharacterLimitMsg: null,
  charactersLeft: null,
  style: {},
  error: null,
  value: '',
};

// HOC
const PresentationalTextAreaWithError = withErrorMessage(
  PresentationalTextArea
);

// Container Component (Logic)
class TextArea extends Component {
  static propTypes = {
    maxLength: number,
    disableForceLimit: bool,
    onChange: func,
    error: string,
    characterLimitMsgGenerator: func,
    exceedLimitMsgGenerator: func,
    value: string,
  };
  static defaultProps = {
    maxLength: null,
    disableForceLimit: false,
    onChange: noop,
    error: 'Character limit exceeded',
    characterLimitMsgGenerator: charactersLeft =>
      `Characters left: ${charactersLeft}`,
    exceedLimitMsgGenerator: excessCharacters =>
      `Excess characters: ${excessCharacters}`,
    value: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      charactersLeft: props.maxLength,
    };
  }

  componentDidMount() {
    if (this.props.value) {
      const charactersLeft = this.props.maxLength - this.props.value.length;
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ charactersLeft });
    }
  }

  onTextAreaChange = e => {
    if (this.props.maxLength) {
      const charactersLeft = this.props.maxLength - e.target.value.length;
      this.setState({
        charactersLeft,
      });
    }
    this.props.onChange(e);
  };

  render() {
    const { charactersLeft } = this.state;
    const {
      maxLength,
      disableForceLimit,
      error,
      onChange: __,
      characterLimitMsgGenerator,
      exceedLimitMsgGenerator,
      ...remainProps
    } = this.props;
    let displayedCharacterLimitMsg;
    if (maxLength) {
      displayedCharacterLimitMsg =
        charactersLeft >= 0
          ? characterLimitMsgGenerator(charactersLeft)
          : exceedLimitMsgGenerator(-charactersLeft);
    }
    return (
      <PresentationalTextAreaWithError
        maxLength={disableForceLimit ? null : maxLength}
        charactersLeft={charactersLeft}
        onChange={this.onTextAreaChange}
        error={charactersLeft < 0 ? error : null}
        displayedCharacterLimitMsg={displayedCharacterLimitMsg}
        {...remainProps}
      />
    );
  }
}

export default TextArea;
