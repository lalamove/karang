import React, { Component, forwardRef } from 'react';
import {
  number,
  string,
  func,
  shape,
  bool,
  oneOfType,
  object,
} from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import { lightGray } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';
import TextAreaComp from './components/TextArea';
import AnimatedBorder from 'components/AnimatedBorder';
import ErrorMessage from 'components/ErrorMessage';

const Wrapper = styled.div`
  display: inline-block;
`;

const SCAnimatedBorder = styled(AnimatedBorder)`
  flex-direction: column;
  padding: 1em;
  box-sizing: border-box;
`;

const CountMessage = styled.div`
  padding-top: 0.5em;
  color: ${lightGray};
  font-family: ${primaryFonts};
  font-size: ${fontSize.small};
`;

// Container Component (Logic)
class TextArea extends Component {
  static propTypes = {
    forwardedRef: oneOfType([func, object]),
    maxLength: number,
    allowExceed: bool, // TODO: Backward
    // disableForceLimit: bool,
    onChange: func,
    onFocus: func,
    onBlur: func,
    name: string,
    label: string,
    error: string,
    limitMsg: string,
    exceedLimitMsg: string,
    style: shape({}),
    className: string,
    // characterLimitMsgGenerator: func,
    // exceedLimitMsgGenerator: func,
  };

  static defaultProps = {
    forwardedRef: null,
    maxLength: null,
    allowExceed: false,
    // disableForceLimit: false,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    name: null,
    label: null,
    error: null,
    limitMsg: 'Characters left: {{charactersLeft}}',
    exceedLimitMsg: 'Exceed characters: {{charactersLeft}}',
    style: null,
    className: null,
    // error: 'Character limit exceeded',
    // characterLimitMsgGenerator: charactersLeft =>
    //   `Characters left: ${charactersLeft}`,
    // exceedLimitMsgGenerator: excessCharacters =>
    //   `Excess characters: ${excessCharacters}`,
  };

  static getDerivedStateFromProps({ value, defaultValue }) {
    return { dirty: !!(value || defaultValue) };
  }

  state = {
    focused: false,
    dirty: false,
  };

  componentDidMount() {
    // TODO: warn if placeholder & label exist at same time
  }

  onChange = e => {
    // if (this.props.maxLength) {
    //   const charactersLeft = this.props.maxLength - e.target.value.length;
    //   this.setState({
    //     charactersLeft,
    //   });
    // }
    this.props.onChange(e);
  };

  onFocus = e => {
    this.setState({ focused: true });
    this.props.onFocus(e);
  };

  onBlur = e => {
    this.setState({ focused: false });
    this.props.onBlur(e);
  };

  getReference = node => {
    this.input = node;
    const { forwardedRef } = this.props;
    if (forwardedRef) {
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else {
        forwardedRef.current = node;
      }
    }
  };

  render() {
    // const { charactersLeft } = this.state;
    // const {
    //   maxLength,
    //   disableForceLimit,
    //   error,
    //   onChange: __,
    //   characterLimitMsgGenerator,
    //   exceedLimitMsgGenerator,
    //   ...remainProps
    // } = this.props;
    // let displayedCharacterLimitMsg;
    // if (maxLength) {
    //   displayedCharacterLimitMsg =
    //     charactersLeft >= 0
    //       ? characterLimitMsgGenerator(charactersLeft)
    //       : exceedLimitMsgGenerator(-charactersLeft);
    // }

    const {
      name,
      label,
      error,
      maxLength,
      limitMsg,
      exceedLimitMsg,
      style,
      className,
      allowExceed,
      onChange,
      onFocus,
      onBlur,
      ...remainProps
    } = this.props;
    const { focused, dirty } = this.state;
    const count = this.input && this.input.value ? this.input.value.length : 0;
    const charactersLeft = maxLength - count;
    const message = charactersLeft >= 0 ? limitMsg : exceedLimitMsg;

    return (
      <Wrapper>
        <SCAnimatedBorder
          name={name}
          label={label}
          dirty={dirty}
          error={error !== null && error.length > 0}
          focused={focused}
          style={style}
          className={className}
        >
          <TextAreaComp
            name={name}
            label={label}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            maxLength={!allowExceed ? maxLength : undefined}
            {...remainProps}
            ref={this.getReference}
          />
          <CountMessage>
            {message
              .replace('{{charactersLeft}}', charactersLeft)
              .replace('{{count}}', count)}
          </CountMessage>
        </SCAnimatedBorder>
        <ErrorMessage error={error} />
      </Wrapper>
    );
  }
}

const Comp = forwardRef(({ innerRef, ...remainProps }, ref) => (
  <TextArea forwardedRef={ref} {...remainProps} />
));

export default Comp;
