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


const cx = classNames.bind(styles);
// Justifying my own MuiThemeProvider theme
const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: indigo,
    error: red,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={cx('app')}>
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
