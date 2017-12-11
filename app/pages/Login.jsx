import React, { Component } from 'react';
import Page from '../pages/Page';
import LoginContainer from '../containers/Login.jsx';

class Login extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Login | PassTheAux';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'PassTheAux Login' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <LoginContainer {...this.props} />
      </Page>
    );
  }
}

export default Login;
