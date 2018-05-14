import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express, {Express} from 'express';
import helmet from 'helmet';
import {join, resolve} from 'path';
// const {IpFilter} = require('express-ipfilter');
// const {allowedIps} = process.env;
// const allowedIpsString = allowedIps!.split(',');

export const expressConfig = (app: Express) => {
  app.set('views', resolve(join('server', 'views')));
  app.set('view engine', 'jsx');
  app.set('view cache', false);
  app.disable('x-powered-by');
  app.engine('jsx', require('express-react-views').createEngine());
  app.use('/public/', express.static(resolve(join('./public'))));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(helmet());
  app.use(cookieParser());
  // app.use(
  //   IpFilter(allowedIpsString, {
  //     mode: 'allow',
  //     logLevel: 'deny',
  //     detectIp: (req: Express.Request)  => {
  //       return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //     },
  //   }),
  // );
};
