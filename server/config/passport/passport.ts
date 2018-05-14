/* Initializing passport.js */

import passport from 'passport';
import {deserializeUserModel} from '../../models/passport/index';
import local from './local';

export = () => {
  if (deserializeUserModel) {
    passport.serializeUser<any, any>((user, done) => {
      done(null, user.id);
    });
    passport.deserializeUser(deserializeUserModel);
  }
  // use the following strategies
  local(passport);
};
