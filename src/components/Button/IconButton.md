#### Usage:

```js static
import { IconButon } from 'lalamove-ui';
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
* `classic`

```jsx static
<IconButton shape="classic">
    <Icon ... />
</IconButton>
```

```
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <IconButton>
      <Icon type="close" size={24} />
    </IconButton>
    <IconButton shape="classic">
      <Icon type="close" size={24} />
    </IconButton>
</div>
```
