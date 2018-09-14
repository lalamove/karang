import 'react-dates/initialize';
import './styles';
import React, { Component } from 'react';
import { DateRangePicker as RDDateRangePicker } from 'react-dates';
import { string, bool, func, oneOf, instanceOf } from 'prop-types';
import moment from 'moment';
import noop from '../../utils/noop';

const anchor = {
  left: 'left',
  right: 'right',
};

const START_DATE = 'startDate';
const END_DATE = 'endDate';

class DateRangePicker extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.onDatesChange !== noop) {
      if (nextProps.startDate !== prevState.startDate) {
        if (nextProps.startDate) {
          return { startDate: nextProps.startDate };
        }
      } else if (nextProps.endDate !== prevState.endDate) {
        if (nextProps.endDate) {
          return { endDate: nextProps.endDate };
        }
      }
    }

    if (nextProps.onFocusChange !== noop) {
      if (nextProps.focusedInput !== prevState.focusedInput) {
        if (nextProps.focusedInput) {
          return { focusedInput: nextProps.focusedInput };
        }
      }
    }

    return null;
  }

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

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate,
    });
    this.props.onSelectionChange(startDate, endDate);
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
    this.props.onInputFocusChange(focusedInput);
  }

  render() {
    /*
      autoFocus, autoFocusEndDate, onSelectionChange,
      are helper props but are not props on the DateRangePicker itself and
      thus, have to be omitted.
    */

    const {
      autoFocus,
      autoFocusEndDate,
      startDate,
      endDate,
      onSelectionChange,
      onInputFocusChange,
      ...remainProps
    } = this.props;

    return (
      <RDDateRangePicker
        {...remainProps}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={this.state.focusedInput}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        showDefaultInputIcon
      />
    );
  }
}

DateRangePicker.propTypes = {
  /** Allows developers to specify an initial start date for the DateRangePicker as a moment object */
  startDate: instanceOf(moment),
  /** Allows developers to specify an initial end date for the DateRangePicker as a moment object */
  endDate: instanceOf(moment),
  /**
   * @param {Object} startDate moment object
   * @param {Object} endDate moment object
   */
  onSelectionChange: func,
  /**
   * @param {string} focusedInput The focused input string
   */
  onInputFocusChange: func,
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
};

DateRangePicker.defaultProps = {
  startDate: null,
  endDate: null,
  onSelectionChange: (startDate, endDate) => true,
  onInputFocusChange: focusedInput => true,
  focusedInput: null,
  autoFocus: false,
  autoFocusEndDate: false,
  startDateId: START_DATE,
  endDateId: END_DATE,
  displayFormat: () => 'DD-MM-YYYY',
};

export default DateRangePicker;
