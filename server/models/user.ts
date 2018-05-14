import mongoose, {Document, Model} from 'mongoose';
import {IUser} from './interfaces/user';
const bcrypt = require('bcrypt-nodejs');
import {NextFunction} from 'express';

export interface IUserModel extends IUser, Document {
  comparePassword(
    candidatePassword: string,
    cb: (err: Error | null, isMatch: boolean | null) => {},
): void;
}

const userSchema = new mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, required: true},
  userId: {type: String, required: true, unique: true},
  email: {type: String, unique: true, required: [true, 'No email provided']},

  password: {type: String, required: [true, 'No password provided']},
  hashValue: {type: String},
  resetTime: {type: String},
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  tokens: Array,
  lastLoginTime: {type: Date},
  passwordUpdatedTime: {type: Date},

  instagramAccessToken: {type: String},
  instagramUserObject: {type: Object},

  createdTime: {type: Date, default: Date.now},
  updatedTime: {type: Date, default: Date.now},
}).pre('save', function(next: NextFunction) {
  if (this) {
    const doc = this as IUserModel;
    if (!doc.isModified('password')) return next();
    return bcrypt.genSalt(333, (saltErr: Error, salt: string) => {
      if (saltErr) return next(saltErr);
      return bcrypt.hash(doc.password, salt, null, (hashErr: mongoose.Error, hash: string) => {
        if (hashErr) return next(hashErr);
        doc.password = hash;
        return next();
      });
    });
  }
  return this;
});

/*
 Defining our own custom document instance method
 */
userSchema.methods.comparePassword = function(
  candidatePassword: string,
  cb: (err: Error | null, isMatch: boolean | null) => {},
) {
  bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
    if (err) return cb(err, null);
    return cb(null, isMatch);
  });
};

const User: Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema);

export default User;
