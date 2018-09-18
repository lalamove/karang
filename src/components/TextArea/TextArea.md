#### Usage:

```js static
import { TextArea } from 'lalamove-ui';
```

```js
initialState = { value: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' };
<TextArea 
    label="Notes" 
    value={state.value} 
    onChange={e => setState({ value: e.target.value })}
    maxLength={140}
/>
```
