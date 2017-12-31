import React, { Component } from 'react';
import Page from '../Page';
import DashboardContainer from '../../containers/app/Dashboard';

class Dashboard extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Dashboard | PassTheAux';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'PassTheAux Dashboard' }
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
