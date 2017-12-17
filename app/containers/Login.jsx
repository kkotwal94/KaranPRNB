import React, { Component } from 'react';
import Send from 'material-ui-icons/Send';
import {manualLogin, loginError} from '../actions/users';
import AuthenticationForm from '../components/AuthenticationForm';
import AuthenticationLayout from '../components/AuthenticationLayout';
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Login extends Component {

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.inputs = [{label: 'Username', ref: (el) => { this.userNameTextField = el; }},
                   {label: 'Password', password: true, ref: (el) => { this.passwordTextField = el; }}];
    this.formSubmitText = 'Login';
  }


  handleOnSubmit(event) {
    event.preventDefault();
    const email = this.userNameTextField.value;
    const password = this.passwordTextField.value;
    console.log(this.userNameTextField.value);
    console.log(this.passwordTextField.value);

    console.log('Login submitting!');
    manualLogin({email, password});
  }

  render() {
    const inputs = this.inputs;
    const formSubmitText = this.formSubmitText;

    return (
      <AuthenticationLayout>
        <AuthenticationForm
                  title="Log in"
                  inputs={inputs}
                  formSubimt={this.handleOnSubmit}
                  formSubmitText={formSubmitText}
                  formSubmitIcon={<Send />}
                />
      </AuthenticationLayout>
  );
  }
}

export default Login;
