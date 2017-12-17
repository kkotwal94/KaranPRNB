import passport from 'passport';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;

export default (app) => {
  /*
   * User Routes
   */
  if (usersController) {
    app.post('/users', usersController.signUp);
    app.post('/sessions', usersController.login);
  }
};
