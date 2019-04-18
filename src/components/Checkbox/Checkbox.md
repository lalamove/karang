#### Usage:

```js static
import { Checkbox } from 'karang';
```

**Basic**

```js
<Checkbox name="chkbox" label="Checkbox" title="A simple checkbox" highlightLabel />
```

**With optional icon**

You can pass another component to be rendered next to the label, commonly for `Icon` / `IconButton`.

```js
<Checkbox name="chkbox2" label="Checkbox" title="A simple checkbox with icon" icon={<Icon type="question" />} />
```
