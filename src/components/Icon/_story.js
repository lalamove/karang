import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { fontSize } from 'styles/fonts';

import Icon from './index';

// Category
import AlertIcons from './icons/alert';
import ArrowsIcons from './icons/arrows';
import CommunicationIcons from './icons/communication';
import ContentIcons from './icons/content';
import DateIcons from './icons/date';
import EmojiIcons from './icons/emoji';
import FilesIcons from './icons/files';
import ImagesIcons from './icons/images';
import LogoIcons from './icons/logo';
import MapsIcons from './icons/maps';
import PaymentsIcons from './icons/payments';
import ServicesIcons from './icons/services';
import SocialIcons from './icons/social';
import StatusIcons from './icons/status';
import ToggleIcons from './icons/toggle';
import UserIcons from './icons/users';
import VehiclesIcons from './icons/vehicles';

// Others
import icons from './icons';

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

// eslint-disable-next-line react/prop-types
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

storiesOf('Icon', module)
  .add('Alert', () => <Icons category={AlertIcons} />)
  .add('Arrows', () => <Icons category={ArrowsIcons} />)
  .add('Communication', () => <Icons category={CommunicationIcons} />)
  .add('Content', () => <Icons category={ContentIcons} />)
  .add('Emoji', () => <Icons category={EmojiIcons} />)
  .add('Date', () => <Icons category={DateIcons} />)
  .add('Files', () => <Icons category={FilesIcons} />)
  .add('Images', () => <Icons category={ImagesIcons} />)
  .add('Logo', () => <Icons category={LogoIcons} />)
  .add('Maps', () => <Icons category={MapsIcons} />)
  .add('Payments', () => <Icons category={PaymentsIcons} />)
  .add('Services', () => <Icons category={ServicesIcons} />)
  .add('Social', () => <Icons category={SocialIcons} />)
  .add('Status', () => <Icons category={StatusIcons} />)
  .add('Toggle', () => <Icons category={ToggleIcons} />)
  .add('Users', () => <Icons category={UserIcons} />)
  .add('Vehicles', () => <Icons category={VehiclesIcons} />)
  .add('Others (To be deprecated)', () => <Icons category={icons} />);
