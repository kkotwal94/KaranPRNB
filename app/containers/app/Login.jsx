import React, { Component } from 'react';
import Send from 'material-ui-icons/Send';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {manualLogin} from '../../actions/users';
import AuthenticationForm from '../../components/AuthenticationForm';
import AuthenticationLayout from '../../components/AuthenticationLayout';
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
    this.props.manualLogin({email, password});
  }

  render() {
    const inputs = this.inputs;
    const formSubmitText = this.formSubmitText;
    const {isWaiting, message, authenticated} = this.props.user;

    return (
      <AuthenticationLayout>
        <AuthenticationForm
                  title="Log in"
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

Login.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired,
}

function mapStateToProps({user}) {
  return {
    user
  };
}

export default connect(mapStateToProps, {manualLogin})(Login);
