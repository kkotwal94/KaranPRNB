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
import { deepOrange, lightBlue, red } from 'material-ui/colors';
import staticAssets from './static-assets';
// import rtl from 'jss-rtl'; // in-case you're supporting rtl


const sheetsRegistry = new SheetsRegistry();

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: lightBlue,
    error: red,
  },
});

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

const createApp = (store, props) => renderToString(
  <JssProvider registry={sheetsRegistry} jss={jss}>
    <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
      <Provider store={store}>
        <RouterContext {...props} />
      </Provider>
    </MuiThemeProvider>
  </JssProvider>
);

//Grab our css from our sheetsRegistry
const registeredCss = sheetsRegistry.toString();

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

  </head>
  <body>
    <div id="app">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
    ${staticAssets.createAppScript()}
    <style id="jss-server-side" type="text/css">${css}</style>
  </body>
</html>`;
};

export default (store, props) => {
  const initialState = store.getState();
  const componentHTML = createApp(store, props);
  const headAssets = Helmet.renderStatic();
  const css = registeredCss;
  console.log(css);
  return buildPage({ componentHTML, initialState, headAssets, css });
};
