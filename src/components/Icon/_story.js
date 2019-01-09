import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { fontSize } from 'styles/fonts';

import Icon from './index';

// Category
import AlertIcons from './icons/alert';
import CommunicationIcons from './icons/communication';
import ContentIcons from './icons/content';
import EmojiIcons from './icons/emoji';
import MapsIcons from './icons/maps';
import PaymentIcons from './icons/payments';

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
  .add('Communication', () => <Icons category={CommunicationIcons} />)
  .add('Content', () => <Icons category={ContentIcons} />)
  .add('Emoji', () => <Icons category={EmojiIcons} />)
  .add('Maps', () => <Icons category={MapsIcons} />)
  .add('Payment', () => <Icons category={PaymentIcons} />)
  .add('Others (To be deprecated)', () => <Icons category={icons} />);
