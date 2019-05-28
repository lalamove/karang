#### Usage:

```js static
import { IconButton } from '@lalamove/karang';
```

**Variant**
* `default` — this is the default.
* `primary`
* `secondary`
* `danger`

```jsx static
<IconButton variant="primary">
    <Icon ... />
</IconButton>
```

```
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <IconButton>
      <Icon type="alert" size={24} />
    </IconButton>
    <IconButton variant="primary">
      <Icon type="alert" size={24} />
    </IconButton>
    <IconButton variant="secondary">
      <Icon type="alert" size={24} />
    </IconButton>
    <IconButton variant="danger">
      <Icon type="alert" size={24} />
    </IconButton>
</div>
```

**Shape**
* `default` — this is the default.
* `square`

```jsx static
<IconButton shape="square">
    <Icon ... />
</IconButton>
```

```
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <IconButton>
      <Icon type="close" size={24} />
    </IconButton>
    <IconButton shape="square">
      <Icon type="close" size={24} />
    </IconButton>
</div>
```
