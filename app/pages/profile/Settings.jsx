import React, { Component } from 'react';
import Page from '../Page';
import SettingsContainer from '../../containers/profile/Settings';

class Settings extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Settings | PassTheAux';
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
        <SettingsContainer {...this.props} />
      </Page>
    );
  }
}

export default Settings;
