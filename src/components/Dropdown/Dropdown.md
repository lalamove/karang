#### Usage:

```js static
import { Dropdown } from 'karang';

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

**Basic with disabled item**

```js
const items = [
  {
    value: 'hello',
    label: 'Hello world!',
    disabled: false,
  },
  {
    value: 'morning',
    label: 'Good morning, Dave.',
    disabled: true,
  },
  {
    value: 'bye',
    label: 'Bye!',
    // `disabled` omitted
  },
];
<Dropdown items={items} defaultLabel="Options available" />
```

**Basic with icon and onChange()**

Example for using `<Dropdown />` with custom `onChange()` function

```js
const Icon = require('components/Icon/icons/content/vmenu').default;
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
const Icon = require('../../components/Icon/icons/content/vmenu').default;
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

**Block**

```js
const items = [
  {
    value: 'TW_TPE',
    label: 'Taipei',
  },
  {
    value: 'TW_TXG',
    label: 'Taichung',
  },
];
<Dropdown items={items} defaultLabel="Select city" block />
```

**Block with cascading menu**

```js
const items = [
  {
    value: 'TW_TPE',
    label: 'Taipei',
    options: [{
        value: '106',
        label: 'Daan',
      }, {
        value: '114',
        label: 'Neihu',
      }, {
        value: '115',
        label: 'Nangang',
    }]
  },
  {
    value: 'TW_TXG',
    label: 'Taichung',
    options: [{
        value: '406',
        label: 'Beitun',
      }, {
        value: '408',
        label: 'Nantun',
    }]
  },
];
<Dropdown items={items} defaultLabel="Select district" block direction="left" />
```
