import React from 'react';
import { storiesOf } from '@storybook/react';
import DateRangePicker from './index';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`;

const DateRangePickerStory = () => (
  <Container>
    <DateRangePicker
      startDate={moment()}
      endDate={moment().add(3, 'months')}
      isOutsideRange={() => false}
      onSelectionChange={(start, end) => console.log(start, end)}
      onPrevMonthClick={() => console.log('clicked prev month button')}
      onNextMonthClick={() => console.log('clicked next month button')}
    />
  </Container>
);

storiesOf('DateRangePicker', module).add('DateRangePicker', () => (
  <DateRangePickerStory />
));
