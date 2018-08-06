# Lalamove React UI Library
Version 0.1.0

**Still in development. Use it at your own risk.**

React components that implement [Lalamove Design](https://lalamove.com), for all web projects.

## Install
Before installing this library, please make sure you have the following installed in your own repo:
```json
{
    "downshift": "^2.0.14",
    "prop-types": "^15.6.1",
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "recompose": "^0.27.1",
    "styled-components": "^3.3.3"
}
```

Install **Lalamove React UI Library** in your own repo:
```bash
yarn add git+ssh://git@git.easygroup.co:12888/lalamove/lalamove-ui.git
```
#### Troubleshooting
- Cannot be installed in Gitlab CI

    ```bash
    apk -v --update add openssh
    mkdir ~/.ssh
    printf '%s\n' "$SSH_KEY" > ~/.ssh/id_rsa
    '[[ -f /.dockerenv ]] && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config'
    chmod 600 -R ~/.ssh
    ```

- `npm prepare` is not executed inside **docker-node** image for git repository dependency

    ```bash
    printf "unsafe-perm=true" > ~/.npmrc
    ```

## Usage
#### Initialize the library at the top level
You must first initialize the library in order to set configuration globals.

At the top level of your application, instantiate an `BaseApp` component and pass the rest of your application as its children.

// TODO: Should allow configuration parameters passed as props here
```jsx
import React from 'react';
import { BaseApp } from 'lalamove-ui';

const App = () => (
  <BaseApp>
    ...children
  </BaseApp>
);

export default App;
```

#### Using exported UI components
Quick example to **get you started** in your own components / containers:
```jsx
import React, { Fragment } from 'react';
import { Radio } from 'lalamove-ui';

const MyComponent = () => (
  <Fragment>
    <Radio name="payment" value="cash">
      Radio 1
    </Radio>
  </Fragment>
);

export default MyComponent;
```

## Storybook
Clone this repo, and run:
```bash
## install dependencies
yarn

## visit localhost:9092 to browse components library and usage
yarn storybook
```

## Components Development
As this repo is still in early development stage, sometimes you may need to modify this repo for development. It is suggested to develop the components in storybook.

#### Develop with storybook
Clone this repo, and run:
```bash
## install dependencies
yarn

## visit localhost:9092 for storybook
yarn storybook

## run test
yarn test

## run linter for JS
yarn lint:js

## run linter for CSS, including styled-components
yarn lint:css
```

Remember to export your components in `src/index.js`.

Please make sure your changes is able to build **when you commit your changes**.
```bash
## run build
yarn build
```

#### Develop with your own repo
If you would like to test it in your own repo, you may choose one of the methods below:

##### (1) yarn link in local environment
```bash
## create package symlink in your environment
## https://yarnpkg.com/lang/en/docs/cli/link/
cd lalamove-ui
yarn link

## link this package to your own repo
cd ../your-own-repo
yarn link lalamove-ui

## start live reloading for this repo, any changes in this repo will reflect to your own repo
cd ../lalamove-ui
yarn start

## remember to unlink when finished development
cd ../your-own-repo
yarn unlink lalamove-ui
cd ../lalamove-ui
yarn unlink
```

##### (2) commit to this repo / forked repo
Commit your changes on **your own branch** in this repo / forked repo.

Change `package.json` in your own repo to install your commit version (replace `<commit-id>` with your commit id):
```json
"dependencies": {
    "lalamove-ui": "git+ssh://git@git.easygroup.co:12888/andrew.mok/lalamove-ui.git#<commit-id>"
}
```

## Stylelint for Development
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

## Coding Standard
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Todo
* Avoid `injectGlobal` in `utils/fonts`, and allow users to config fonts in components level
* Code cleanup for existing components
* Increase unit test coverage
* Theme support
* Please help to add more here...

## Support
* For any questions / bugs report, please feel free to [open an issue here](https://git.easygroup.co/lalamove/lalamove-ui/issues).

## License
* [Copyright (c) 2018 Lalamove. All rights reserved.](./LICENSE.md)
