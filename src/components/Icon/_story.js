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
      {renderIcon(iconType.phone, 'black', 40, { angle: 160 })}
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
    </Container>
    <br />
    <br />
    <Container>
      {renderIcon(iconType.cross, 'black', 40)}
      {renderIcon(iconType.settingsGear, 'black', 40)}
      {renderIcon(iconType.arrow, 'green', 40)}
      {renderIcon(iconType.order, 'black', 40)}
      {renderIcon(iconType.pin, 'black', 40)}
      {renderIcon(iconType.question, 'black', 40)}
      {renderIcon(iconType.warning, 'black', 40)}
      {renderIcon(iconType.appleLogo, 'black', 40)}
      {renderIcon(iconType.nodriver, 'black', 40)}
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
    </Container>
    <br />
    <br />
    <Container>
      {renderIcon(iconType.paperClip, 'black', 40)}
      {renderIcon(iconType.star, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
      {renderIcon(iconType.walletOutline, 'black', 40)}
    </Container>
  </Fragment>
);

storiesOf('Icon', module).add('Icon', () => <IconWrapper />);
