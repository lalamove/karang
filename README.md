# Lalamove React UI Library
Version 0.1.0

**Still in development. Use it at your own risk.**

React components that implement [Lalamove Design](https://lalamove.com), for all web projects.

## Install
Install **Lalamove UI Library** in your React repo:

```bash
yarn add ssh://git@git.easygroup.co:12888/andrew.mok/lalamove-ui.git#0.1.0
```

## Usage
Quick example to **get you started**:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Radio from 'lalamove-ui';

function App() {
  return (
    <Radio name="payment" value="cash">
      Radio 1
    </Radio>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

As this repo is still in early development stage, sometimes you may need to modify this repo for development. 

Commit your changes on **your own branch**, and change `package.json` in your repo to install your commit version (replace `<commit-id>` with your commit id):
```json
"dependencies": {
    "lalamove-ui": "ssh://git@git.easygroup.co:12888/andrew.mok/lalamove-ui.git#<commit-id>"
}
```

## Documentation / Storybook
Clone this repo, and run:
```bash
## install dependencies
yarn

## visit localhost:9092 to browse components library
yarn storybook
```

## Coding Standard
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Stylelint for development
To enable stylelint for `styled-components`, configure your editor to have stylelint watch `.js` files.

#### Sublime Text

```json
"stylelint": {
  "selector": "source.js"
}
```

#### VS Code

```json
"stylelint.additionalDocumentSelectors": [
  "javascript"
]
```

#### WebStorm or other JetBrains IDEs

Install `Styled Components` plugin in IDE `Preferences | Plugins`. [(Installation Guide)](https://github.com/styled-components/webstorm-styled-components
)

## Todo
* **FIX ALL `eslint` ERRORS!**
* Avoid `injectGlobal`?
* Code cleanup for existing components
* Increase unit test coverage
* Theme support?
* (Please help to add more here)

## Support
* For any questions, please feel free to [open an issue here](https://git.easygroup.co/andrew.mok/lalamove-ui/issues).

## License
* [Copyright (c) 2018 Lalamove. All rights reserved.](./LICENSE.md)
