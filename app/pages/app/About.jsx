import React, { Component } from 'react';
import Page from '../Page';
import AboutContainer from '../../containers/app/About';

class About extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'About | PassTheAux';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'About KaReddit' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <AboutContainer {...this.props} />
      </Page>
    );
  }
}

export default About;
