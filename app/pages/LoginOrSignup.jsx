import React, { Component } from 'react';
import Page from '../pages/Page';
import DashboardContainer from '../containers/LoginOrSignup.jsx';

class Dashboard extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Dashboard | Kareddit';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'Kareddit Dashboard' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <DashboardContainer {...this.props} />
      </Page>
    );
  }
}

export default Dashboard;
