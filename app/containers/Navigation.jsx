import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import injectSheet from 'react-jss';
import styles from '../css/components/navigation.css';
const cx = classNames.bind(styles);
// import passTheAuxLogo from '../images/PassTheAux.png';

const styleSheet = ({
appbar: {
  width: '100%',
},

flex: {

},

menuButton: {
  marginLeft: -12,
  marginRight: 20,
},

navCenter: {
  display: 'flex',
  flex: 1
},
});

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.mobile = false ;
  }
  render() {
    const mobile = this.mobile;
    const { classes } = this.props;
    return (
      <div className={cx('appbar')}>
        <AppBar position="static" color="primary">
          <Toolbar>
            {mobile && (
            <IconButton className={cx('menu-button')} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>)}
            <Typography type="title" color="inherit" className={cx('flex')}>
              PassTheAux
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
            <Link to="/login">
              <Button color="contrast">Log In</Button>
            </Link>
            |
            <Link to="/register">
              <Button color="contrast">Sign up</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default (Navigation);
