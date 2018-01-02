import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Grid from 'material-ui/Grid';
import styles from '../../css/components/profileapp.css';
import Sidebar from '../../components/Sidebar';
import profileList from '../../utils/profileList';
import externalsList from '../../utils/externalsList';

const cx = classNames.bind(styles);
  // Justifying my own MuiThemeProvider theme
class ProfileApp extends Component {
    render() {
      return (
        <div className={cx('maxHeight')}>
          <Grid container className={cx('maxHeight')} spacing={0}>
            <Grid item xs={3} md={2} xl={2} className={cx('sidebar')}>
              <Sidebar
                sideBarElements={profileList}
                externalElements={externalsList}
              />
            </Grid>
            <Grid item xs={9} md={10} xl={10} className={cx('profile-container')}>
              {this.props.children}
            </Grid>
          </Grid>
        </div>
      );
    }
  }

ProfileApp.propTypes = {
  children: PropTypes.object
};

export default ProfileApp;
