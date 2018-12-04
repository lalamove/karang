import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';

import Radio, { RadioGroup } from './index';

const options = ['wallet', 'cash'];

storiesOf('Radio', module)
  .add('Basic', () => (
    <Radio name="payment" value="cash" disabled={boolean('disabled', false)}>
      Radio 1
    </Radio>
  ))
  .add('RadioGroup', () => (
    <div>
      <h4>Default</h4>
      <RadioGroup
        className="hahahaha"
        name="payment2"
        defaultValue={options[0]}
      >
        {RadioButton =>
          options.map(option => (
            <RadioButton key={option} value={option}>
              {option}
            </RadioButton>
          ))
        }
      </RadioGroup>
      <h4>List</h4>
      <RadioGroup name="payment3" defaultValue={options[0]} variant="list">
        {RadioButton =>
          options.map(option => (
            <RadioButton key={option} value={option} block>
              {option}
            </RadioButton>
          ))
        }
      </RadioGroup>
      <h4>Button</h4>
      <RadioGroup name="payment4" defaultValue={options[0]} variant="toggle">
        {RadioButton =>
          options.map(option => (
            <RadioButton key={option} value={option} block>
              {option}
            </RadioButton>
          ))
        }
      </RadioGroup>
    </div>
  ));
