import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import loginStyles from '../css/components/login.css';


const cx = classNames.bind(loginStyles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
  );
  }
}

export default Login;
