# lalamove-ui
React components that implement [Lalamove Design](https://lalamove.com), for all web projects.

- [Introduction](http://bit.ly/llm-ui-introduction) - Introduction of lalamove-ui
- [Documentation](https://ui.lalamove.com) - Detailed documentation for UI components
- [Storybook](https://ui.lalamove.com/storybook) - Showcase and examples of UI components
- [Lanhu](http://bit.ly/llm-ui-lanhu) - UI system design guideline

## Install
Before installing this library, please make sure you have the following installed in your own repo:
```json
{
    "downshift": "^2.0.14",
    "prop-types": "^15.6.1",
    "moment": "^2.22.1",
    "polished": "^3.0.0",
    "react": "^16.3.2",
    "react-dates": "^18.0.2",
    "react-dom": "^16.3.2",
    "styled-components": "^3.3.3"
}
```

Install **lalamove-ui** in your own repo:

- Replace `<version-number>` with the [latest version number](https://git.easygroup.co/lalamove/lalamove-ui/tags):
```bash
yarn add git+ssh://git@git.easygroup.co:12888/lalamove/lalamove-ui.git#<version-number>
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

First, please embed the required fonts into your application, for example, you can copy the following code into the 
`<head>` element of your web app.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700" />
<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanstc.css" />
```

At the top level of your application, instantiate an `BaseApp` component and pass the rest of your application as its children.

```bash
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
```bash
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

We do support partial import for smaller built too
```bash
import Radio from 'lalamove-ui/dist/components/Radio';
```

## Storybook
Clone this repo, and run:
```bash
## install dependencies
yarn

## visit localhost:9092 to browse components library
yarn storybook
```

## Styleguide (Documentation)
Clone this repo, and run:
```bash
## install dependencies
yarn

## visit localhost:6060 to browse styleguide and usage
yarn doc
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

**Remember to export your components in `src/index.js`.**

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
    "lalamove-ui": "git+ssh://git@git.easygroup.co:12888/lalamove/lalamove-ui.git#<commit-id>"
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

## Contributing Guidelines
- [lalamove-ui Contributing Guidelines](./CONTRIBUTING.md)

## License
* [Copyright (c) 2018 Lalamove. All rights reserved.](./LICENSE.md)
