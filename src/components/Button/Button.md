#### Usage:

```js static
import { Button } from '@lalamove/karang';
```

**Variant**
* `default` — this is the default.
* `link`
* `primary`
* `secondary`
* `danger`

```jsx static
<Button variant="primary">Text</Button>
```

```
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button variant="link">Link</Button>
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
</div>
```

**Solid Variant**

Set `solid` as `true` for showing as solid background color. Only apply if variant is `primary`, `secondary` or `danger`.

```jsx static
<Button variant="primary" solid>Text</Button>
```

```
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button variant="link" solid>Link</Button>
    <Button solid>Default</Button>
    <Button variant="primary" solid>Primary</Button>
    <Button variant="secondary" solid>Secondary</Button>
    <Button variant="danger" solid>Danger</Button>
</div>
```

**Size**
* `default` — this is the default.
* `small`
* `large`
* `xlarge`

```jsx static
<Button size="large">Text</Button>
```

```
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
    <Button variant="primary" size="small" solid>Small</Button>
    <Button variant="primary" solid>Default</Button>
    <Button variant="primary" size="large" solid>Large</Button>
    <Button variant="primary" size="xlarge" solid>Extra Large</Button>
</div>
```

**Block**

Passing `block` as true to make the button fit the width to its parent width.

```jsx static
<Button block>Text</Button>
```

```
<Button variant="primary" size="small" block solid>Small</Button>
<br />
<Button variant="primary" block solid>Default</Button>
<br />
<Button variant="primary" size="large" block solid>Large</Button>
<br />
<Button variant="primary" size="xlarge" block solid>Extra Large</Button>
```

**Button with icon**

It supports to pass other components after the text, and it is usually used with `Icon`. Please avoid using two icons in the button.

```jsx static
<Button icon={<Icon type="onOff" />}>Logout</Button>
```

```
<Button variant="danger" icon={<Icon type="onOff" />}>Logout</Button>
```

You can put it before the label as well, simply pass `before` to `iconPosition` prop.

```jsx static
<Button icon={<Icon type="add" />} iconPosition="before">Add destination</Button>
```

```
<Button variant="link" icon={<Icon type="add" />} iconPosition="before">Add destination</Button>
```

**Loading**

Show spinner when it is `true`.

```jsx static
<Button variant="primary" isLoading>Text</Button>
```

```
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button variant="link" isLoading solid>Link</Button>
    <Button isLoading solid>Default</Button>
    <Button variant="primary" isLoading solid>Primary</Button>
    <Button variant="secondary" isLoading solid>Secondary</Button>
    <Button variant="danger" isLoading solid>Danger</Button>
</div>
```

**Disable**

Disable the button when it is `true`.

```jsx static
<Button variant="primary" disabled>Text</Button>
```

```
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button variant="link" disabled solid>Link</Button>
    <Button disabled solid>Default</Button>
    <Button variant="primary" disabled solid>Primary</Button>
    <Button variant="secondary" disabled solid>Secondary</Button>
    <Button variant="danger" disabled solid>Danger</Button>
</div>
```
