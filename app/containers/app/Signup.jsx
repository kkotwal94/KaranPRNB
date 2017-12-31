import React, { Component } from 'react';
import Send from 'material-ui-icons/Send';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {signUp, signUpMismatch} from '../../actions/users';
import AuthenticationForm from '../../components/AuthenticationForm';
import AuthenticationLayout from '../../components/AuthenticationLayout';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Signup extends Component {

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.inputs = [{label: 'Username', ref: (el) => { this.userNameTextField = el; }},
                   {label: 'Password', password: true, ref: (el) => { this.passwordTextField = el; }},
                   {label: 'Verify Password', password: true, ref: (el) => { this.passwordVerifyTextField = el; }}];
    this.formSubmitText = 'Sign up';
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const email = this.userNameTextField.value;
    const password = this.passwordTextField.value;
    const verifyPassword = this.passwordVerifyTextField.value;
    console.log('Sign up submitting!');
    console.log(email);
    console.log(password);
    console.log(verifyPassword);
    if (verifyPassword === password) {
      console.log('Sign me up');
      this.props.signUp({email, password});
    } else {
      console.log('in mismatch');
      this.props.signUpMismatch('Passwords do not match!');
    }
  }
  render() {
    const {isWaiting, message, authenticated} = this.props.user;
    const inputs = this.inputs;
    const formSubmitText = this.formSubmitText;
    return (
      <AuthenticationLayout>
        <AuthenticationForm
                  title="Signup!"
                  inputs={inputs}
                  formSubmit={this.handleOnSubmit}
                  formSubmitText={formSubmitText}
                  formSubmitIcon={<Send />}
                  isWaiting={isWaiting}
                  message={message}
                  authenticated={authenticated}
                />
      </AuthenticationLayout>
  );
  }
}

Signup.propTypes = {
  user: PropTypes.object,
  signUp: PropTypes.func.isRequired,
  signUpMismatch: PropTypes.func.isRequired
};

/*
 * Redux connects to update our prop user whenever something regarding user is changed
 */
function mapStateToProps({user}) {
  return {
    user
  };
}

export default connect(mapStateToProps, {signUp, signUpMismatch})(Signup);
