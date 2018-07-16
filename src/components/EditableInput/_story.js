import React from 'react';
import { storiesOf } from '@storybook/react';
import EditableInput from './index';

storiesOf('EditableInput', module).add('Basic', () => (
  <div style={{ padding: '20px', display: 'inlineBlock' }}>
    <EditableInput
      name="dummy"
      placeholder="Billing Email"
      onSave={value => console.log(value)}
      onCancel={value => console.log(value)}
      isEditable={false}
      saveValue="saveValue"
      editValue="editValue"
      cancelValue="cancelValue"
      value="david.lam@lalamove.com"
      style={{ width: '600px' }}
    />
    <br />
    <br />
    <br />
    <EditableInput
      name="dummy2"
      placeholder="Billing Email"
      onSave={() => false}
    />
    <br />
  </div>
));
