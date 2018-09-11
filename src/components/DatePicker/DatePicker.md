```js static
  import { DatePicker } from 'lalamove-ui'
```

```jsx
  <div style={{ paddingBottom: '350px', marginLeft: '25%'}}> 
    <DatePicker
        isOutsideRange={() => false}
        onSelectionChange={(start, end) => console.log(start, end)}
        onPrevMonthClick={() => console.log('clicked prev month button')}
        onNextMonthClick={() => console.log('clicked next month button')}
    />
  </div>
```
