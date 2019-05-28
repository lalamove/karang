#### Usage:

```js static
import { EditableInput } from '@lalamove/karang';
```

```js
initialState = { email: 'alex.fok@lalamove.com' };
<EditableInput
    label="Email"
    value={state.email} 
    onSave={value => setState({ email: value })} 
/>
```
