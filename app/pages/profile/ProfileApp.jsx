import React from 'react';
import Page from '../Page';
import ProfileContainer from '../../containers/profile/ProfileApp';
import { title, meta, link } from '../assets';

const Profile = props => (
  <Page title={title} meta={meta} link={link}>
    <ProfileContainer {...props} />
  </Page>
);

export default Profile;
