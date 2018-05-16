import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const {APPDBHOST} = process.env;

export const connectMongoose = () => {
  return new Promise<null>(resolve => {
    mongoose.connect(`mongodb://${APPDBHOST}`);
    mongoose.connection.on('open', () => {
      resolve();
      console.log('Mongoose connected.');
    });
  });
};
