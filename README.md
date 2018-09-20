# React/Redux/Sass Boilerplate

Description

## Features

**This boilerplate features all the latest tools**

-   **React.js** - React 16
-   **React Router 4** - Navigational components that offers declarative routing
-   **Redux.js** - Redux is a predictable state container for JavaScript apps
-   **Redux Saga** -  redux middleware library
-   **Babel** - ES6
-   **Webpack 4** - Code Splitting, Optimized Prod Build and more
-   **Webpack Serve** - A lean, modern, and flexible webpack development server
-   **Test** - Jest with Enzyme
-   **Lint** - Eslint, Stylelint
-   **Styles** - SCSS Styling

## Getting Started

**Step 1: Clone this repo**

```
git clone https://github.com/hectorubiera/react-redux-boilerplate.git
cd react-redux-boilerplate
```

**Step 2: install all the necessary dependencies**

```
npm i
```

**Step 3: Start the development server**

```
npm run serve
```

## Server

This boilerplate is using `Webpack Serve` for the development server.

To make any configuration changes. Go to the path below.

```
./webpack.serve.js
```

## Linters

This boilerplate runs `eslint`, `stylelint` everytime a user saves a `SASS`, `JS` file.

To make any configuration changes. Go to the path below.

**eslint:** `./.eslintrc`

**stylelint:** `./stylelintrc`

## Test

To test your project run the commands below

To run all tests

```
npm run test
```

To run all test and watch your code

```
npm run test:watch
```

To run all test and see the coverage

```
npm run test:coverage
```

To run a single test

```
npm run test:single <TEST NAME>
```

## Production build

To get the production ready files, run the command below.

```
npm run build
```

The files will be generate to the `build` folder which is located at `./build`.

## Development folder structure

```
├── src
    ├── app
       ├── components
       ├── containers
       ├── reducers
       ├── root
       ├── sagas
       ├── store
       ├── index.js
    ├── images
    ├── sass
       ├── base
       ├── components
       ├── config
       ├── fonts
       ├── mixins
       ├── vendors
       ├── styles.scss
```
