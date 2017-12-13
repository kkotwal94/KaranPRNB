import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import { deepOrange, indigo, red } from 'material-ui/colors';
import staticAssets from './static-assets';
// import rtl from 'jss-rtl'; // in-case you're supporting rtl


const sheetsRegistry = new SheetsRegistry();

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: indigo,
    error: red,
  },
});


const createApp = (store, props, jss) => renderToString(
  <JssProvider registry={sheetsRegistry} jss={jss}>
    <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
      <Provider store={store}>
        <RouterContext {...props} />
      </Provider>
    </MuiThemeProvider>
  </JssProvider>
);

// Grab our css from our sheetsRegistry


const buildPage = ({ componentHTML, initialState, headAssets, css }) => {
  return `
<!doctype html>
<html>
  <head>
    ${headAssets.title.toString()}
    ${headAssets.meta.toString()}
    ${headAssets.link.toString()}
    ${staticAssets.createStylesheets()}
    ${staticAssets.createTrackingScript()}
    <style id="jss-server-side" type="text/css">${css}</style>
  </head>
  <body>
    <div id="app" style="height:100%">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
    ${staticAssets.createAppScript()}
  </body>
</html>`;
};

export default (store, props) => {
  const initialState = store.getState();
  const jss = create(preset());
  jss.options.createGenerateClassName = createGenerateClassName;
  const componentHTML = createApp(store, props, jss);
  const headAssets = Helmet.renderStatic();
  const css = sheetsRegistry.toString();
  return buildPage({ componentHTML, initialState, headAssets, css });
};
