import {Express} from 'express';
import User from '../controllers/user';
const {isUserAuthenticated} = require('../middlewares/userAuthentication');

export const restRoutes = (app: Express) => {
  const user = new User();

  // user route
  app.post('/v1/user/login', user.login);
  app.post('/v1/user/logout', isUserAuthenticated, user.logout);
  app.get('/v1/user/session', user.session);
};
