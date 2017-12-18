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

  determineRender() {
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

  render() {
    const mobile = this.mobile;
    const { classes } = this.props;
    return (
      <div className={cx('appbar')}>
        <AppBar position="static" color="primary" className={cx('navigation')}>
          <Toolbar>
            {mobile && (
            <IconButton className={cx('menu-button')} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>)}
            <Typography type="title" color="inherit" className={cx('flex')}>
              <Link to="/">
                PassTheAux
              </Link>
            </Typography>
            <div className={cx('nav-center')}>
              <Link to="/dashboard">
                <Button color="contrast">Dashboard</Button>
              </Link>

              <Link to="/about">
                <Button color="contrast">About</Button>
              </Link>

              <Link to="/404notfound">
                <Button color="contrast">404 Not Found</Button>
              </Link>
            </div>
            {this.determineRender()}
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
