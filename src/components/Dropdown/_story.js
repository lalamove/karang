import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Dropdown from './index';
import flag from 'assets/testing.png';

const FlagIcon = styled.img`
  max-width: 24px;
  max-height: 24px;
  vertical-align: middle;
`;

const countries = [
  {
    value: 'TH',
    label: 'Thailand',
    icon: <FlagIcon src={flag} />,
    options: [
      {
        value: 'TH_BKK',
        label: 'Bangkok',
        icon: <FlagIcon src={flag} />,
      },
      {
        value: 'TH_CNX',
        label: 'Chiang Mai',
        icon: <FlagIcon src={flag} />,
      },
      {
        value: 'TH_CNX2',
        label: 'Chiang Mai2',
        icon: <FlagIcon src={flag} />,
      },
      {
        value: 'TH_CNX3',
        label: 'Chiang Mai3',
        icon: <FlagIcon src={flag} />,
      },
    ],
  },
  {
    value: 'HK_HKG',
    label: 'Hong Kong',
    icon: <FlagIcon src={flag} />,
  },
  {
    value: 'VN_HCM',
    label: 'Vietnam',
    icon: <FlagIcon src={flag} />,
  },
  {
    value: 'PH',
    label: 'Philippines',
    icon: <FlagIcon src={flag} />,
    options: [
      {
        value: 'PH_MNL',
        label: 'Manila',
        icon: <FlagIcon src={flag} />,
      },
      {
        value: 'PH_CEB',
        label: 'Cebu',
        icon: <FlagIcon src={flag} />,
      },
    ],
  },
  {
    value: 'SG_SGN',
    label: 'Singapore',
    icon: <FlagIcon src={flag} />,
  },
  {
    value: 'TW_TPE',
    label: 'Taiwan',
    icon: <FlagIcon src={flag} />,
  },
];

class Wrapper extends Component {
  state = {
    selectedCountry: countries[1],
  };

  handleChange = selectedCountry => {
    this.setState({ selectedCountry });
  };

  render() {
    const { selectedCountry } = this.state;
    return (
      <div>
        <Dropdown
          items={countries}
          onChange={this.handleChange}
          selectedItem={selectedCountry}
        />
      </div>
    );
  }
}

storiesOf('Dropdown', module).add('Basic', () => <Wrapper />);
