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
          characterLimit={10}
          characterLimitMsgGenerator={charactersLeft =>
            `Prop generated characters left message: ${charactersLeft}`
          }
          exceedLimitMsgGenerator={excessCharacters =>
            `Prop generated excess message: ${excessCharacters}`
          }
          errorMsg="Prop generated error msg"
        />
        <br />
        <br />
        <TextArea
          name="Comments"
          placeholder="+ Add any important instructions about your delivery"
          style={{ width: '300px', height: '96px' }}
          characterLimit={5}
        />
        <br />
        <br />
        <TextArea
          name="Comments"
          placeholder="No characterLimit, hence no message display"
          style={{ width: '300px', height: '96px' }}
        />
      </Fragment>
    );
  }
}

storiesOf('TextArea', module).add('TextArea', () => <TextAreaWrapper />);
