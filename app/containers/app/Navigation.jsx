import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import {ListItemIcon, ListItemText} from 'material-ui/List';
import Popover from 'material-ui/Popover';
import {MenuList, MenuItem} from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import SettingsIcon from 'material-ui-icons/Settings';
import ExitIcon from 'material-ui-icons/ExitToApp';
import PersonIcon from 'material-ui-icons/Person';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import styles from '../../css/components/navigation.css';
import {logOut} from '../../actions/users';

const cx = classNames.bind(styles);
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.mobile = false;
    this.state = {
      menuOpen: false,
      anchorEl: null,
      anchorOriginVertical: 'bottom',
      anchorOriginHorizontal: 'center',
      transformOriginVertical: 'top',
      transformOriginHorizontal: 'center',
      positionTop: 200, // Just so the popover can be spotted more easily
      positionLeft: 400, // Same as above
      anchorReference: 'anchorEl'
    };
  }

  closeAndlogout = () => {
    this.handleClose();
    this.props.logOut();
  }

  handleOpen = () => {
    this.setState({
      menuOpen: true,
      anchorEl: ReactDOM.findDOMNode(this.profileAvatar)
    });
  }

  handleClose = () => {
    this.setState({menuOpen: false});
  }

  determineAuthRender() {
    const {authenticated} = this.props.user;
    if (authenticated) {
      return (
        <div>
          <Avatar
            aria-owns={this.state.menuOpen
              ? 'menu-list'
              : null} onClick={this.handleOpen} ref={node => {
              this.profileAvatar = node;
            }}>
            <AccountCircleIcon />
          </Avatar>
          <Popover
              open={this.state.menuOpen}
              anchorEl={this.state.anchorEl}
              anchorReference={this.state.anchorReference}
              anchorPosition={{
              top: this.state.positionTop,
              left: this.statepositionLeft
            }} onClose={this.handleClose} anchorOrigin={{
              vertical: this.state.anchorOriginVertical,
              horizontal: this.state.anchorOriginHorizontal
            }} transformOrigin={{
              vertical: this.state.transformOriginVertical,
              horizontal: this.state.transformOriginHorizontal
            }}>
            <ClickAwayListener onClickAway={this.handleClose}>
              <Paper>
                <MenuList>
                  <Link to="/profile">
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText inset="inset" primary="Profile" />
                    </MenuItem>
                  </Link>
                  <Link to="/profile/inbox">
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText inset="inset" primary="Inbox" />
                    </MenuItem>
                  </Link>
                  <Link to="/profile/settings">
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon>
                        <SettingsIcon />
                      </ListItemIcon>
                      <ListItemText inset="inset" primary="Settings" />
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={this.closeAndlogout}>
                    <ListItemIcon>
                      <ExitIcon />
                    </ListItemIcon>
                    <ListItemText inset="inset" primary="Logout" />
                  </MenuItem>
                </MenuList>
              </Paper>
            </ClickAwayListener>
          </Popover>
        </div>);
    }
    return (<div>
      <Link to="/login">
        <Button color="contrast">Log In</Button>
      </Link>
      <span>
        |
      </span>
      <Link to="/register">
        <Button color="contrast">Sign up</Button>
      </Link>
    </div>);
  }

  determineNavigationRender() {
    const {authenticated} = this.props.user;
    if (authenticated) {
      return (<div>
        <Link to="/dashboard">
          <Button color="contrast">Dashboard</Button>
        </Link>
        <Link to="/lobbys">
          <Button color="contrast">Lobbys</Button>
        </Link>
        <Link to="/about">
          <Button color="contrast">About</Button>
        </Link>
      </div>);
    }
    return (<div>
      <Link to="/lobbys">
        <Button color="contrast">Lobbys</Button>
      </Link>
      <Link to="/about">
        <Button color="contrast">About</Button>
      </Link>
    </div>);
  }

  render() {
    const mobile = this.mobile;
    return (<div className={cx('appbar')}>
      <AppBar
        position="static" color="primary" className={cx('navigation')} classes={{
          root: cx('navigation-landing')
        }}>
        <Toolbar>
          {
            mobile && (<IconButton className={cx('menu-button')} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>)
          }
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
    </div>);
  }
}

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps, {logOut})(Navigation);
