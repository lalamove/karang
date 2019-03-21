#### Usage:

```js static
import { Flag } from 'lalamove-ui';
```

**Basic**

```js
<Flag img={<Icon type="gallery" size="32" />} variant="top">
  <hr style={{ margin: 0 }} />
  <h4>Heading</h4>
  <p>This is the content.</p>
  <hr style={{ margin: 0 }} />
</Flag>
```

**Nested Example**

```js
<Flag img={<Icon type="gallery" size="32" />} variant="top">
  <hr style={{ margin: 0 }} />
  <h4>Heading</h4>
  <p>This is the content.</p>

  <Flag img={<Icon type="gallery" size="32" />} variant="top">
    <hr style={{ margin: 0 }} />
    <h4>Heading</h4>
    <p>This is the content.</p>
    <hr style={{ margin: 0 }} />
  </Flag>

  <hr style={{ margin: 0 }} />
</Flag>
```
