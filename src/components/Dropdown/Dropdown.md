#### Usage:

```js static
import { Dropdown } from 'lalamove-ui';

// <Dropdown items={[object]} />
```

**Basic**

```js
const items = [
  {
    value: 'hello',
    label: 'Hello world!',
  },
  {
    value: 'bye',
    label: 'Bye!',
  },
];
<Dropdown items={items} defaultLabel="Options available" />
```

**Basic with icon and onChange()**

Example for using `<Dropdown />` with custom `onChange()` function

```js
const Icon = require('components/Icon').default;
const items = [
  {
    icon: <Icon type="pinFill" />,
    value: 'TH_BKK',
    label: 'Bangkok',
  },
  {
    icon: <Icon type="pinFill" />,
    value: 'TH_CNX',
    label: 'Chiang Mai',
  },
];
initialState = { selected: items[0] };
<Dropdown
  items={items}
  selectedItem={state.selected}
  onChange={selection => setState({ selected: selection })}
/>
```

**Cascading menu with icon**

```js
const Icon = require('components/Icon').default;
const items = [
  {
    icon: <Icon type="pinFill" />,
    value: 'TH_BKK',
    label: 'Bangkok',
    options: [{
        value: 'Siam',
        label: 'Siam',
      }, {
        value: 'Phrom_Phong',
        label: 'Phrom Phong',
    }]
  },
  {
    icon: <Icon type="pinFill" />,
    value: 'TH_CNX',
    label: 'Chiang Mai',
  },
];
<Dropdown items={items} />
```
