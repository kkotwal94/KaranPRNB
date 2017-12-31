  import React, {Component} from 'react';
  import classNames from 'classnames/bind';
  import {connect} from 'react-redux';
  import Grid from 'material-ui/Grid';
  import PropTypes from 'prop-types';
  import commonStyles from '../../css/components/profile.css';
  import Sidebar from '../../components/Sidebar';
  import profileList from '../../utils/profileList';
  import externalsList from '../../utils/externalsList';

  const cx = classNames.bind(commonStyles);

  /* Note: This is kept as a container-level component,  i.e. We should keep this as the container that does the data-fetching  and dispatching of actions if you decide to have any sub-components. */
  class Profile extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <span>Profile</span>
        </div>);
        }
      }

      function mapStateToProps({user}) {
        return {user};
      }
      export default connect(mapStateToProps)(Profile);
