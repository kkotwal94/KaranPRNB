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
          <Link to="/login">
            <Button color="contrast">Log In</Button>
          </Link>
          <span> | </span>
          <Link to="/register">
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
           <Link to="/dashboard">
             <Button color="contrast">Dashboard</Button>
           </Link>
           <Link to="/about">
             <Button color="contrast">About</Button>
           </Link>
         </div>
       );
     }
     return (
       <div>
         <Link to="/about">
           <Button color="contrast">About</Button>
         </Link>
       </div>
    );
   }

  render() {
    const mobile = this.mobile;
    const { classes } = this.props;
    return (
      <div className={cx('appbar')}>
        <AppBar position="static" color="primary" className={cx('navigation')}
          classes={{
            root: cx('navigation-landing')
          }}>
          <Toolbar>
            {mobile && (
            <IconButton className={cx('menu-button')} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>)}
            <Typography type="title" color="inherit" className={cx('flex')}>
              <Link to="/" className={cx('navigation-title')}>
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
  logOut: PropTypes.func.isRequired,
};

function mapStateToProps({user}) {
  return {
    user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
