import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import QuestionIcon from 'components/Icon/icons/alert/question';
import { primary } from 'styles/colors';
import Checkbox from './index';

storiesOf('Checkbox', module)
  .add('Basic', () => (
    <Checkbox
      label="Checkbox"
      disabled={boolean('disabled', false)}
      highlightLabel={boolean('highlightLabel', false)}
      title="A simple checkbox"
    />
  ))
  .add('With icon', () => (
    <Checkbox
      label="Checkbox"
      disabled={boolean('disabled', false)}
      highlightLabel={boolean('highlightLabel', false)}
      title="A simple checkbox with icon"
      icon={<QuestionIcon color={primary.main} />}
    />
  ));
