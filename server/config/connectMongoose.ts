import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const {appDBHost} = process.env;

export const connectMongoose = () => {
  return new Promise<null>(resolve => {
    mongoose.connect(`mongodb://${appDBHost}`);
    mongoose.connection.on('open', () => {
      resolve();
      console.log('Mongoose connected.');
    });
  });
};
