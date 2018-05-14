import connectMongo from 'connect-mongo';
import session from 'express-session';
const MongoStore = connectMongo(session);
import mongoose from 'mongoose';

const maxAge = 8 * 60 * 60 * 1000;
export const configSession = {
  resave: false,
  saveUninitialized: false,
  secret: '6xF#4F@j02Yi7c@aVbsrK1jrbz%#$hj4vmeglkhk&*ww5UQghnjxx',
  proxy: true, // The "X-Forwarded-Proto" header will be used.
  name: 'adminSessionId',
  // Add HTTPOnly, Secure attributes on Session Cookie
  // If secure is set, and you access your site over HTTP, the cookie will not be set
  cookie: {
    maxAge,
    httpOnly: true,
    // Development Mode, because need to use localhost
    secure: Boolean(process.env.cookieSecure),
    domain: process.env.cookieDomain,
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
  }),
};
