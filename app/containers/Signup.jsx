import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import signupStyles from '../css/components/signup.css';


const cx = classNames.bind(signupStyles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Sign up</h1>
      </div>
  );
  }
}

export default Signup;
