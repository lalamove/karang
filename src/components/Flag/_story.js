import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import GalleryIcon from 'components/Icon/icons/images/gallery';
import Flag from './index';
import BaseApp from '../BaseApp';

const line = <hr style={{ margin: 0 }} />;
const icon = <GalleryIcon size={32} />;

storiesOf('Flag', module)
  .add('Default - center', () => (
    <div dir={boolean('Right-to-left', false) ? 'rtl' : 'ltr'}>
      <BaseApp rtl={boolean('Right-to-left', false)}>
        <Flag image={icon}>
          {line}
          <h4>Heading</h4>
          <p>This is the content.</p>
          {line}
        </Flag>
      </BaseApp>
    </div>
  ))
  .add('Top', () => (
    <div dir={boolean('Right-to-left', false) ? 'rtl' : 'ltr'}>
      <BaseApp rtl={boolean('Right-to-left', false)}>
        <Flag variant="top" image={icon}>
          {line}
          <h4>Heading</h4>
          <p>This is the content.</p>
          {line}
        </Flag>
      </BaseApp>
    </div>
  ))
  .add('Bottom', () => (
    <div dir={boolean('Right-to-left', false) ? 'rtl' : 'ltr'}>
      <BaseApp rtl={boolean('Right-to-left', false)}>
        <Flag variant="bottom" image={icon}>
          {line}
          <h4>Heading</h4>
          <p>This is the content.</p>
          {line}
        </Flag>
      </BaseApp>
    </div>
  ))
  .add('Nested example', () => (
    <div dir={boolean('Right-to-left', false) ? 'rtl' : 'ltr'}>
      <BaseApp rtl={boolean('Right-to-left', false)}>
        <Flag variant="top" image={icon}>
          {line}
          <h4>Heading</h4>
          <p>This is the content.</p>

          <Flag variant="top" image={icon}>
            {line}
            <h4>Heading</h4>
            <p>This is the content.</p>
            {line}
          </Flag>

          {line}
        </Flag>
      </BaseApp>
    </div>
  ));
