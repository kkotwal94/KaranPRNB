import React, { Component } from 'react';
import Page from '../Page';
import LandingContainer from '../../containers/app/Landing';

class Landing extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Landing | PassTheAux';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'PassTheAuxFam!' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <LandingContainer {...this.props} />
      </Page>
    );
  }
}

export default Landing;
