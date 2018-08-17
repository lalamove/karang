```js
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

const itemStyle = { margin: '1em 0' };

<RadioGroup name="payment" value="cash">
  {Radio =>
    list.map(item => (
      <div style={itemStyle}>
        <Radio value={item.value}>{item.label}</Radio>
      </div>
    ))
  }
</RadioGroup>;
```
