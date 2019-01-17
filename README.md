# DEPRECATED

This project is no longer active and was used for PF3 implementations. Please see [patternfly-react-seed](https://github.com/patternfly/patternfly-react-seed) for PF4 demos.

# patternfly-react-demo-app

The PatternFly React demo app serves as a demo for building your production app with [Patternfly](https://github.com/patternfly/patternfly), [PatternFly React](https://github.com/patternfly/patternfly-react), [Redux](https://github.com/reactjs/redux), and [React Router](https://github.com/ReactTraining/react-router).

Running demo:
https://patternfly-react-demo-app.firebaseapp.com/#/

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The most recent version of the create-react-app guide can be found [here](https://github.com/facebookincubator/create-react-app#user-guide) for further customizations to this boilerplate.

## Quick Setup

**Note** If you do not have yarn installed run: `npm install -g yarn`

Run the following commands:

```
yarn install
yarn build
yarn start:dev
```

Note: `yarn start` is used only to override the production s2i (by default, the [bucharest-gold](https://github.com/bucharest-gold/centos7-s2i-web-app) OpenShift Builder image will serve the `build` directory).

## Deployment

You can deploy the app to Open Shift using the following commands:

```
oc new-project patternfly-react
find . | grep openshiftio | grep application | xargs -n 1 oc apply -f
oc new-app --template demo-app -p SOURCE_REPOSITORY_URL=https://github.com/patternfly/patternfly-react-demo-app
```

You can also create a Docker image using the following:

```
yarn docker:build
```

## Folder Structure

This project has the following structure:

```shell
.
├── /build/                     # Compiled build output
│   ├── /static/                # Compressed static assets (css,js,img)
│   ├── /index.html             # Compressed index.html
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # Static files such as favicon.ico etc.
│   ├── /index.html             # Customizable index.html
│   ├── favicon.ico             # Application icon to be displayed in bookmarks
├── /src/                       # Core application source
│   ├── /components/            # Shared React UI components
│   ├── /fonts/                 # Fonts to be included in Webpack bundle
│   ├── /img/                   # Images to be included in Webpack bundle
│   ├── /pages/                 # Reusable page templates used in various routes
│   ├── /App.scss               # Application SCSS
│   ├── /App.test.js            # Application tests written in Jest
│   ├── /App.js                 # Application UI Component
│   ├── /index.js               # Main React container entry
│   ├── /logo.svg               # Application logo
│   ├── /registerServiceWorker  # sw-precache-webpack-plugin
│   ├── /routes.js              # React Router application routes
│── package.json                # The list of project dependencies and NPM scripts
│── yarn.lock                   # Yarn package lock file
```

## Styling w/ Sass and Patternfly

PatternFly Sass was added via the [Create React App Preprocessor Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc). All Patternfly build assets are copied to `src` so that they may be included in the default
create-react-app build. The `App.scss` file will include all PatternFly Sass along with PatternFly React Sass extensions. Once Sass compiles, the resulting CSS can be found in `src/App.css`.

**Note** Only static assets which are `import`'ed into your application will be included in your resulting build output. I.e. `import './App.css';` will ensure `App.css` is included.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Prettier for VSCode

If you are using Visual Studio Code as your code editor of choice, there is a package extension that will allow you to format your JavaScript/TypeScript/CSS using Prettier.

### Prettier VSCode Installation

You can install the prettier extension by searching for `Prettier - Code formatter`

[Visual Studio Code Market Place: Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Upon installation you can begin using prettier through the command palette:

```
1. CMD + Shift + P -> Format Document
OR
1. Select the text you want to Prettify
2. CMD + Shift + P -> Format Selection
```

**Note** If you don't like the defaults, you can rebind `editor.action.formatDocument` and `editor.action.formatSelection` in the keyboard shortcuts menu of vscode.\*\*

More information on prettier for vscode can be found here: https://github.com/prettier/prettier-vscode

### Other Demos

We have some other demos of PatternFly React in the following branches. These provide some other examples of how to use PatternFly React in your application.

- [RCUE Product Demo](https://github.com/patternfly/patternfly-react-demo-app/tree/rcue) - this is an [RCUE](https://redhat-rcue.github.io/) variation of the PF React Demo App which can be used as a jumpstart boiler for building RCUE based products.
- [Redux Saga](https://github.com/patternfly/patternfly-react-demo-app/tree/redux-saga) - using Redux Saga and adding a login page in the PatternFly React Demo app boilerplate
- [Typescript](https://github.com/patternfly/patternfly-react-demo-app/tree/typescript) - using Typescript with the PatternFly React Demo app boilerplate
- [Flow JS](https://github.com/patternfly/patternfly-react-demo-app/tree/flowjs) - using Flow JS with the PatternFly React Demo app boilerplate

## Do you have a question?

There are a few things that can be done to resolve any questions or problems you might have.

- Search our [GitHub issues](https://github.com/patternfly/patternfly-react/issues)
- Join our patternfly-react channel on [Slack](http://slack.patternfly.org)
- Join our mailing-list following the instructions on [patternfly.org](http://www.patternfly.org/get-started/community/)
