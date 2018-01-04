import passport from 'passport';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;

export default (app) => {
  /*
   * User Routes
   */
  if (usersController) {
    app.post('/users', usersController.signUp);
    app.patch('/users/:id', usersController.updateProfile);
    app.post('/sessions', usersController.login);
    app.delete('/sessions', usersController.logout);
  }
};
