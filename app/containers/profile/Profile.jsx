  import React, {Component} from 'react';
  import classNames from 'classnames/bind';
  import {connect} from 'react-redux';
  import Grid from 'material-ui/Grid';
  import PropTypes from 'prop-types';
  import Avatar from 'material-ui/Avatar';
  import IconButton from 'material-ui/IconButton';
  import EditIcon from 'material-ui-icons/Edit';
  import SaveIcon from 'material-ui-icons/Save';
  import commonStyles from '../../css/components/profile.css';
  import EnhancedTable from '../../components/EnhancedTable';
  import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
  import { MenuItem } from 'material-ui/Menu';
  import { FormControl, FormHelperText } from 'material-ui/Form';
  import Select from 'material-ui/Select';

  const cx = classNames.bind(commonStyles);

  /* Note: This is kept as a container-level component,  i.e. We should keep this as the container that does the data-fetching  and dispatching of actions if you decide to have any sub-components. */
  class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        gender: '',
        location: '',
        website: '',
        edit: true,
      };
    }

    handleChange = prop => (event) => {
      this.setState({ [prop]: event.target.value });
    };

    handleEditMode = () => {
      if (this.state.edit) {
        this.setState({edit: false});
      } else {
        this.setState({edit: true});
      }
    }

    renderIcon() {
      if (this.state.edit) {
      return (
        <SaveIcon />
      );
    }
    return (
      <EditIcon />
    );
    }


    render() {
      const {name, gender, location, website} = this.state;
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
                      <IconButton onClick={this.handleEditMode} className={cx('profile-edit-icon')} aria-label="Edit">
                        {this.renderIcon()}
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container
                    >
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input
                          id="name"
                          value={name}
                          onChange={this.handleChange('name')}
                          ref={el => this.profileName = el} />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select
                          id="gender"
                          value={gender}
                          onChange={this.handleChange('gender')}
                          ref={el => this.profileGender = el}>
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={'Male'}>Male</MenuItem>
                          <MenuItem value={'Female'}>Female</MenuItem>
                          <MenuItem value={'NotSure'}>Not Sure</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <InputLabel htmlFor="location">Location</InputLabel>
                        <Input
                          id="location"
                          value={location}
                          onChange={this.handleChange('location')}
                          ref={el => this.profileLocation = el} />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <InputLabel htmlFor="website">Website</InputLabel>
                        <Input
                          id="website"
                          value={website}
                          onChange={this.handleChange('website')}
                          ref={el => this.profileWebsite = el} />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container
                    spacing={0}>
                    <Grid item xs={12}>
                      <p> Hello </p>
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
