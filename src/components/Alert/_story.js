import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from './index';

const onClose = () => console.log('onClose'); // eslint-disable-line no-console

storiesOf('Alert', module)
  .add('Basic', () => (
    <div>
      <h4>Info</h4>
      <Alert
        type="info"
        message="Informational notification"
        description="Here is a clear explanation. It drops to next line if the content is too long."
        onDismiss={onClose}
      />
      <h4>Success</h4>
      <Alert
        type="success"
        message="Success notification"
        description="Subtitle text goes here."
        onDismiss={onClose}
      />
      <h4>Error</h4>
      <Alert
        type="error"
        message="Error notification"
        description="Subtitle text goes here."
        onDismiss={onClose}
      />
      <h4>Warning</h4>
      <Alert
        type="warning"
        message="Warning notification"
        description="Subtitle text goes here."
        onDismiss={onClose}
      />
    </div>
  ))
  .add('Toast', () => (
    <div>
      <h4>Info</h4>
      <Alert
        type="info"
        variant="toast"
        message="Informational notification"
        description="Here is a clear explanation. It drops to next line if the content is too long."
        onDismiss={onClose}
      />
      <h4>Success</h4>
      <Alert
        type="success"
        variant="toast"
        message="Success notification"
        description="Subtitle text goes here."
        onDismiss={onClose}
      />
      <h4>Error</h4>
      <Alert
        type="error"
        variant="toast"
        message="Error notification"
        description="Subtitle text goes here."
        onDismiss={onClose}
      />
      <h4>Warning</h4>
      <Alert
        type="warning"
        variant="toast"
        message="Warning notification"
        description="Subtitle text goes here."
        onDismiss={onClose}
      />
    </div>
  ));
