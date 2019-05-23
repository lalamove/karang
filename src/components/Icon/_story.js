import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { shape } from 'prop-types';

import { fontSize } from 'styles/fonts';

import Alert from '../Alert';

// Category
import * as AlertIcons from './icons/alert';
import * as ArrowsIcons from './icons/arrows';
import * as BrowserIcons from './icons/browser';
import * as CommunicationIcons from './icons/communication';
import * as ContentIcons from './icons/content';
import * as DateIcons from './icons/date';
import * as DevicesIcons from './icons/devices';
import * as EmojiIcons from './icons/emoji';
import * as FilesIcons from './icons/files';
import * as ImagesIcons from './icons/images';
import * as LogoIcons from './icons/logo';
import * as MapsIcons from './icons/maps';
import * as PaymentsIcons from './icons/payments';
import * as SecurityIcons from './icons/security';
import * as ServicesIcons from './icons/services';
import * as SocialIcons from './icons/social';
import * as StatusIcons from './icons/status';
import * as ToggleIcons from './icons/toggle';
import * as UserIcons from './icons/users';
import * as VehiclesIcons from './icons/vehicles';
import * as OthersIcons from './icons/others'; // TODO: DEPRECATED, for backward compatibility only

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 160px;
  margin: 1.2em;
  font-size: ${fontSize.small};
  text-align: center;
`;

const colorMap = {
  love: '#00bc9c',
  like: '#80ae64',
  neutral: '#ffa744',
  dislike: '#f07a40',
  hate: '#e15453',
};

const IconGallery = ({ category }) => (
  <Container>
    {Object.entries(category).map(([key, I]) => (
      <Wrapper key={`icon-${key}`}>
        <I size={40} color={colorMap[key] || 'inherit'} />
        <div>{key}</div>
      </Wrapper>
    ))}
  </Container>
);
IconGallery.propTypes = {
  category: shape({}).isRequired,
};

storiesOf('Icon', module)
  .add('Alert', () => <IconGallery category={AlertIcons} />)
  .add('Arrows', () => <IconGallery category={ArrowsIcons} />)
  .add('Browser', () => <IconGallery category={BrowserIcons} />)
  .add('Communication', () => <IconGallery category={CommunicationIcons} />)
  .add('Content', () => <IconGallery category={ContentIcons} />)
  .add('Emoji', () => (
    <Fragment>
      <Alert
        type="info"
        message="Color code required"
        description="The icons below are suggested to be used with color. Please check the documentation for examples."
      />
      <IconGallery category={EmojiIcons} colored />
    </Fragment>
  ))
  .add('Date', () => <IconGallery category={DateIcons} />)
  .add('Devices', () => <IconGallery category={DevicesIcons} />)
  .add('Files', () => <IconGallery category={FilesIcons} />)
  .add('Images', () => <IconGallery category={ImagesIcons} />)
  .add('Logo', () => <IconGallery category={LogoIcons} />)
  .add('Maps', () => <IconGallery category={MapsIcons} />)
  .add('Payments', () => <IconGallery category={PaymentsIcons} />)
  .add('Security', () => <IconGallery category={SecurityIcons} />)
  .add('Services', () => <IconGallery category={ServicesIcons} />)
  .add('Social', () => <IconGallery category={SocialIcons} />)
  .add('Status', () => <IconGallery category={StatusIcons} />)
  .add('Toggle', () => <IconGallery category={ToggleIcons} />)
  .add('Users', () => <IconGallery category={UserIcons} />)
  .add('Vehicles', () => <IconGallery category={VehiclesIcons} />)
  .add('Others (Deprecated)', () => (
    <Fragment>
      <Alert
        type="warning"
        message="Deprecated"
        description="The icons below has been deprecated, and they will be removed in future version. Please replace with the name advised in documentation."
      />
      <IconGallery category={OthersIcons} />
    </Fragment>
  ));
