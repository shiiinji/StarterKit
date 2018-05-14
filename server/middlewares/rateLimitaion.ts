import {Request} from 'express';
const RateLimit = require('express-rate-limit');
const {loggerExpressRateLimit} = require('../helpers/logger');

export const rateLimit = new RateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  delayAfter: 15, // begin slowing down responses after the first request
  delayMs: 3 * 1000, // slow down subsequent responses by 3 seconds per request
  max: 500, // start blocking after 500 requests
  statusCode: 239,
  keyGenerator: (req: Request) => {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  },
  onLimitReached: (req: Request) => {
    loggerExpressRateLimit.error(
      new Date(),
      req.headers['x-forwarded-for'],
      req.connection.remoteAddress,
    );
  },
});
