import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import QuestionIcon from 'components/Icon/icons/alert/question';
import { primary } from 'styles/colors';
import Checkbox from './index';
import BaseApp from '../BaseApp';

storiesOf('Checkbox', module)
  .add('Basic', () => (
    <div dir={boolean('Right-to-left', false) ? 'rtl' : 'ltr'}>
      <BaseApp rtl={boolean('Right-to-left', false)}>
        <Checkbox
          label="Checkbox"
          disabled={boolean('disabled', false)}
          highlightLabel={boolean('highlightLabel', false)}
          title="A simple checkbox"
        />
      </BaseApp>
    </div>
  ))
  .add('With icon', () => (
    <div dir={boolean('Right-to-left', false) ? 'rtl' : 'ltr'}>
      <BaseApp rtl={boolean('Right-to-left', false)}>
        <Checkbox
          label="Checkbox"
          disabled={boolean('disabled', false)}
          highlightLabel={boolean('highlightLabel', false)}
          title="A simple checkbox with icon"
          icon={<QuestionIcon color={primary.main} />}
        />
      </BaseApp>
    </div>
  ));
