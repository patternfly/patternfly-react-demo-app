# patternfly-react-demo-app
The PatternFly React demo app serves as a demo for building your production app with [Patternfly](https://github.com/patternfly/patternfly), [PatternFly React](https://github.com/patternfly/patternfly-react), [Patternfly WebComponents](https://github.com/patternfly-webcomponents/patternfly-webcomponents/), [Redux](https://github.com/reactjs/redux), [Redux Saga](https://github.com/redux-saga/redux-saga), and [React Router](https://github.com/ReactTraining/react-router).

Running Demo: 
https://patternfly-react-demo-app.firebaseapp.com/

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Typescript](https://github.com/wmonk/create-react-app-typescript).

Looking for [Flow.js](https://flow.org/)/ES6? See our [flowjs branch](https://github.com/patternfly/patternfly-react-demo-app/tree/flowjs).

By default, the production build gives an offline-first [Progressive Web App](https://goo.gl/KwvDNy). [Code Splitting](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting) is also used via [dynamic import()](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand) to split your code into small chunks which you can load on demand.

The most recent version of the create-react-app guide can be found [here](https://github.com/facebookincubator/create-react-app#user-guide) for further customizations to this boilerplate.

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
│   ├── /actions/               # Redux actions
│   ├── /api/                   # Local and remote API clients
│   ├── /components/            # Shared React UI components
│   ├── /css/                   # Compiled LESS/CSS to be included in Webpack bundle
│   ├── /fonts/                 # Fonts to be included in Webpack bundle
│   ├── /img/                   # Images to be included in Webpack bundle
│   ├── /less/                  # LESS preprocessed styles
│   ├── /models/                # Typescript models used in Redux and throughout app
│   ├── /pages/                 # Reusable tsx page templates used in various routes
│   ├── /reducers/              # Redux reducers
│   ├── /sagas/                 # Redux sagas
│   ├── /typings/               # Custom typings for es6/non-typescript libraries
│   ├── /App.less               # Application LESS
│   ├── /App.test.tsx           # Application tests written in Jest
│   ├── /App.tsx                # Application UI Component
│   ├── /index.tsx              # Main React container entry
│   ├── /logo.svg               # Application logo
│   ├── /registerServiceWorker  # sw-precache-webpack-plugin
│   ├── /Routes.tsx             # React Router application routes
│── package-lock.json           # NPM5 package lock file
│── package.json                # The list of project dependencies and NPM scripts
└── tsconfig.json               # Typescript compiler configurations
└── tslint.json                 # Typescript lint options
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Styling w/ LESS and Patternfly
All Patternfly build assets are copied to `src` so that they may be included in the default
create-react-app build. You can choose to include/remove any Patternfly LESS by simply changing `src/less/index.less`. This file also includes `App.less` after all Patternfly LESS
has been imported. Once LESS compiles, the resulting CSS can be found in `src/css/App.css`.

**Note** Only static assets which are `import`'ed into your application will be included in your resulting build output. I.e. `import './css/App.css';` will ensure `App.css` is included.

## Do you have a question?
There are a few things that can be done to resolve any questions or problems you might have.
 - Search our [GitHub issues](https://github.com/patternfly/patternfly-react/issues)
 - Join our patternfly-react channel on [Slack](http://slack.patternfly.org)
 - Join our mailing-list following the instructions on [patternfly.org](http://www.patternfly.org/community/)
