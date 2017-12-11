import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import {signUp, signUpError} from '../actions/users';
import signupStyles from '../css/components/signup.css';


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
        <p className={cx('register-title')}>SignUp</p>
      </div>
  );
  }
}

export default Signup;
