# karang
React components library that implement Lalamove Design, for building products on the web.

* [Documentation](https://ui.lalamove.com)
* [Storybook](https://ui.lalamove.com/storybook)

## 📦 Install

Please make sure you install the following dependencies:

```json
{
    "downshift": "^3.3.1",
    "moment": "^2.24.0",
    "polished": "^3.4.1",
    "prop-types": "^15.7.2",
    "react": "^16.9.0",
    "react-dates": "^21.5.0",
    "react-dom": "^16.9.0",
    "react-tooltip": "^3.11.1",
    "styled-components": "^4.3.2"
}
```

And run the following:

```bash
yarn add @lalamove/karang
```

You may check on our [Github Releases](https://github.com/lalamove/karang/releases) page for the version releases.

## 👩🏻‍💻 Usage

### Initialize the library at the top level

You must first initialize the library in order to set configuration globals.

First, please embed the required fonts into your application, for example, you can copy the following code into the 
`<head>` element of your web app.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700" />
<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanstc.css" />
```

At the top level of your application, instantiate a `BaseApp` component and pass the rest of your application as its children.

```jsx static
import React from 'react';
import { BaseApp } from '@lalamove/karang';

const App = () => (
  <BaseApp>
    ...children
  </BaseApp>
);

export default App;
```

### Using exported UI components

Quick example to **get you started** in your own components:

```jsx static
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

We also support partial import for smaller build:

```jsx static
import Radio from '@lalamove/karang/dist/components/Radio';
```

### Right-to-left (RTL) support

All components support right-to-left layout used in languages such as Arabic, Hebrew, and Persian.
In order to flip the direction of components, follow these procedure:

Set the HTML attribute `dir` to `rtl` on the root element of your application, for example the `body`:

```html
<body dir="rtl">
```

On the `BaseApp` component that you have instantiated at the top level of your application, set `rtl` props to `true`:
  
```jsx static
const App = () => (
  <BaseApp rtl>
    ...children
  </BaseApp>
);
```

Visit our [Storybook](https://ui.lalamove.com/storybook) page for RTL demos.

## 👷🏻‍♀️ Contributing to karang

### Configure your editor

To enable stylelint for `styled-components`, configure your editor to have stylelint watch `.js` files.

#### Sublime Text

```json
"stylelint": {
  "selector": "source.js"
}
```
#### Visual Studio Code

```json
"stylelint.additionalDocumentSelectors": [
  "javascript"
]
```
#### WebStorm or other JetBrains IDEs

Install `Styled Components` plugin in IDE `Preferences | Plugins`.

### Develop with storybook

Run the following commands for development:

```bash
yarn storybook ## Start development with Storybook
yarn doc ## Styleguide and usage
yarn test ## Run test
yarn lint:js ## Lint the JavaScript files
yarn lint:css ## Lint the CSS files including styled-components
yarn build ## Build all of the JavaScript files using Babel
```

Remember to export your components in `src/index.js`.

**This project is maintained by Lalamove. Please read through our [contributing guidelines](./CONTRIBUTING.md) for the contribution.**

## 📄 License

[Copyright © 2019 Lalamove. Code released under the MIT License.](./LICENSE.md)
