#### Usage:

```js static
import { Buton } from 'lalamove-ui';
```

**Variant**
* `default` — this is the default.
* `link`
* `primary`
* `secondary`
* `danger`
* `outline`
* `dangerOutline`

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
    <Button variant="outline">Outline</Button>
    <Button variant="dangerOutline">Outline</Button>
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
    <Button variant="primary" size="small">Small</Button>
    <Button variant="primary">Default</Button>
    <Button variant="primary" size="large">Large</Button>
    <Button variant="primary" size="xlarge">Extra Large</Button>
</div>
```

**Block**

Passing `block` as true to make the button fit the width to its parent width.

```jsx static
<Button block>Text</Button>
```

```
<Button variant="primary" size="small" block>Small</Button>
<br />
<Button variant="primary" block>Default</Button>
<br />
<Button variant="primary" size="large" block>Large</Button>
<br />
<Button variant="primary" size="xlarge" block>Extra Large</Button>
```

**Button with icon**

It supports to pass other components after the text, and it is usually used with `Icon`. Please avoid using two icons in the button.

```jsx static
<Button icon={<Icon type="onOff" />}>Logout</Button>
```

```
<Button variant="dangerOutline" icon={<Icon type="onOff" />}>Logout</Button>
```

**Loading**

Show spinner when it is `true`. This also disables the button.

```jsx static
<Button variant="primary" isLoading>Text</Button>
```

```
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button variant="link" isLoading>Link</Button>
    <Button isLoading>Default</Button>
    <Button variant="primary" isLoading>Primary</Button>
    <Button variant="secondary" isLoading>Secondary</Button>
    <Button variant="danger" isLoading>Danger</Button>
    <Button variant="outline" isLoading>Outline</Button>
    <Button variant="dangerOutline" isLoading>Outline</Button>
</div>
```
