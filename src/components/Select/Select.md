#### Usage:

```js static
import { Select } from 'lalamove-ui';
```

**Basic**

```js
initialState = { selected: null };
const items = [
  {
    value: 'MOTORCYCLE',
    label: 'Motorcycle',
  },
  {
    value: 'VAN',
    label: 'Van',
  },
];
<Select
  label="What is your vehicle type?"
  items={items}
  selectedItem={state.selected}
  onChange={selected => setState({ selected })}
/>
```
