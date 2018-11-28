#### Usage:

```js static
import { RadioGroup, Radio } from 'lalamove-ui';
```

**Basic**

```js
initialState = { value: 'cash' };

const list = [
  {
    label: 'Wallet',
    value: 'wallet',
  },
  {
    label: 'Cash',
    value: 'cash',
  },
];

<RadioGroup name="payment" value={state.value} onChange={value => setState({ value })}>
  {Radio =>
    list.map(item => (
      <Radio value={item.value}>{item.label}</Radio>
    ))
  }
</RadioGroup>;
```

**List**

```js
initialState = { value: '12:00 p.m.' };

const list = [
  {
    label: '11:00 a.m.',
    value: '11:00 a.m.',
  },
  {
    label: '12:00 p.m.',
    value: '12:00 p.m.',
  },
];

<RadioGroup name="timeslot" value={state.value} onChange={value => setState({ value })} variant="list">
  {Radio =>
    list.map(item => (
      <Radio value={item.value} block>{item.label}</Radio>
    ))
  }
</RadioGroup>;
```

**Toggle**

```js
initialState = { value: 'CANCEL_ORDER_1' };

const list = [
  {
    label: 'Driver is too far.',
    value: 'CANCEL_ORDER_1',
  },
  {
    label: 'I need to change my order info.',
    value: 'CANCEL_ORDER_2',
  },
];

<RadioGroup name="cancel_reason" value={state.value} onChange={value => setState({ value })} variant="toggle">
  {Radio =>
    list.map(item => (
      <Radio value={item.value} block>{item.label}</Radio>
    ))
  }
</RadioGroup>;
```
