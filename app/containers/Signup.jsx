import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Send from 'material-ui-icons/Send';
import {signUp, signUpError} from '../actions/users';
import signupStyles from '../css/components/signup.css';
import AppBar from 'material-ui/AppBar';

const cx = classNames.bind(signupStyles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Signup extends Component {

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const email = this.email.input.value;
    const password = this.password.input.value;
    const verifyPassword = this.verifypassword.input.value;

    if (verifyPassword === password) {
      signUp({email, password});
    } else {
      signUpError('Passwords do not match!');
    }
  }
  render() {
    return (
      <div className={cx('register')}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={0}
            alignContent="center"
            alignItems="center"
            justify="center">
            <Grid
                item
                className={cx('register-grid')}
                xs={10}
                sm={4}
                xl={2}>
              <AppBar position="relative" className={cx('register-title')}>
                <div className={cx('register-title-text')}>
                  Sign up
                </div>
              </AppBar>
              <Paper className={cx('register-paper')}>

                <Grid className={cx('register-module')}>

                  <Grid container direction="column" justify="center" alignItems="center" className={cx('register-align')}>
                    <Grid item>
                      <TextField
                        id="username"
                        label="Username"
                        required
                        autoComplete="off"
                        placeholder="Username"
                        className={cx('register-textfield')}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="password"
                        label="Password"
                        type="password"
                        required
                        autoComplete="new-password"
                        placeholder="Password"
                        margin="normal"
                        className={cx('register-textfield')}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="password-verification"
                        label="Verify Password"
                        type="password"
                        required
                        autoComplete="new-password"
                        margin="normal"
                        className={cx('register-textfield')}
                      />
                    </Grid>
                    <Grid item>
                      <Button raised color="primary">
                        Create
                        <Send />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
  );
  }
}

export default Signup;
