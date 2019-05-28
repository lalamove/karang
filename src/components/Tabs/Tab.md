#### Usage:

```js static
import { Tab, TabBar } from '@lalamove/karang';
```

```js static
<TabBar activeTab="foo" onTabChange={[func]}>
  <Tab name="foo">Foo</Tab>
  <Tab name="bar">Bar</Tab>
</TabBar>
```

Pass the `activeTab` prop with the name of the active tab to make it active. Note that it must match the `name` prop of the tab in question in order for it to appear selected.

The function supplied as the `onTabChange` prop will be called with the name of the tab that is clicked.

`Tab` and `TabBar` should go together. It's not advisable to use either independently.

**Note:** Although `selected` and `onTabChange` are listed as props of the `Tab` component, they are managed by `TabBar` and should not be passed manually.

```js
const TabBar = require('./components/TabBar').default;

initialState = { activeTab: 'foo' };
const tabClicked = name => { setState({ activeTab: name }) };
const renderTabContent = () => {
  switch (state.activeTab) {
    case 'foo':
      return 'Tab Foo';
    case 'bar':
      return 'Tab Bar';
    case 'zot':
      return 'Tab Zot';
    default:
      return null;
  }
};

<div>
  <TabBar activeTab={state.activeTab} onTabChange={tabClicked}>
    <Tab name="foo">Foo</Tab>
    <Tab name="bar">Bar</Tab>
    <Tab name="zot">Zot</Tab>
  </TabBar>

  {renderTabContent()}
</div>
```
