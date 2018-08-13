import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Icon, { iconType } from './index';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const renderIcon = (type, color, size, options) => (
  <Icon
    // type, color, size, options
    type={type}
    color={color}
    size={size}
    options={options}
  />
);

const IconWrapper = () => (
  <Fragment>
    <Container>
      {renderIcon(iconType.logo, 'black', 40)}
      {renderIcon(iconType.facebook, 'black', 40)}
      {renderIcon(iconType.add, 'black', 40)}
      {renderIcon(iconType.clock, 'black', 40)}
      {renderIcon(iconType.starAdd, 'black', 40)}
      {renderIcon(iconType.notebookBookmark, 'black', 40)}
      {renderIcon(iconType.notificationBell, 'black', 40)}
      {renderIcon(iconType.tickMark, 'black', 40)}
      {renderIcon(iconType.zip, 'black', 40)}
      {renderIcon(iconType.newspaper, 'black', 40)}
      {renderIcon(iconType.saveDiagonal, 'black', 40)}
      {renderIcon(iconType.starDotted, 'black', 40)}
      {renderIcon(iconType.bolt, 'black', 40)}
    </Container>
    <br />
    <br />
    <Container>
      {renderIcon(iconType.cross, 'black', 40)}
      {renderIcon(iconType.settingsGear, 'black', 40)}
      {renderIcon(iconType.arrow, 'green', 40, { angle: 150 })}
      {renderIcon(iconType.order, 'black', 40)}
      {renderIcon(iconType.pin, 'black', 40)}
      {renderIcon(iconType.question, 'black', 40)}
      {renderIcon(iconType.warning, 'black', 40)}
      {renderIcon(iconType.noDriver, 'black', 40)}
      {renderIcon(iconType.truckOutline, 'black', 40)}
      {renderIcon(iconType.dollarCircle, 'black', 40)}
      {renderIcon(iconType.starOutline, 'black', 40)}
      {renderIcon(iconType.dollarTorn, 'black', 40)}
      {renderIcon(iconType.restricted, 'black', 40)}
    </Container>
    <br />
    <br />
    <Container>
      {renderIcon(iconType.cashOutline, 'black', 40)}
      {renderIcon(iconType.googlePlusOutline, 'black', 40)}
      {renderIcon(iconType.facebookOutlineCircle, 'black', 40)}
      {renderIcon(iconType.tickMarkCircle, 'black', 40)}
      {renderIcon(iconType.warningCircle, 'black', 40)}
      {renderIcon(iconType.cashVertical, 'black', 40)}
      {renderIcon(iconType.cameraOutline, 'black', 40)}
      {renderIcon(iconType.dottedArrow, 'black', 40)}
      {renderIcon(iconType.arrowHorizontal, 'black', 40)}
      {renderIcon(iconType.reversible, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.starCircled, 'black', 40)}
      {renderIcon(iconType.pinOutline, 'black', 40)}
    </Container>
    <br />
    <br />
    <Container>
      {renderIcon(iconType.paperClip, 'black', 40)}
      {renderIcon(iconType.star, 'black', 40)}
      {renderIcon(iconType.cart, 'black', 40)}
      {renderIcon(iconType.group, 'black', 40)}
      {renderIcon(iconType.arrowDoubleSidedDiagonal, 'black', 40)}
      {renderIcon(iconType.visaCard, 'black', 40)}
      {renderIcon(iconType.unionPayCard, 'black', 40)}
      {renderIcon(iconType.masterCard, 'black', 40)}
      {renderIcon(iconType.dinersClubCard, 'black', 40)}
      {renderIcon(iconType.jCBCard, 'black', 40)}
      {renderIcon(iconType.momoCard, 'black', 40)}
      {renderIcon(iconType.discoverCard, 'black', 40)}
      {renderIcon(iconType.aMEXCard, 'black', 40)}
    </Container>
    <br />
    <br />
    <Container>
      {renderIcon(iconType.settingsSliders, 'black', 40)}
      {renderIcon(iconType.microphone, 'black', 40)}
      {renderIcon(iconType.percentage, 'black', 40)}
      {renderIcon(iconType.crossedParcelBox, 'black', 40)}
      {renderIcon(iconType.tickedParcelBox, 'green', 40)}
      {renderIcon(iconType.networkParcelBox, 'black', 40)}
      {renderIcon(iconType.magnify, 'black', 40)}
      {renderIcon(iconType.send, 'black', 40)}
      {renderIcon(iconType.calendar, 'black', 40)}
      {renderIcon(iconType.parcelBoxOutline, 'black', 40)}
      {renderIcon(iconType.sendPaperPlane, 'black', 40)}
      {renderIcon(iconType.refresh, 'black', 40)}
      {renderIcon(iconType.visaLogo, 'black', 40)}
    </Container>
    <br />
    <br />
    <Container>
      {renderIcon(iconType.save, 'black', 40)}
      {renderIcon(iconType.editSymbol, 'black', 40)}
      {renderIcon(iconType.privacyIcon1, 'black', 40)}
      {renderIcon(iconType.privacyIcon2, 'black', 40)}
      {renderIcon(iconType.facebookColored, 'black', 40)}
      {renderIcon(iconType.googlePlusColored, 'black', 40)}
      {renderIcon(iconType.phoneIcon1, 'black', 40)}
      {renderIcon(iconType.textMessage, 'black', 40)}
      {renderIcon(iconType.textMessage2, 'black', 40)}
      {renderIcon(iconType.magnify, 'black', 40)}
      {renderIcon(iconType.magnifyingGlass, 'black', 40)}
      {renderIcon(iconType.key, 'black', 40)}
      {renderIcon(iconType.pin2, 'black', 40)}
    </Container>
    <br />
    <br />
    <Container>
      {renderIcon(iconType.aMEXLogo, 'black', 40)}
      {renderIcon(iconType.masterCardLogo, 'black', 40)}
      {renderIcon(iconType.androidLogo, 'black', 40)}
      {renderIcon(iconType.pinCircle, 'black', 40)}
      {renderIcon(iconType.appleLogo, 'black', 40)}
      {renderIcon(iconType.heart, 'black', 40)}
      {renderIcon(iconType.directions, 'black', 40)}
      {renderIcon(iconType.sound, 'black', 40)}
      {renderIcon(iconType.spanner, 'black', 40)}
      {renderIcon(iconType.bangkokBank, 'black', 40)}
      {renderIcon(iconType.spanner, 'black', 40)}
      {renderIcon(iconType.blockedGroup, 'black', 40)}
      {renderIcon(iconType.addContact, 'black', 40)}
    </Container>
  </Fragment>
);

storiesOf('Icon', module).add('Icon', () => <IconWrapper />);
