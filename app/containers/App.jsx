import React, {Component} from 'react';
import Navigation from '../containers/Navigation';
import Footer from '../containers/Footer';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/main';
import red from 'material-ui/colors/red';
import deepOrange from 'material-ui/colors/deepOrange';
import lightBlue from 'material-ui/colors/lightBlue';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
const cx = classNames.bind(styles);
// Justifying my own MuiThemeProvider theme
const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: lightBlue,
    error: red,
  },
});

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
   const jssStyles = document.getElementById('jss-server-side');
   if (jssStyles && jssStyles.parentNode) {
     jssStyles.parentNode.removeChild(jssStyles);
   }
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={cx('app')}>
          <Navigation />
          {this.props.children}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
