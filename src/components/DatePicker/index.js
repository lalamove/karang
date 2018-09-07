import 'react-dates/initialize';
import './styles/dateRangePickerStyles.css';
import React, { Component } from 'react';
import * as ReactDates from 'react-dates';
import { DateRangePickerPhrases } from './utils/defaultPhrases';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import {
  START_DATE,
  END_DATE,
  HORIZONTAL_ORIENTATION,
  ANCHOR_LEFT,
} from './utils/constants';
import moment from 'moment';

const { DateRangePicker } = ReactDates;

class LmDatePicker extends Component {
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

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    const { stateDateWrapper } = this.props;
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    });
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
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'stateDateWrapper',
    ]);

    return (
      <DateRangePicker
        {...props}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        showDefaultInputIcon={true}
      />
    );
  }
}

LmDatePicker.propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
};

LmDatePicker.defaultProps = {
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
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  block: false,
  small: false,
  regular: false,

  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,

  stateDateWrapper: date => date,
};

export default LmDatePicker;
