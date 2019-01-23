import React, { Fragment } from 'react';
import { shape } from 'prop-types';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { fontSize } from 'styles/fonts';

import Alert from '../Alert';
import Icon from './index';

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

const SCIcon = styled(Icon)`
  display: block;
  margin: 0.8em auto 0.8em auto;
`;

const Wrapper = styled.div`
  width: 160px;
  margin: 1.2em;
  font-size: ${fontSize.small};
  text-align: center;
`;

const Icons = ({ category }) => (
  <Container>
    {Object.keys(category).map(type => (
      <Wrapper key={`icon-${type}`}>
        <SCIcon type={type} size={40} />
        {type}
      </Wrapper>
    ))}
  </Container>
);

Icons.propTypes = {
  category: shape().isRequired,
};

storiesOf('Icon', module)
  .add('Alert', () => <Icons category={AlertIcons} />)
  .add('Arrows', () => <Icons category={ArrowsIcons} />)
  .add('Communication', () => <Icons category={CommunicationIcons} />)
  .add('Content', () => <Icons category={ContentIcons} />)
  .add('Emoji', () => <Icons category={EmojiIcons} />)
  .add('Date', () => <Icons category={DateIcons} />)
  .add('Devices', () => <Icons category={DevicesIcons} />)
  .add('Files', () => <Icons category={FilesIcons} />)
  .add('Images', () => <Icons category={ImagesIcons} />)
  .add('Logo', () => <Icons category={LogoIcons} />)
  .add('Maps', () => <Icons category={MapsIcons} />)
  .add('Payments', () => <Icons category={PaymentsIcons} />)
  .add('Security', () => <Icons category={SecurityIcons} />)
  .add('Services', () => <Icons category={ServicesIcons} />)
  .add('Social', () => <Icons category={SocialIcons} />)
  .add('Status', () => <Icons category={StatusIcons} />)
  .add('Toggle', () => <Icons category={ToggleIcons} />)
  .add('Users', () => <Icons category={UserIcons} />)
  .add('Vehicles', () => <Icons category={VehiclesIcons} />)
  .add('Others (Deprecated)', () => (
    <Fragment>
      <Alert
        type="warning"
        message="Deprecated"
        description="The icons below has been deprecated, and they will be removed in future version. Please replace with the name advised in documentation."
      />
      <Icons category={OthersIcons} />
    </Fragment>
  ));
