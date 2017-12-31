import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Dashboard, About, NotFound, Inbox,
         Landing, Login, Signup, Settings, Lobbys, Profile,
         ToS, UserLobbies, UserStatistics, ProfileApp, Themes,
         Friends }
         from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */

// Should pass in store for redirect and login
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route path="about" component={About} />
      <Route path="login" component={Login} />
      <Route path="register" component={Signup} />
      <Route path="lobbys" component={Lobbys} />
      <Route path="terms" component={ToS} />
      <Route path="profile" component={ProfileApp} onEnter={requireAuth}>
        <IndexRoute component={Profile} />
        <Route path="lobby" component={UserLobbies} onEnter={requireAuth} />
        <Route path="statistics" component={UserStatistics} onEnter={requireAuth} />
        <Route path="inbox" component={Inbox} onEnter={requireAuth} />
        <Route path="settings" component={Settings} onEnter={requireAuth} />
        <Route path="friends" component={Friends} onEnter={requireAuth} />
        <Route path="theme" component={Themes} onEnter={requireAuth} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  );
};
