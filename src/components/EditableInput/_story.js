import React from 'react';
import { storiesOf } from '@storybook/react';
import EditableInput from './index';

storiesOf('EditableInput', module).add('Basic', () => (
  <div style={{ padding: '20px', display: 'inlineBlock' }}>
    <EditableInput
      name="dummy"
      placeholder="Billing Email"
      onValueSave={value => console.log(value)}
      isEditable={false}
      value="david.lam@lalamove.com"
    />
    <br />
    <br />
    <br />
    <EditableInput
      name="dummy2"
      placeholder="Billing Email"
      onValueSave={() => false}
    />
    <br />
  </div>
));
