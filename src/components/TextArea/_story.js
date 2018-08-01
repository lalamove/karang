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
          style={{ width: '500px', height: '96px' }}
          characterLimit={10}
        />
        <br />
        <TextArea
          name="Comments"
          placeholder="+ Add any important instructions about your delivery"
          style={{ width: '500px', height: '96px' }}
        />
      </Fragment>
    );
  }
}

storiesOf('TextArea', module).add('TextArea', () => <TextAreaWrapper />);
