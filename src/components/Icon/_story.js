import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { shape } from 'prop-types';

import { fontSize } from 'styles/fonts';

import Alert from '../Alert';

// Category
import AlertIcons from './icons/alert';
import ArrowsIcons from './icons/arrows';
import CommunicationIcons from './icons/communication';
import ContentIcons from './icons/content';
import DateIcons from './icons/date';
import DevicesIcons from './icons/devices';
import EmojiIcons from './icons/emoji';
import FilesIcons from './icons/files';
import ImagesIcons from './icons/images';
import LogoIcons from './icons/logo';
import MapsIcons from './icons/maps';
import PaymentsIcons from './icons/payments';
import SecurityIcons from './icons/security';
import ServicesIcons from './icons/services';
import SocialIcons from './icons/social';
import StatusIcons from './icons/status';
import ToggleIcons from './icons/toggle';
import UserIcons from './icons/users';
import VehiclesIcons from './icons/vehicles';
import OthersIcons from './icons/others'; // TODO: DEPRECATED, for backward compatibility only

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
