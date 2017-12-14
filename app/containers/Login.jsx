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
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {email: '', password: ''};
    this.inputs = [{label: 'Username', onChange: this.handleEmailChange},
                   {label: 'Password', password: true, onChange: this.handlePasswordChange}];
    this.formSubmitText = 'Login';
  }

  handleEmailChange = (event) => {
    console.log('Email changing');
    // event.persist(); //This allows are synthetic method to propogate the correct values
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    console.log('Password changing');
    this.setState({password: event.target.value});
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    console.log('Login submitting!');
    console.log(email);
    console.log(password);
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
