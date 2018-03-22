import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `

    <!DOCTYPE html>
    <html class="no-js">
    <head>
        <meta charset="utf-8">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="shortcut icon" href="dist/img/favicon.ico">
        <link rel="apple-touch-icon" href="dist/img/apple-touch-icon.png">
        <link rel="apple-touch-icon" sizes="57x57" href="dist/img/apple-touch-icon-57x57-precomposed.png">
        <link rel="apple-touch-icon" sizes="72x72" href="dist/img/apple-touch-icon-72x72-precomposed.png">
        <link rel="apple-touch-icon" sizes="114x114" href="dist/img/apple-touch-icon-114x114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="dist/img/apple-touch-icon-precomposed.png">
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic">
        <link rel="stylesheet" href="dist/css/bootstrap.css">
        <link rel="stylesheet" href="dist/css/plugins.css">
        <link rel="stylesheet" href="dist/css/main.css">
        <link rel="stylesheet" href="dist/css/themes.css">
        <link rel="stylesheet" href="dist/css/app.css">
        <script src="dist/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="dist/js/app.js"></script>
    </body>
    </html>
  `;
};








