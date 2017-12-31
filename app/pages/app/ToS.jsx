import React, { Component } from 'react';
import Page from '../Page';
import ToSContainer from '../../containers/app/ToS';

class ToS extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Terms of Agreement | PassTheAux';
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
        <ToSContainer {...this.props} />
      </Page>
    );
  }
}

export default ToS;
