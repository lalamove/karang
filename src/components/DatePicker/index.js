import 'react-dates/initialize';
import './styles/dateRangePickerStyles.css';
import React, { Component } from 'react';
import * as ReactDates from 'react-dates';
import { DateRangePickerPhrases } from './utils/defaultPhrases';
import * as PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { START_DATE, END_DATE } from './utils/constants';
import moment from 'moment';

const anchor = {
  left: 'left',
  right: 'right',
};

const { DateRangePicker } = ReactDates;
const {
  string,
  bool,
  func,
  oneOfType,
  number,
  oneOf,
  object,
  node,
} = PropTypes;

class DatePicker extends Component {
  constructor(props) {
    super();

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

    /*
      autoFocus, autoFocusEndDate, initialStartDate, initialEndDate, onSelectionChange,
      stateDateWrapper are helper props but are not props on the DateRangePicker itself and
      thus, have to be omitted.
    */

    const {
      autoFocus,
      autoFocusEndDate,
      initialStartDate,
      initialEndDate,
      stateDateWrapper,
      onSelectionChange,
      ...remainProps
    } = this.props;

    return (
      <DateRangePicker
        {...remainProps}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        showDefaultInputIcon
      />
    );
  }
}

DatePicker.propTypes = {
  /** If `true`, will automatically open DatePicker */
  autoFocus: bool,
  /** If `false`, will automatically open DatePicker on the endDate input */
  autoFocusEndDate: bool,
  /** @ignore */
  stateDateWrapper: func,
  /* eslint-disable react/no-typos */
  /** Allows developers to specify an initial start date for the DatePicker as a moment object */
  initialStartDate: momentPropTypes.momentObj,
  /** Allows developers to specify an initial end date for the DatePicker as a moment object */
  initialEndDate: momentPropTypes.momentObj,
  /* eslint-disable react/no-typos */
  /** @ignore */
  startDateId: string,
  /** When set to `true` DatePicker is disabled. Disables Start Date input when set to "startDate".
   * Disables End Date input when set to "endDate" */
  disabled: oneOfType([bool, string]),
  /** display format function for date string */
  displayFormat: func,
  /** Event that triggers when the previous month button is clicked */
  onPrevMonthClick: func,
  /** Event that is triggered when the next month button is clicked */
  onNextMonthClick: func,
  /** Event that is triggered when the DatePicker is closed */
  onClose: func,
  /** @ignore */
  showDefaultInputIcon: bool,
  /** Number of Months to be displayed. default: 2 */
  numberOfMonths: number,
  /** if set to true, shows days from the previous month in the current month */
  enableOutsideDays: bool,
  /** Minimum number of days ("nights"), users should select in range from DatePicker. */
  minimumNights: number,
  /** allows date picker to be anchored either left or right */
  anchorDirection: oneOf(Object.keys(anchor)),
  /** allows users to specify whether date picker remains open after end date is selected */
  keepOpenOnDateSelect: bool,
  /**
   * @param {Object} startDate moment object
   * @param {Object} endDate moment object
   */
  onSelectionChange: func,
  /** if set to `true` , the DatePicker is display Right to Left. `false`  by default */
  isRTL: bool,
  /** @ignore */
  endDateId: string,
  /** Allows developers to set a custom placeholder string for the startDate */
  startDatePlaceholderText: string,
  /** Allows developers to set a custom placeholder string for the endDate */
  endDatePlaceholderText: string,
  /** @ignore */
  horizontalMargin: number,
  /** Opens DatePicker as portal */
  withPortal: bool,
  /** Opens DatePicker as fullscreen portal */
  withFullScreenPortal: bool,
  /** Function returning initial visible month of date picker.
   *
   * E.g. ```() => moment().add(-2, 'months')``` */
  initialVisibleMonth: func,
  /** string defining the month format */
  monthFormat: string,
  /* eslint-disable react/forbid-prop-types */
  phrases: object,
  /** JSX node to replace default prev arrow. Use at your own risk */
  navPrev: node,
  /** JSX node to replace next prev arrow. Use at your own risk */
  navNext: node,
};

DatePicker.defaultProps = {
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  showDefaultInputIcon: true,
  anchorDirection: 'left',
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  isRTL: false,
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},
  minimumNights: 1,
  enableOutsideDays: false,
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,
  onSelectionChange: (startDate, endDate) => true,
  stateDateWrapper: date => date,
};

export default DatePicker;
