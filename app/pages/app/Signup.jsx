import React, { Component } from 'react';
import Page from '../Page';
import SignupContainer from '../../containers/app/Signup';

class Signup extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Signup | PassTheAux';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'PassTheAux Signup' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <SignupContainer {...this.props} />
      </Page>
    );
  }
}

export default Signup;
