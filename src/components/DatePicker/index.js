import 'react-dates/initialize';
import './styles/dateRangePickerStyles.css';
import React, { Component } from 'react';
import * as ReactDates from 'react-dates';
import omit from 'lodash/omit';
import momentPropTypes from 'react-moment-proptypes';
import { string, bool, func, oneOfType, number, oneOf } from 'prop-types';
import { START_DATE, END_DATE } from './utils/constants';

const anchor = {
  left: 'left',
  right: 'right',
};

const { DateRangePicker } = ReactDates;

class DatePicker extends Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    this.props = omit(this.props, ['initialStartDate', 'initialEndDate']);

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    const { stateDateWrapper } = this.props;
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    });
    this.props.onSelectionChange(startDate, endDate);
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    // autoFocus, autoFocusEndDate, initialStartDate and initialEndDate are helper props for the
    // example wrapper but are not props on the SingleDatePicker itself and
    // thus, have to be omitted.
    const props = omit(this.props, [
      'autoFocusEndDate',
      'stateDateWrapper',
      'showClearDates',
      'customInputIcon',
      'customArrowIcon',
      'onSelectionChange',
      'autoFocus',
      'initialStartDate',
      'initialEndDate',
    ]);

    return (
      <DateRangePicker
        {...props}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }
}

DatePicker.propTypes = {
  autoFocusEndDate: bool,
  stateDateWrapper: func,
  /* eslint-disable react/no-typos */
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
  /* eslint-disable react/no-typos */
  disabled: oneOfType([bool, string]),
  /** display format for date string */
  displayFormat: string,
  onPrevMonthClick: func,
  onNextMonthClick: func,
  onClose: func,
  isDayBlocked: func,
  isDayHighlighted: func,
  required: bool,
  showDefaultInputIcon: bool,
  numberOfMonths: number,
  /** if set to true, shows days from the previous month in the current month */
  enableOutsideDays: bool,
  /** Minimum number of days ("nights"), users should select in range from DatePicker. */
  minimumNights: number,
  /** allows date picker to be anchored either left or right */
  anchorDirection: oneOf(Object.keys(anchor)),
  /** allows users to specify whether date picker remains open after end date is selected */
  keepOpenOnDateSelect: bool,
  onSelectionChange: func,
  autoFocus: bool,
  isRTL: bool,
  startDateId: string,
  endDateId: string,
  startDatePlaceholderText: string,
  endDatePlaceholderText: string,
  horizontalMargin: number,
  withPortal: bool,
  withFullScreenPortal: bool,
  initialVisibleMonth: func,
};

DatePicker.defaultProps = {
  // example props for the demo
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  showDefaultInputIcon: true,

  // calendar presentation and interaction related props
  anchorDirection: 'left',
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: () => true,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  isRTL: false,

  // navigation related props
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isDayHighlighted: () => false,
  onSelectionChange: (startDate, endDate) => true,

  // internationalization
  displayFormat: 'DD-MM-YYYY',
  stateDateWrapper: date => date,
};

export default DatePicker;
