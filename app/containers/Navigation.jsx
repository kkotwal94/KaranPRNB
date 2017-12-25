import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import styles from '../css/components/navigation.css';
import { logOut } from '../actions/users';

const cx = classNames.bind(styles);
// import passTheAuxLogo from '../images/PassTheAux.png';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.mobile = false;
    this.state = {
      navigationStyle: this.determineNavigationStyle(),
    };
  }

  setNavigationStyle = (path) => {
    console.log(path);
    switch (path) {
      case '':
        this.setState({navigationStyle: 'navigation-landing'});
        break;
      case 'about':
        this.setState({navigationStyle: 'navigation-about'});
        break;
      case 'dashboard':
        this.setState({navigationStyle: 'navigation-dashboard'});
        break;
      case 'login':
      case 'register':
        this.setState({navigationStyle: 'navigation-auth'});
        break;
      default:
        this.setState({navigationStyle: 'navigation-landing'});
      }
    }

    determineNavigationStyle = () => {
      let path = window.location.pathname;
      path = path.split('/')[1];
      switch (path) {
        case '':
          return 'navigation-landing';
        case 'about':
          return 'navigation-about';
        case 'login':
        case 'register':
          return 'navigation-auth';
        case 'dashboard':
          return 'navigation-dashboard';
        default:
          return 'navigation-landing';
        }
      }
  determineAuthRender() {
    const { authenticated } = this.props.user;
    if (authenticated) {
      return (
        <Button color="contrast" onClick={this.props.logOut}>Logout</Button>
      );
    }
      return (
        <div>
          <Link to="/login" onClick={() => this.setNavigationStyle('login')}>
            <Button color="contrast">Log In</Button>
          </Link>
          <span> | </span>
          <Link to="/register" onClick={() => this.setNavigationStyle('register')}>
            <Button color="contrast">Sign up</Button>
          </Link>
        </div>
      );
    }

   determineNavigationRender() {
     const { authenticated } = this.props.user;
     if (authenticated) {
       return (
         <div>
           <Link to="/dashboard" onClick={() => this.setNavigationStyle('dashboard')}>
             <Button color="contrast">Dashboard</Button>
           </Link>
           <Link to="/about" onClick={() => this.setNavigationStyle('about')}>
             <Button color="contrast">About</Button>
           </Link>
         </div>
       );
     }
     return (
       <div>
         <Link to="/about" onClick={() => this.setNavigationStyle('about')}>
           <Button color="contrast">About</Button>
         </Link>
       </div>
    );
   }

  render() {
    const mobile = this.mobile;
    const { classes } = this.props;
    const navigationColor = this.state.navigationStyle;
    return (
      <div className={cx('appbar')}>
        <AppBar position="static" color="primary" className={cx('navigation')}
          classes={{
            root: cx(navigationColor)
          }}>
          <Toolbar>
            {mobile && (
            <IconButton className={cx('menu-button')} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>)}
            <Typography type="title" color="inherit" className={cx('flex')}>
              <Link to="/" onClick={() => this.setNavigationStyle('')} className={cx('navigation-title')}>
                PassTheAux
              </Link>
            </Typography>
            <div className={cx('nav-center')}>
              {this.determineNavigationRender()}
            </div>
            {this.determineAuthRender()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps({user}) {
  return {
    user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
