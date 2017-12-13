import React, {Component} from 'react';
import red from 'material-ui/colors/red';
import deepOrange from 'material-ui/colors/deepOrange';
import indigo from 'material-ui/colors/indigo';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Navigation from '../containers/Navigation';
import Footer from '../components/Footer';
import styles from '../css/main.css';


const cx = classNames.bind(styles);
// Justifying my own MuiThemeProvider theme
const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: indigo,
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
 * https://github.class name {
   constructor(arguments) {

   }
 }om/rackt/react-router/blob/latest/docs/Introduction.md
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={cx('app')}>
          <Navigation />
          <div className={cx('content-wrapper')}>
            {this.props.children}
          </div>
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
