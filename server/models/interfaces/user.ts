export interface IUser {
  userId: string;
  email: string;
  password: string;
  hashValue?: string;
  resetTime?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  tokens?: string[];
  lastLoginTime: Date;
  passwordUpdatedTime: Date;
  instagramAccessToken?: string;
  instagramUserObject?: string;
  createdTime: Date;
  updatedTime: Date;
}
