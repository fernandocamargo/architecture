import React from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default ({
  name,
  value: { start, end },
  change,
  focused,
  focus,
  className
}) => (
  <div className={className}>
    <DateRangePicker
      startDateId="startDate"
      endDateId="endDate"
      startDate={start}
      endDate={end}
      onDatesChange={change}
      onFocusChange={focus}
      focusedInput={focused}
      readOnly
    />
  </div>
);
