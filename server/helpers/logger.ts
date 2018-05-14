import {configure, getLogger} from 'log4js';

configure({
  appenders: {
    access: {
      type: 'dateFile',
      filename: 'logs/access.log',
      pattern: '-yyyy-MM-dd',
      backups: 3,
    },
    application: {
      type: 'dateFile',
      filename: 'logs/application.log',
      pattern: '-yyyy-MM-dd',
      backups: 3,
    },
    utility: {
      type: 'dateFile',
      filename: 'logs/utility.log',
      pattern: '-yyyy-MM-dd',
      backups: 3,
    },
    error: {
      type: 'dateFile',
      filename: 'logs/error.log',
      pattern: '-yyyy-MM-dd',
      backups: 3,
    },
    expressRateLimit: {
      category: 'expressRateLimit',
      type: 'dateFile',
      filename: 'logs/expressRateLimit.log',
      pattern: '-yyyy-MM-dd',
      backups: 3,
    },
  },
  categories: {
    default: {
      appenders: ['access', 'application', 'utility', 'error', 'expressRateLimit'],
      level: 'error',
    },
  },
});

export const loggerAccess = getLogger('access');
export const loggerApplication = getLogger('application');
export const loggerUtility = getLogger('utility');
export const loggerError = getLogger('error');
export const loggerExpressRateLimit = getLogger('expressRateLimit');
