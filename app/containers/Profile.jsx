import React, {Component} from 'react';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import commonStyles from '../css/components/profile.css';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';

const cx = classNames.bind(commonStyles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Profile extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <span>Profile</span>
      </div>
    );
  }
}

Profile.propTypes = {


};

function mapStateToProps({user, match, location, history, ownProps}) {
  console.log(user);
  return {
    user
  };
}
export default connect(mapStateToProps)(Profile);
