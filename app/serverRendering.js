import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './containers/AppContainer';
import { createStore } from 'redux';

module.exports = function(req, res) {
  if (process.env.NODE_ENV === 'development') {
    res.send(`
			<!doctype html>
			<html>
				<head>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
					<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
					<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
					<title>Github-React Project</title>
				</head>
				<body>
					<div id='app'></div>

					<script src='/bundle.js'></script>
				</body>
			</html>
		`);
  } else if (process.env.NODE_ENV === 'production') {
    res.send(`
			<!doctype html>
			<html>
				<head>
					<title>Github-React Project</title>
					<link rel='stylesheet' href='bundle.css'>
				</head>
				<body>
					<div id='app'>${renderToString(
            <Provider store={createStore(reducers)}>
              <StaticRouter location={req.url} context={{}}>
                <App />
              </StaticRouter>
            </Provider>,
          )}</div>
					<script src='bundle.js'></script>
				</body>
			</html>
		`);
  }
};
