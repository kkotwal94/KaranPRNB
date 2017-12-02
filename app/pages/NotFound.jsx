import React, { Component } from 'react';
import Page from '../pages/Page';
import NotFoundContainer from '../containers/NotFound';

class NotFound extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return '404 Not Found';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: '404 Not Found' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <NotFoundContainer {...this.props} />
      </Page>
    );
  }
}

export default NotFound;
