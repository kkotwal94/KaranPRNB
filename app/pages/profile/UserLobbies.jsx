import React, { Component } from 'react';
import Page from '../Page';
import UserLobbiesContainer from '../../containers/profile/UserLobbies';

class UserLobbies extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'UserLobbies | PassTheAux';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'PassTheAux UserLobbies' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <UserLobbiesContainer {...this.props} />
      </Page>
    );
  }
}

export default UserLobbies;
