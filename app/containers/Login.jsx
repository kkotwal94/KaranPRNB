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
    this.inputs = [{label: 'Username'}, {label: 'Password', password: true}];
    this.formSubmitText = 'Login';
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const email = this.email.input.value;
    const password = this.password.input.value;
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
                  formSubmit={this.handleOnSubmit}
                  formSubmitText={formSubmitText}
                  formSubmitIcon={<Send />}
                />
      </AuthenticationLayout>
  );
  }
}

export default Login;
