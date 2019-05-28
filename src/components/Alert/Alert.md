#### When to use:
* Used for showing alert messages to users.

### Usage:

```js static
import { Alert } from '@lalamove/karang';
```
**Basic**

```js
<Alert message="Message Title" description="Lorem ipsum dolor sit amet" />
```

**Alert types**

There are multiple types of alert message: `info`, `success`, `error`, and `warning`.

```js
<Alert type="info" message="Message Title" description="Lorem ipsum dolor sit amet" />

<Alert type="success" message="Message Title" description="Lorem ipsum dolor sit amet" />

<Alert type="error" message="Message Title" description="Lorem ipsum dolor sit amet" />

<Alert type="warning" message="Message Title" description="Lorem ipsum dolor sit amet" />
```

**Toast version**

A `toast` version of the component is also available. This will make `Alert` narrower, allowing you to superimpose the alerts on the user interface.

```js
<Alert type="info" variant="toast" message="Message Title" description="Lorem ipsum dolor sit amet" />
```
**Alert with close button**

Passing a function as the `onDismiss` prop will make a close button appear, which will be called when the button is clicked.

```js
initialState = { isAlertShown: true };
const hideAlert = () => { setState({ isAlertShown: false }) }
state.isAlertShown && (
  <Alert type="info" message="Message Title" description="Lorem ipsum dolor sit amet" onDismiss={hideAlert} />
)
```
