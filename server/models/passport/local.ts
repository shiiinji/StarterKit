'use strict';
import User, {IUserModel} from '../user';

export = (email: string, password: string, done: any) => {
  User.findOne({email}, (_err, user: IUserModel) => {
    if (user) {
      return user.comparePassword(password, (_err, isMatch) => {
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, {
          message: 'Your email or password combination is not correct.',
        });
      });
    }
  });
};
