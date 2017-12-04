import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Dashboard, About, NotFound, Landing } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */

// Should pass in store for redirect and login
export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  );
};
