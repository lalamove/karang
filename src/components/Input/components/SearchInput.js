import React, { Component, forwardRef } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

import noop from 'utils/noop';
import { mineShaft, nobel, primary } from 'styles/colors';
import { fontSize } from 'styles/fonts';
import SearchIcon from 'components/Icon/icons/content/search';
import TextInput from './TextInput';

const Container = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  padding: 0 1em;
  border-radius: 24px;
  border: 1px solid ${nobel.main};
  font-size: ${fontSize.regular};

  ${({ focused }) =>
    focused &&
    `border: 1px solid ${primary.main};
    box-shadow: 0 0 0 4px ${rgba(primary.main, 0.2)};
    `};
`;

const SCTextInput = styled(TextInput)`
  min-width: 20em;
  padding: 0;
  margin-left: 10px;
`;

const propTypes = {
  /** Type of input field to render, check
   *  [this](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) for more types */
  type: string,
  /** Specify a text that appears in the input field when it is empty */
  placeholder: string,
  /** Name of input field, which is submitted with the value as part of form data */
  name: string,
  /**
   * Callback function, to be executed when user focus on the component
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onFocus: func,
  /**
   * Callback function, to be executed when user blur on the component
   *
   * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
   */
  onBlur: func,
};

const defaultProps = {
  type: 'text',
  placeholder: null,
  name: null,
  onFocus: noop,
  onBlur: noop,
};

class Comp extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  state = {
    focused: false,
  };

  onFocus = e => {
    const { onFocus } = this.props;
    this.setState({ focused: true });
    onFocus(e);
  };

  onBlur = e => {
    const { onBlur } = this.props;
    this.setState({ focused: false });
    onBlur(e);
  };

  render() {
    const { focused } = this.state;
    // eslint-disable-next-line react/prop-types
    const { forwardedRef, onFocus, onBlur, ...props } = this.props;
    return (
      <Container focused={focused}>
        <SearchIcon color={mineShaft['900']} size={20} />
        <SCTextInput
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          innerRef={forwardedRef}
          {...props}
        />
      </Container>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
const SearchInput = forwardRef((props, ref) => (
  <Comp {...props} forwardedRef={ref} />
));

// Ugly fix for React Styleguidist as it cannot recognize forwardRef
// const SearchInput = props => <CompWithRef {...props} />;
SearchInput.displayName = 'SearchInput';
SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
