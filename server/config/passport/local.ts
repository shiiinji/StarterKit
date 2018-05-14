import {PassportStatic} from 'passport';
import passportLocal from 'passport-local';
import {localPassportModel} from '../../models/passport/index';

export = (passport: PassportStatic) => {
  passport.use(
    new passportLocal.Strategy(
      {
        usernameField: 'email',
      },
      localPassportModel,
    ),
  );
};
