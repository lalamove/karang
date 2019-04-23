#### Usage:

```js static
import { Flag } from 'lalamove-ui';
```

**Basic**

Passing HTML image `<img />` tag.

```jsx static
<Flag image={<img src="..." />}>
  Content
</Flag>
```

```js
<Flag image={<img src="https://web.dev.lalamove.com/favicon.png" alt="image" width="32" height="32" />} variant="top">
  <hr style={{ margin: 0 }} />
  <h4>Heading</h4>
  <p>This is the content.</p>
  <hr style={{ margin: 0 }} />
</Flag>
```

Passing the [Icon](#/UI%20Components/Icon) component.

```jsx static
<Flag image={<Icon type="gallery" />}>
  Content
</Flag>
```

```js
<Flag image={<Icon type="gallery" size="32" />} variant="top">
  <hr style={{ margin: 0 }} />
  <h4>Heading</h4>
  <p>This is the content.</p>
  <hr style={{ margin: 0 }} />
</Flag>
```

**Image Placements**

Image at the top.

```jsx static
<Flag variant="top">
  Content
</Flag>
```

```js
<Flag image={<Icon type="gallery" size="32" />} variant="top">
  <hr style={{ margin: 0 }} />
  <h4>Heading</h4>
  <p>This is the content.</p>
  <hr style={{ margin: 0 }} />
</Flag>
```

Image is placed vertically centered (this is the default).

```jsx static
<Flag variant="center">
  Content
</Flag>
```

```js
<Flag image={<Icon type="gallery" size="32" />} variant="center">
  <hr style={{ margin: 0 }} />
  <h4>Heading</h4>
  <p>This is the content.</p>
  <hr style={{ margin: 0 }} />
</Flag>
```

Image at the bottom.

```jsx static
<Flag variant="bottom">
  Content
</Flag>
```

```js
<Flag image={<Icon type="gallery" size="32" />} variant="bottom">
  <hr style={{ margin: 0 }} />
  <h4>Heading</h4>
  <p>This is the content.</p>
  <hr style={{ margin: 0 }} />
</Flag>
```

**Nested Example**

Flag may be nested inside another Flag component.

```jsx static
<Flag>
  <Flag>
    Content
  </Flag>
</Flag>
```

```js
<Flag image={<Icon type="gallery" size="32" />} variant="top">
  <hr style={{ margin: 0 }} />
  <h4>Heading</h4>
  <p>This is the content.</p>

  <Flag image={<Icon type="gallery" size="32" />} variant="top">
    <hr style={{ margin: 0 }} />
    <h4>Heading</h4>
    <p>This is the content.</p>
    <hr style={{ margin: 0 }} />
  </Flag>

  <hr style={{ margin: 0 }} />
</Flag>
```
