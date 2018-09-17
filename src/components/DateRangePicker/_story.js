import React from 'react';
import { storiesOf } from '@storybook/react';
import DateRangePicker from './index';
import moment from 'moment';
import { select } from '@storybook/addon-knobs/react';

const startDateOptions = [
  moment().format('DD-MM-YYYY'),
  moment()
    .add(-10, 'months')
    .format('DD-MM-YYYY'),
  moment()
    .add(-24, 'months')
    .format('DD-MM-YYYY'),
];

const endDateOptions = [
  moment()
    .add(20, 'months')
    .format('DD-MM-YYYY'),
  moment()
    .add(54, 'months')
    .format('DD-MM-YYYY'),
];

const defStartDate = moment().add(-7, 'weeks');
const defEndDate = moment().add(7, 'weeks');

const DateRangePickerStory = () => {
  const startDateString = select(
    'START-DATE',
    startDateOptions,
    defStartDate,
    'StartDate'
  );
  const endDateString = select(
    'END-DATE',
    endDateOptions,
    defEndDate,
    'EndDate'
  );
  return (
    <DateRangePicker
      startDate={moment(startDateString, 'DD-MM-YYYY')}
      endDate={moment(endDateString, 'DD-MM-YYYY')}
      isOutsideRange={() => false}
      onDatesChange={newDates =>
        console.log(newDates.startDate, newDates.endDate)
      }
      onFocusChange={focusedInput => {
        console.log(focusedInput);
      }}
      onPrevMonthClick={() => console.log('clicked prev month button')}
      onNextMonthClick={() => console.log('clicked next month button')}
    />
  );
};

storiesOf('DateRangePicker', module).add('DateRangePicker', () => (
  <DateRangePickerStory />
));
