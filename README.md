# List Facebook Projects on Github

This project list facebook project on Github and show detail information.

## Features

- [**React**](https://reactjs.org/) 16.4.1
- [**React-Router**](https://www.npmjs.com/package/react-router) 4.2.0
- Server-side rendering with [**React Router**](https://github.com/ReactTraining/react-router) 4.x.
- [**Redux**](http://redux.js.org/) predictable state containers.
- [**Redux Saga**](https://redux-saga.github.io/redux-saga/) [~~Redux Thunk~~]
  for asynchronous action creators.
- Hot reloading using [**Webpack HMR**](https://webpack.js.org/concepts/hot-module-replacement/).
- [**Webpack 3**](https://webpack.js.org/) for both development and production bundles.
- [**Material-UI**](https://material-ui.com/)
- Responsive front-end interface with [**Bootstrap 3**](http://getbootstrap.com/).
- [**Express**](http://expressjs.com/) 4.x server.

## Quickstart

```
git clone https://github.com/bluearcontech/FacebookGit.git your_app
cd your_app
npm install
npm run start
```

## Available Commands

`npm run start` - starts the development server.

## File Structure

### Webpack Config

Webpack for bundling modules. Configuration file is `webpack.config.js`

### Server

It uses Express framework.

If `NODE_ENV` is development, we apply Webpack middlewares for bundling and Hot Module Replacement.

### Client

The `app` directory contains all the shared components, routes and reducers.
`action` folder have all actions for fetching data.
`reducers` folder have app holds app state
`saga` folder have all saga for fetching github data.
`routes` have all routing for this app
`store` for saga store
`service` defines API for fetching github data using `fetch`
The `server` runs node js server

## ScreenShot

![Alt text](app/screen/screen1.png?raw=true 'Homepage')
![Alt text](app/screen/screen2.png?raw=true 'Sidebar_Menu')
![Alt text](app/screen/screen3.png?raw=true 'Repository_list')
![Alt text](app/screen/screen4.png?raw=true 'Repository_detail')
