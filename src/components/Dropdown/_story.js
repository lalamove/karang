import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Dropdown from './index';

const FlagIcon = styled.img`
  max-width: 24px;
  max-height: 24px;
  vertical-align: middle;
`;

const Flag = (
  <FlagIcon src="https://s3-ap-southeast-1.amazonaws.com/lalamove-countriesflag/flag_TH.png" />
);

const countries = [
  {
    value: 'TH',
    label: 'Thailand',
    icon: Flag,
    options: [
      {
        value: 'TH_BKK',
        label: 'Bangkok',
        icon: Flag,
      },
      {
        value: 'TH_CNX',
        label: 'Chiang Mai',
        icon: Flag,
      },
    ],
  },
  {
    value: 'HK_HKG',
    label: 'Hong Kong',
    icon: Flag,
  },
  {
    value: 'VN_HCM',
    label: 'Vietnam',
    icon: Flag,
  },
  {
    value: 'PH',
    label: 'Philippines',
    icon: Flag,
    options: [
      {
        value: 'PH_MNL',
        label: 'Manila',
        icon: Flag,
      },
      {
        value: 'PH_CEB',
        label: 'Cebu',
        icon: Flag,
      },
    ],
  },
  {
    value: 'SG_SGN',
    label: 'Singapore',
    icon: Flag,
  },
  {
    value: 'TW_TPE',
    label: 'Taiwan',
    icon: Flag,
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
          direction="right"
        />
      </div>
    );
  }
}

storiesOf('Dropdown', module).add('Basic', () => <Wrapper />);
