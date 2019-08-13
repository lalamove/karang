```js static
import { DateRangePicker } from '@lalamove/karang'
```

```js
initialState = { startDate: null, endDate: null };
const onChange = ({ startDate, endDate }) => { setState({ startDate, endDate }); };
<DateRangePicker startDate={state.startDate} endDate={state.endDate} onDatesChange={onChange} />
```

We styled the `DateRangePicker` from `react-dates`, with setting `showDefaultInputIcon` as `true` by default. 

There are no other changes overriding the original behaviours.

**Please check [the documentation from `react-dates`](https://github.com/airbnb/react-dates#daterangepicker) for the minimum props required**.
