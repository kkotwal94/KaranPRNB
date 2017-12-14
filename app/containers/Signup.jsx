import React, { Component } from 'react';
import Send from 'material-ui-icons/Send';
import {signUp, signUpError} from '../actions/users';
import AuthenticationForm from '../components/AuthenticationForm';
import AuthenticationLayout from '../components/AuthenticationLayout';
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Signup extends Component {

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handleEmailChange.bind(this);
    this.handleVerifyPasswordChange = this.handleEmailChange.bind(this);
    this.state = {email: '', password: '', verifyPassword: ''};
    this.inputs = [{label: 'Username', onChange: this.handleEmailChange},
                   {label: 'Password', password: true, onChange: this.handlePasswordChange},
                   {label: 'Verify Password', password: true, onChange: this.handleVerifyPasswordChange}];
    this.formSubmitText = 'Sign up';
  }

  handleEmailChange = (event) => {
    console.log("Email changing");
    //event.persist(); //This allows are synthetic method to propogate the correct values
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    console.log("Password changing");
    this.setState({password: event.target.value});
  }

  handleVerifyPasswordChange = (event) => {
    console.log("Other password changing");
    this.setState({verifyPassword: event.target.value});
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const verifyPassword = this.state.verifyPassword;
    console.log('Sign up submitting!');
    console.log(email);
    console.log(password);
    console.log(verifyPassword);
    if (verifyPassword === password) {
      signUp({email, password});
    } else {
      signUpError('Passwords do not match!');
    }
  }
  render() {
    let inputs = this.inputs;
    let formSubmitText = this.formSubmitText;
    return (
      <AuthenticationLayout>
        <AuthenticationForm
                  title="Signup!"
                  inputs={inputs}
                  formSubmit={this.handleOnSubmit}
                  formSubmitText={formSubmitText}
                  formSubmitIcon={<Send />}
                />
      </AuthenticationLayout>
  );
  }
}

export default Signup;
