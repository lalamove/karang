import React, { Component } from 'react';
import { string, func, instanceOf, bool } from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker as RDDateRangePicker } from 'react-dates';
import noop from 'utils/noop';

import CalendarIcon from 'components/Icon/icons/date/calendar';
import TowardsIcon from 'components/Icon/icons/arrows/towards';
import StyledWrapper from './styles';

class DateRangePicker extends Component {
  /* eslint-disable react/destructuring-assignment */
  state = {
    startDate: this.props.startDate,
    endDate: this.props.endDate,
    focusedInput: null,
  };
  /* eslint-enable react/destructuring-assignment */

  static getDerivedStateFromProps(props, state) {
    if (props.onDatesChange !== noop) {
      if (
        (props.startDate instanceof moment &&
          !props.startDate.isSame(state.startDate)) ||
        props.startDate !== state.startDate
      ) {
        return {
          startDate: props.startDate,
        };
      }
      if (
        (props.endDate instanceof moment &&
          !props.endDate.isSame(state.endDate)) ||
        props.endDate !== state.endDate
      ) {
        return {
          endDate: props.endDate,
        };
      }
    }
    return null;
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { onDatesChange } = this.props;
    this.setState({ startDate, endDate });
    onDatesChange({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    const { onFocusChange } = this.props;
    this.setState({ focusedInput });
    onFocusChange(focusedInput);
  };

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    const { onDatesChange, onFocusChange, isRTL, ...remainProps } = this.props;

    return (
      <StyledWrapper>
        <RDDateRangePicker
          {...remainProps}
          isRTL
          startDate={startDate}
          endDate={endDate}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          showDefaultInputIcon
          customInputIcon={<CalendarIcon />}
          customArrowIcon={<TowardsIcon />}
          navPrev={<TowardsIcon size={24} />}
          navNext={<TowardsIcon size={24} />}
        />
      </StyledWrapper>
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
  /** @ignore */
  onFocusChange: func,
  /** @ignore */
  startDateId: string,
  /** @ignore */
  endDateId: string,
  /** @ignore */
  focusedInput: string,
  isRTL: bool,
};

DateRangePicker.defaultProps = {
  startDate: null,
  endDate: null,
  onDatesChange: noop,
  onFocusChange: noop,
  startDateId: 'LLM_DateRangePicker_StartDate',
  endDateId: 'LLM_DateRangePicker_EndDate',
  focusedInput: null,
  isRTL: false,
};

export default DateRangePicker;
