import {NextFunction, Request, Response} from 'express';
import {Schema} from 'mongoose';
import passport from 'passport';
import {loggerError} from '../helpers/logger';
import {IUser} from '../models/interfaces/user';
import UserModel from '../models/user';

class User {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req);
      const user: IUser = await User.tryFetchLoginStatus(req, res, next);
      await User.addPassportLoginUser(user, req);
      return res.status(200).json({
        user,
      });
    } catch (err) {
      // TODO Write catch condition
      loggerError.error(err);
    }
  }

  async session(req: Request, res: Response) {
    try {
      if (req.user !== undefined && req.user._id !== undefined && req.user._id) {
        const userId = req.user._id;
        const user = await User.findUserById(userId);
        if (!user) {
          return res.status(200).end();
        }
        req.user.password = undefined;
        res.status(200).json(req.user);
      } else {
        res.end();
      }
    } catch (err) {
      loggerError.error(err);
    }
  }

  async logout(req: Request, res: Response) {
    try {
      if (req.session) {
        req.session.destroy(() => {
          req.logout();
        });
      }
      return res.status(200).json();
    } catch (err) {
      loggerError.error(err);
    }
  }

  static tryFetchLoginStatus(req: Request, res: Response, next: NextFunction) {
    return new Promise<IUser>((resolve, reject) => {
      passport.authenticate('local', (authErr: Error, user: IUser) => {
        if (authErr) {
          reject(authErr);
        }
        if (!user) {
          reject(229); // not_match_name_password
        } else {
          resolve(user);
        }
      })(req, res, next);
    });
  }

  static addPassportLoginUser(user: IUser, req: Request) {
    return new Promise((resolve, reject) => {
      return req.logIn(user, (loginErr: Error) => {
        if (loginErr) {
          reject(228); // error_login
        } else {
          resolve();
        }
      });
    });
  }

  static findUserById(_id: Schema.Types.ObjectId) {
    return new Promise((resolve, reject) => {
      UserModel.findOne({_id}, '-salt -hashedPassword', (err: Error, admin: IUser) => {
        if (err) {
          reject(err);
        } else {
          resolve(admin);
        }
      });
    });
  }
}

export default User;
