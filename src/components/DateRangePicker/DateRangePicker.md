```js static
  import { DateRangePicker } from 'lalamove-ui'
```

```jsx
  <div style={{ marginLeft: '25%'}}> 
    <DateRangePicker
       isOutsideRange={() => false}
       onDatesChange={newDates =>
         console.log(newDates.startDate, newDates.endDate)
       }
       onFocusChange={focusedInput => console.log(focusedInput)}
       onPrevMonthClick={() => console.log('clicked prev month button')}
       onNextMonthClick={() => console.log('clicked next month button')}
    />
  </div>
```

Other properties of the DateRangePicker component can be accessed in the react-dates docs.
