#### Usage:

```js static
import { PinInput } from 'karang';
```

**Basic**

```js
initialState = { pin: ['3', '7', '0', '1'] };

<PinInput pins={state.pin} />
```

**With error message**

```js
initialState = { pin: ['3', '7', '0', '1'] };

<PinInput pins={state.pin} error="Error message" />
```

**Small**

```js
<PinInput size="small" />
```
