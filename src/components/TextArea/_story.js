import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from './index';

// eslint-disable-next-line
class TextAreaWrapper extends Component {
  render() {
    return (
      <Fragment>
        <TextArea
          name="Comments"
          placeholder="+ Add any important instructions about your delivery"
          style={{ width: '300px', height: '96px' }}
          maxLength="10"
          characterLimitMsgGenerator={charactersLeft =>
            `Prop generated characters left message: ${charactersLeft}`
          }
          exceedLimitMsgGenerator={excessCharacters =>
            `Prop generated excess message: ${excessCharacters}`
          }
          error="Prop generated error"
          disableForceLimit
        />
        <br />
        <br />
        <TextArea
          name="Comments"
          placeholder="By default, force limit applies"
          style={{ width: '300px', height: '96px' }}
          maxLength="5"
        />
        <br />
        <br />
        <TextArea
          name="Comments"
          placeholder="No maxLength, hence no message display"
          style={{ width: '300px', height: '96px' }}
        />
      </Fragment>
    );
  }
}

storiesOf('TextArea', module).add('TextArea', () => <TextAreaWrapper />);
