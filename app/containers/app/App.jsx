import React, {Component} from 'react';
import red from 'material-ui/colors/red';
import deepOrange from 'material-ui/colors/deepOrange';
import indigo from 'material-ui/colors/indigo';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Navigation from '../app/Navigation';
import Message from '../../components/Message';
import Footer from '../../components/Footer';
import styles from '../../css/main.css';
import Reboot from 'material-ui/Reboot';


const cx = classNames.bind(styles);
// Justifying my own MuiThemeProvider theme
const primary = {
  50: '#e4e5e8',
  100: '#babfc6',
  200: '#8d94a1',
  300: '#5f697b',
  400: '#3c495e',
  500: '#1a2942',
  600: '#17243c',
  700: '#131f33',
  800: '#0f192b',
  900: '#080f1d',
  A100: '#5d88ff',
  A200: '#2a63ff',
  A400: '#0041f6',
  A700: '#003bdc',
  contrastDefaultColor: 'light',
};

const theme = createMuiTheme({
  palette: {
    primary,
    secondary: red,
    error: red,
  },
  typography: {
    subheading: {
      color: '#667A89'
    },
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={cx('app')}>
          <Reboot />
          <Navigation />
          <div className={cx('content-wrapper')}>
            {this.props.children}
          </div>
          <Message />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
