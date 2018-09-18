#### Usage:

```js static
import { SearchInput } from 'lalamove-ui';
```

```js
initialState = { value: '37013701' };
<SearchInput 
    value={state.value}
    placeholder="Search for Order ID, Driver's Mobile"
    onChange={e => setState({ value: e.target.value })} 
/>
```
