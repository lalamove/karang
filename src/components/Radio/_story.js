import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import Radio, { RadioGroup } from './index';

const options = ['wallet', 'cash'];

storiesOf('Radio', module)
  .add('Basic', () => (
    <Radio name="payment" value="cash" disabled>
      Radio 1
    </Radio>
  ))
  .add('RadioGroup', () => (
    <RadioGroup name="payment" value={select('value', options, options[0])}>
      {RadioButton =>
        options.map(option => (
          <RadioButton key={option} value={option}>
            {option}
          </RadioButton>
        ))
      }
    </RadioGroup>
  ))
  .add('RadioGroupBtn', () => (
    <RadioGroup name="payment" value={select('value', options, 'cash')}>
      {RadioButton => (
        <Fragment>
          <RadioButton
            value="wallet"
            style={{
              border: '1px solid #E8E8E8',
              padding: '0.75em',
              color: '#58595B',
              fontSize: '16px',
              marginTop: '0.5em',
              display: 'flex',
              lineHeight: '1.5em',
              alignItems: 'center',
            }}
          >
            11:00 - 12:00
          </RadioButton>
          <RadioButton
            value="cash"
            style={{
              border: '1px solid #E8E8E8',
              padding: '0.75em',
              color: '#58595B',
              fontSize: '16px',
              marginTop: '0.5em',
              display: 'flex',
              lineHeight: '1.5em',
              alignItems: 'center',
            }}
          >
            13:00 - 14:00
          </RadioButton>
        </Fragment>
      )}
    </RadioGroup>
  ));
