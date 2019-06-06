<h3 align="center">karang</h3>

<p align="center">
    React components library that implement Lalamove Design, for building products on the web.
</p>

<p align="center">
  <a href="https://ui.lalamove.com">Documentation</a>
  ·
  <a href="https://ui.lalamove.com/storybook">Storybook</a>
</p>

## ⛓ Install
Please make sure you install following dependencies:
```json
{
    "downshift": "^2.0.14",
    "moment": "^2.22.2",
    "polished": "^3.0.0",
    "prop-types": "^15.6.2",
    "react": "^16.6.0",
    "react-dates": "^18.0.2",
    "react-dom": "^16.6.0",
    "styled-components": "^3.4.10"
}
```

And run the following:

```console
yarn add @lalamove/karang
```

## 🔮 Usage
#### Initialize the library at the top level
You must first initialize the library in order to set configuration globals.

First, please embed the required fonts into your application, for example, you can copy the following code into the 
`<head>` element of your web app.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700" />
<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanstc.css" />
```

At the top level of your application, instantiate a `BaseApp` component and pass the rest of your application as its children.

```js
import React from 'react';
import { BaseApp } from '@lalamove/karang';

const App = () => (
  <BaseApp>
    ...children
  </BaseApp>
);

export default App;
```

#### Using exported UI components
Quick example to **get you started** in your own components:
```js
import React, { Fragment } from 'react';
import { Radio } from '@lalamove/karang';

const MyComponent = () => (
  <Fragment>
    <Radio name="payment" value="cash">
      Radio 1
    </Radio>
  </Fragment>
);

export default MyComponent;
```

We also support partial import for smaller built:
```js
import Radio from '@lalamove/karang/dist/components/Radio';
```
## 🎉 Contributing to karang

#### Configure your editor
To enable stylelint for `styled-components`, configure your editor to have stylelint watch `.js` files.

##### Sublime Text
```json
"stylelint": {
  "selector": "source.js"
}
```
##### VS Code
```json
"stylelint.additionalDocumentSelectors": [
  "javascript"
]
```
##### WebStorm or other JetBrains IDEs
Install `Styled Components` plugin in IDE `Preferences | Plugins`.

#### Develop with storybook
Run the following commands for development:
```console
yarn storybook ## Start development with Storybook
yarn doc ## Styleguide and usage
yarn test ## Run test
yarn lint:js ## Lint the JavaScript files
yarn lint:css ## Lint the CSS files including styled-components
yarn build ## Build all of the JavaScript files using Babel
```
Remember to export your components in `src/index.js`.

**This project is maintained by Lalamove. Please read through our [contributing guidelines](./CONTRIBUTING.md) for the contribution.**

## ⚙️ License
[Copyright (c) 2019 Lalamove. Code released under the MIT License.](./LICENSE.md)
