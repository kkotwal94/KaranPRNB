import React, {Component} from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import {MenuList, MenuItem} from 'material-ui/Menu';
import {ListItemIcon, ListItemText} from 'material-ui/List';
import ExitIcon from 'material-ui-icons/ExitToApp';
import profileMenuList from '../utils/profileMenuList';
import {logOut} from '../actions/users';

class ProfileMenu extends Component {

  constructor(props) {
    super(props);
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

  determineAvatarMenuRender() {
    const handleOpen = this.handleOpen;

    const menuLists = (
      profileMenuList.map((item, i) =>
        <Link to={item.url} key={'menu-item-' + i}>
          <MenuItem onClick={this.handleClose}>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText inset="inset" primary={item.name} />
          </MenuItem>
        </Link>
      )
    );
    const logOut = (
      <MenuItem onClick={this.closeAndlogout}>
        <ListItemIcon>
          <ExitIcon />
        </ListItemIcon>
        <ListItemText inset="inset" primary="Logout" />
      </MenuItem>
    );
    const avatarRender = (
    <div>
          <Avatar
            aria-owns={this.state.menuOpen
              ? 'menu-list'
              : null} onClick={handleOpen} ref={node => {
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
                  {menuLists}
                  {logOut}
                </MenuList>
              </Paper>
            </ClickAwayListener>
          </Popover>
        </div>);
        return avatarRender;
  }

  render() {
    return (
      <div>
        {this.determineAvatarMenuRender()}
      </div>
    );
  }
}

ProfileMenu.propTypes = {
  logOut: PropTypes.func.isRequired,
};

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps, {logOut})(ProfileMenu);
