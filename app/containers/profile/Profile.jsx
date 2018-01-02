  import React, {Component} from 'react';
  import classNames from 'classnames/bind';
  import {connect} from 'react-redux';
  import Grid from 'material-ui/Grid';
  import PropTypes from 'prop-types';
  import Avatar from 'material-ui/Avatar';
  import Checkbox from 'material-ui/Checkbox';
  import IconButton from 'material-ui/IconButton';
  import EditIcon from 'material-ui-icons/Edit';
  import Tooltip from 'material-ui/Tooltip';
  import Toolbar from 'material-ui/Toolbar';
  import DeleteIcon from 'material-ui-icons/Delete';
  import FilterListIcon from 'material-ui-icons/FilterList';
  import commonStyles from '../../css/components/profile.css';
  import Sidebar from '../../components/Sidebar';
  import profileList from '../../utils/profileList';
  import externalsList from '../../utils/externalsList';
  import EnhancedTable from '../../components/EnhancedTable';


  const cx = classNames.bind(commonStyles);

  /* Note: This is kept as a container-level component,  i.e. We should keep this as the container that does the data-fetching  and dispatching of actions if you decide to have any sub-components. */
  class Profile extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className={cx('profile')}>
          <Grid item xs={12} md={12} className={cx('profile-full')}>
            <Grid
              container
              className={cx('profile-full')}
              spacing={0}
              alignContent="center"
              alignItems="center"
              justify="center">
              <Grid item className={cx('profile-container')}
                xs={10}>
                <Grid container
                  spacing={0}>
                  <Grid item xs={3}>
                    <Avatar
                      className={cx('profile-ava')}
                      alt="Karan Kotwal"
                      src="https://pbs.twimg.com/profile_images/479678965569687552/wKWIzIIZ_400x400.jpeg" />
                    </Grid>
                    <Grid item xs={8}>
                      <h1>Karan Kotwal</h1>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton className={cx('profile-edit-icon')} aria-label="Edit">
                        <EditIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container
                    spacing={0}>
                    <Grid item xs={12} sm={6} md={3}>
                      <p>kkotwal@udel.edu</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <p>Gender</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <p>location</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <p>Picture</p>
                    </Grid>
                  </Grid>
                  <Grid container
                    spacing={0}>
                    <Grid item xs={12}>
                      <EnhancedTable />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>);
        }
      }

      function mapStateToProps({user}) {
        return {user};
      }
      export default connect(mapStateToProps)(Profile);
