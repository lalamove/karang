import React from 'react';
import { storiesOf } from '@storybook/react';
import GalleryIcon from 'components/Icon/icons/images/gallery';
import Flag from './index';

const line = <hr style={{ margin: 0 }} />;
const icon = <GalleryIcon size="32" />;

storiesOf('Flag', module)
  .add('Default - center', () => (
    <Flag image={icon}>
      {line}
      <h4>Heading</h4>
      <p>This is the content.</p>
      {line}
    </Flag>
  ))
  .add('Top', () => (
    <Flag variant="top" image={icon}>
      {line}
      <h4>Heading</h4>
      <p>This is the content.</p>
      {line}
    </Flag>
  ))
  .add('Bottom', () => (
    <Flag variant="bottom" image={icon}>
      {line}
      <h4>Heading</h4>
      <p>This is the content.</p>
      {line}
    </Flag>
  ))
  .add('Nested example', () => (
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
  ));
