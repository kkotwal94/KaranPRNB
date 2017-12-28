import React, { Component } from 'react';
import Page from '../pages/Page';
import InboxContainer from '../containers/Inbox';

class Inbox extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Inbox | PassTheAux';
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
        <InboxContainer {...this.props} />
      </Page>
    );
  }
}

export default Inbox;
