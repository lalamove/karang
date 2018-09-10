import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from './index';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`;

const DatePickerStory = () => (
  <Container>
    <DatePicker
      initialStartDate={null}
      initialEndDate={null}
      isOutsideRange={() => false}
      onSelectionChange={(start, end) => console.log(start, end)}
    />
  </Container>
);

storiesOf('Date Picker', module).add('DatePicker', () => <DatePickerStory />);
