import User from '../user';

export = (id: any, done: any) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
};
