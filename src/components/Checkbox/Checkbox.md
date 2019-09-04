#### Usage:

```js static
import { Checkbox } from '@lalamove/karang';
```

**Basic**

```js
<Checkbox name="chkbox" label="Checkbox" title="A simple checkbox" highlightLabel />
```

**With optional icon**

You can pass another component to be rendered next to the label, commonly for `Icon` / `IconButton`.

```js
const Icon = require('../../components/Icon/icons/alert/question').default;
<Checkbox name="chkbox2" label="Checkbox" title="A simple checkbox with icon" icon={<Icon />} />
```
