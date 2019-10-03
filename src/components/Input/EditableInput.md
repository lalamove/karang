#### Usage:

```js static
import { EditableInput } from '@lalamove/karang';
```

```js
initialState = { email: 'no-reply@lalamove.com' };
<EditableInput
    label="Billing Email"
    value={state.email}
    onSave={email => setState({ email })}
/>
```
