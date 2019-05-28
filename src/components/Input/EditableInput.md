#### Usage:

```js static
import { EditableInput } from '@lalamove/karang';
```

```js
initialState = { email: 'no-reply@lalamove.com' };
<EditableInput
    label="Email"
    value={state.email} 
    onSave={value => setState({ email: value })} 
/>
```
