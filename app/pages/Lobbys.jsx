import React, { Component } from 'react';
import Page from '../pages/Page';
import LobbysContainer from '../containers/Lobbys';

class Lobbys extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Lobbys | PassTheAux';
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
        <LobbysContainer {...this.props} />
      </Page>
    );
  }
}

export default Lobbys;
