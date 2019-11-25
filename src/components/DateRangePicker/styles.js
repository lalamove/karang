import styled from 'styled-components';
import { rgba } from 'polished';
import { primary, nobel, mineShaft, white } from 'styles/colors';

import { primaryFonts, fontWeight } from 'styles/fonts';

const StyledWrapper = styled.div`
  .DayPickerKeyboardShortcuts_show {
    display: none;
  }
  .CalendarDay {
    box-sizing: border-box;
    cursor: pointer;
    font-size: 12px;
    border-radius: 2px;
    color: ${mineShaft['800']};
    font-family: ${primaryFonts};
    line-height: 16px;
    text-align: center;
    width: 36px;
    height: 16px;
  }
  .CalendarDay:active {
    outline: 0;
  }
  .CalendarDay__defaultCursor {
    cursor: default;
  }
  .CalendarDay__default {
    border: 0;
    color: ${mineShaft['800']};
    background: ${white};
    outline: none;
  }
  .CalendarDay__default:hover {
    background: ${nobel['100']};
    border: 0;
  }
  .CalendarDay__hovered_offset {
    background: ${rgba(primary.main, 0.05)};
    border: 1px double ${nobel['100']};
  }
  .CalendarDay__outside {
    border: 0;
    background: ${white};
    color: ${mineShaft['800']};
  }
  .CalendarDay__outside:hover {
    border: 0;
  }
  .CalendarDay__blocked_minimum_nights {
    background: ${white};
    color: ${rgba(mineShaft['800'], 0.5)};
  }
  .CalendarDay__blocked_minimum_nights:active,
  .CalendarDay__blocked_minimum_nights:hover {
    background: ${white};
    color: ${rgba(mineShaft['800'], 0.5)};
  }
  .CalendarDay__highlighted_calendar {
    background: ${rgba(primary.main, 0.05)};
    color: ${primary.main};
  }
  .CalendarDay__highlighted_calendar:active,
  .CalendarDay__highlighted_calendar:hover {
    background: ${rgba(primary.main, 0.1)};
    color: ${primary.main};
  }
  .CalendarDay__selected_span {
    background: ${rgba(primary.main, 0.05)};
    border: 0;
    color: ${mineShaft['800']};
  }
  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: ${rgba(primary.main, 0.1)};
    color: ${mineShaft['800']};
  }
  .CalendarDay__today,
  .CalenderDay__selected_span:active {
    background: ${nobel['100']};
    color: ${primary.main};
    font-weight: ${fontWeight.bold};
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${rgba(primary.main, 0.05)};
    color: ${mineShaft['800']};
  }
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    background: ${rgba(primary.main, 0.05)};
    border: 0;
    color: ${mineShaft['800']};
  }
  .CalendarDay__hovered_span:active {
    background: ${primary.main};
    border: 1px solid ${primary.main};
    color: ${white};
  }
  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: ${rgba(mineShaft['800'], 0.05)};
    border: 0;
    color: ${mineShaft['800']};
  }
  .CalendarDay__selected_start {
    border-left: 2px solid ${primary.main};
  }
  .CalendarDay__selected_start:hover {
    background: ${primary.main};
    color: ${white};
  }
  .CalendarDay__selected_end {
    border-right: 2px solid ${primary.main};
  }
  .CalendarDay__selected_end:hover {
    background: ${primary.main};
    color: ${white};
  }
  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:active,
  .CalendarDay__blocked_out_of_range:hover {
    background: ${white};
    border: 0;
    color: ${rgba(mineShaft['800'], 0.5)};
  }
  .CalendarMonth {
    background: ${white};
    text-align: center;
    vertical-align: top;
    user-select: none;
  }
  .CalendarMonth_table {
    border-collapse: collapse;
    border-spacing: 0;
    height: 36px;
  }
  .CalendarMonth_verticalSpacing {
    border-collapse: separate;
  }
  .CalendarMonth_caption {
    height: 24px;
    font-size: 16px;
    font-family: ${primaryFonts};
    font-weight: ${fontWeight.bold};
    color: ${mineShaft['800']};
    line-height: 24px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 45px;
    caption-side: initial;
  }
  .CalendarMonth_caption__verticalScrollable {
    padding-top: 12px;
    padding-bottom: 7px;
  }
  .CalendarMonthGrid {
    background: ${white};
    text-align: left;
    z-index: 0;
  }
  .CalendarMonthGrid__animating {
    z-index: 1;
  }
  .CalendarMonthGrid__horizontal {
    position: absolute;
    left: 9px;
  }
  .CalendarMonthGrid__vertical {
    margin: 0 auto;
  }
  .CalendarMonthGrid__vertical_scrollable {
    margin: 0 auto;
    overflow-y: scroll;
  }
  .CalendarMonthGrid_month__horizontal {
    display: inline-block;
    vertical-align: top;
    min-height: 100%;
  }
  .CalendarMonthGrid_month__hideForAnimation {
    position: absolute;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }
  .CalendarMonthGrid_month__hidden {
    visibility: hidden;
  }
  .DayPickerNavigation {
    position: relative;
    z-index: 2;
  }
  .DayPickerNavigation__horizontal {
    height: 0;
  }
  .DayPickerNavigation__verticalDefault {
    position: absolute;
    width: 100%;
    height: 52px;
    bottom: 0;
    left: 0;
  }
  .DayPickerNavigation__verticalScrollableDefault {
    position: relative;
  }
  .DayPickerNavigation_button {
    cursor: pointer;
    user-select: none;
    border: 0;
    padding: 0;
    margin: 0;
  }
  .DayPickerNavigation_button {
    border: 0;
    border-radius: 100%;
    background-color: ${white};
    color: ${mineShaft['800']};
    outline: none;
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .DayPickerNavigation > div:first-child {
    position: absolute;
    left: 24px;
    top: 20px;
    transform: rotate(180deg);
  }
  .DayPickerNavigation > div:nth-child(2) {
    position: absolute;
    right: 24px;
    top: 20px;
  }
  .DayPickerNavigation_button:hover {
    background: ${nobel['100']};
  }
  .DayPickerNavigation_button:focus,
  .DayPickerNavigation_button:active {
    background: ${nobel['200']};
  }
  .DayPickerNavigation_button__verticalDefault {
    padding: 5px;
    background: ${white};
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    display: inline-block;
    height: 100%;
    width: 50%;
  }
  .DayPickerNavigation_nextButton__verticalDefault {
    border-left: 0;
  }
  .DayPickerNavigation_nextButton__verticalScrollableDefault {
    width: 100%;
  }
  .DayPickerNavigation_svg__horizontal {
    display: none;
  }
  .DayPickerNavigation_svg__vertical {
    height: 42px;
    width: 42px;
    fill: ${mineShaft['800']};
    display: block;
  }
  .DayPicker {
    background: ${white};
    position: relative;
    text-align: left;
    box-shadow: 0 2px 8px 0 rgba(83, 83, 83, 0.2);
    border-radius: 2px;
    border: 1px solid rgba(232, 232, 232, 1);
  }
  .DayPicker__horizontal {
    background: ${white};
  }
  .DayPicker__verticalScrollable {
    height: 100%;
  }
  .DayPicker__hidden {
    visibility: hidden;
  }
  .DayPicker__withBorder {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
  }
  .DayPicker_portal__horizontal {
    box-shadow: none;
    position: absolute;
    left: 50%;
    top: 50%;
  }
  .DayPicker_portal__vertical {
    position: initial;
  }
  .DayPicker_focusRegion {
    outline: 0;
  }
  .DayPicker_calendarInfo__horizontal,
  .DayPicker_wrapper__horizontal {
    display: inline-block;
    vertical-align: top;
  }
  .DayPicker_weekHeaders {
    position: relative;
  }
  .DayPicker_weekHeaders__horizontal {
    margin-left: 9px;
  }
  .DayPicker_weekHeader {
    color: ${mineShaft['500']};
    position: absolute;
    top: 62px;
    z-index: 2;
    text-align: left;
  }
  .DayPicker_weekHeader__vertical {
    left: 50%;
  }
  .DayPicker_weekHeader__verticalScrollable {
    top: 0;
    display: table-row;
    border-bottom: 1px solid ${nobel.main};
    background: ${white};
    margin-left: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .DayPicker_weekHeader_ul {
    list-style: none;
    margin: 1px 0;
    padding-left: 0;
    padding-right: 0;
    font-size: 15px;
  }
  .DayPicker_weekHeader_li {
    font-family: ${primaryFonts};
    height: 16px;
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    color: ${mineShaft['500']};
    line-height: 16px;
  }
  .DayPicker_transitionContainer {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    height: 298px;
  }
  .DayPicker_transitionContainer__horizontal {
    transition: height 0.2s ease-in-out;
  }
  .DayPicker_transitionContainer__vertical {
    width: 100%;
  }
  .DayPicker_transitionContainer__verticalScrollable {
    padding-top: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: scroll;
  }
  .DateInput {
    margin: 0;
    padding: 0;
    background: ${white};
    position: relative;
    display: inline-block;
    color: ${mineShaft['500']};
    vertical-align: middle;
  }
  .DateInput__small {
    width: 97px;
  }
  .DateInput__block {
    width: 100%;
  }
  .DateInput__disabled {
    background: ${white};
    color: ${rgba(mineShaft['500'], 0.5)};
  }
  .DateInput_input {
    font-family: ${primaryFonts};
    font-size: 1rem;
    line-height: 16px;
    background-color: ${white};
    height: 32px;
    width: 85px;
    padding: 8px 4px;
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid transparent;
    border-left: 0;
    box-sizing: border-box;
    &::selection {
      background: ${rgba(primary.main, 0.1)};
    }
  }
  .DateInput_input__regular {
    font-weight: auto;
  }
  .DateInput_input__readOnly {
    user-select: none;
  }
  .DateInput_input__focused {
    outline: 0;
    background: ${white};
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid ${primary.main};
    border-left: 0;
  }
  .DateInput_input__disabled {
    background: ${white};
    color: ${rgba(mineShaft['500'], 0.5)};
  }
  .DateInput_screenReaderMessage {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .DateInput_fang {
    position: absolute;
    width: 20px;
    height: 10px;
    left: 22px;
    z-index: 2;
  }
  .DateInput_fangShape {
    fill: ${white};
  }
  .DateInput_fangStroke {
    stroke: ${nobel.main};
    fill: transparent;
  }
  .DateRangePickerInput {
    background-color: ${white};
    display: inline-block;
    width: 220px;
    position: relative;
  }
  .DateRangePickerInput__disabled {
    background: ${white};
    color: ${rgba(mineShaft['500'], 0.5)};
  }
  .DateRangePickerInput__withBorder {
    border-radius: 2px;
    padding: 0 12px;
    border: 1px solid ${nobel.main};
  }
  .DateRangePickerInput__rtl {
    direction: rtl;
    text-align: left;
  }
  .DateRangePickerInput__block {
    display: block;
  }
  .DateRangePickerInput__showClearDates {
    padding-right: 30px;
  }
  .DateRangePickerInput_arrow {
    display: inline-block;
    vertical-align: middle;
    padding: 4px;
  }
  .DateRangePickerInput_arrow_svg {
    vertical-align: middle;
    height: 20px;
    width: 20px;
    visibility: hidden;
  }
  .DateRangePickerInput_clearDates {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    padding: 10px;
    margin: 0 10px 0 5px;
    position: absolute;
    right: 9.5%;
    top: 48%;
    transform: translateY(-50%);
  }
  .DateRangePickerInput_clearDates__small {
    padding: 6px;
  }
  .DateRangePickerInput_clearDates_default:focus,
  .DateRangePickerInput_clearDates_default:hover {
    background: ${nobel.main};
    border-radius: 50%;
  }
  .DateRangePickerInput_clearDates__hide {
    visibility: hidden;
  }
  .DateRangePickerInput_clearDates_svg {
    fill: ${mineShaft['500']};
    height: 12px;
    width: 15px;
    vertical-align: middle;
  }
  .DateRangePickerInput_clearDates_svg__small {
    height: 9px;
  }
  .DateRangePickerInput_calendarIcon {
    position: absolute;
    top: 50%;
    right: 4px;
    border: 0;
    border-radius: 100%;
    outline: none;
    padding: 4px;
    cursor: pointer;
    transform: translate(0, -50%);
    background: transparent;
  }
  .DateRangePickerInput_calendarIcon:hover {
    background: ${nobel['100']};
  }
  .DateRangePickerInput_calendarIcon:focus {
    background: ${nobel['200']};
  }
  .DateRangePickerInput_calendarIcon_svg {
    display: none;
  }
  .DateRangePicker {
    position: relative;
    display: inline-block;
    width: 236px;
    height: 32px;
  }
  .DateRangePicker__block {
    display: block;
  }
  .DateRangePicker_picker {
    z-index: 5;
    background-color: ${white};
    position: absolute;
  }
  .DateRangePicker_picker__rtl {
    direction: rtl;
  }
  .DateRangePicker_picker__directionLeft {
    left: 0;
  }
  .DateRangePicker_picker__directionRight {
    right: 0;
  }
  .DateRangePicker_closeButton {
    display: none;
  }
`;

export default StyledWrapper;
