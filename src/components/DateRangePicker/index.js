import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker as RDDateRangePicker } from 'react-dates';
import { string, bool, func, oneOf, instanceOf, number } from 'prop-types';
import moment from 'moment';
import './styles';

const START_DATE = 'startDate';
const END_DATE = 'endDate';

class DateRangePicker extends Component {
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
      startDate: props.startDate,
      endDate: props.endDate,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { startDate, endDate } = nextProps;
    if (startDate && startDate !== this.props.startDate) {
      this.setState({
        startDate,
      });
    }
    if (endDate && endDate !== this.props.endDate) {
      this.setState({
        endDate,
      });
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate,
    });
    this.props.onDatesChange({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({ focusedInput });
    this.props.onFocusChange(focusedInput);
  };

  render() {
    /*
      autoFocus, autoFocusEndDate, onDatesChange, onFocusChange,
      are helper props but are not props on the DateRangePicker itself and
      thus, have to be omitted.
    */

    const {
      autoFocus,
      autoFocusEndDate,
      startDate,
      endDate,
      onDatesChange,
      onFocusChange,
      ...remainProps
    } = this.props;

    return (
      <div className="llm-date-range-picker">
        <RDDateRangePicker
          {...remainProps}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={this.state.focusedInput}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          showDefaultInputIcon
        />
      </div>
    );
  }
}

DateRangePicker.propTypes = {
  /** Allows developers to specify an initial start date for the DateRangePicker as a moment object */
  startDate: instanceOf(moment),
  /** Allows developers to specify an initial end date for the DateRangePicker as a moment object */
  endDate: instanceOf(moment),
  /**
   * @param {Object} dates object
   * @param {Object} dates.startDate moment object for the startDate
   * @param {Object} dates.endDate moment object for the endDate

   */
  onDatesChange: func,
  /**
   * @param {string} focusedInput The focused input string
   */
  onFocusChange: func,
  /** string value of the input */
  focusedInput: oneOf([START_DATE, END_DATE]),
  /** @ignore */
  startDateId: string,
  /** @ignore */
  endDateId: string,
  /** @ignore */
  autoFocus: bool,
  /** If `false`, will automatically open DateRangePicker on the endDate input */
  autoFocusEndDate: bool,
  /** Function that returns the display format for the dates. `e.g: moment.localeData().longDateFormat('L')`, */
  displayFormat: func,
  /** Allows users to specify minimum numnber of days (nights) that must be selected */
  minimumNights: number, // react-dates prop
};

DateRangePicker.defaultProps = {
  startDate: null,
  endDate: null,
  onDatesChange: ({ startDate, endDate }) => true,
  onFocusChange: focusedInput => true,
  focusedInput: null,
  autoFocus: false,
  autoFocusEndDate: false,
  startDateId: START_DATE,
  endDateId: END_DATE,
  displayFormat: () => 'DD-MM-YYYY',
  minimumNights: 0,
};

export default DateRangePicker;
