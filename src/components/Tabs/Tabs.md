#### Usage

```js static
import Tab, { TabBar } from 'lalamove-ui';
```

Pass the `activeTab` prop with the name of the active tab to make it active. Note that it must match the `name` prop of the tab in question in order for it to appear selected.

The function supplied as the `onTabChange` prop will be called when a tab is clicked.

**Note:** Although `selected` and `onClick` are listed as props of the `Tab` component, they are managed by `TabBar` and should not be passed manually.
