#### Usage:

```js static
import { EditableInput } from '@lalamove/karang';
```

```js
initialState = { email: 'no-reply@lalamove.com' };
<EditableInput
    label="Billing Email"
    value={state.email}
    onChange={e => this.setState({ email: e.target.value })}
/>
```
