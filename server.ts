import dotenv from 'dotenv';
dotenv.config();
import express, {Request, Response} from 'express';
import session from 'express-session';
import next from 'next';
import passport from 'passport';
import {join, resolve} from 'path';
import {connectMongoose} from './server/config/connectMongoose';
import {expressConfig} from './server/config/expressConfig';
import {configSession} from './server/config/expressSession';
import {routes as nextRoutes} from './server/config/nextRoutes';
import passportConfig from './server/config/passport/passport';
import {restRoutes} from './server/config/restRoutes';

const startServer = async (): Promise<void> => {
  const app = express();
  const {PORT, BASEURL} = process.env;
  const dir = resolve('./app');
  const dev = process.env.NODE_ENV !== 'production';
  const nextApp = next({dev, dir});
  const nextHandle = nextRoutes.getRequestHandler(nextApp);
  const root = process.cwd();

  await nextApp.prepare();
  await connectMongoose();

  expressConfig(app);

  // express session
  app.use(session(configSession));

  // passport init * required set up before routes code
  passportConfig();
  app.use(passport.initialize());
  app.use(passport.session());

  restRoutes(app);
  app.get('*', (req: Request, res: Response) => {
    if (req.url.startsWith('/static/')) {
      if (req.url.endsWith('/sw.js')) {
        res.setHeader('Service-Worker-Allowed', '/');
      }
      res.sendFile(join(root, `${req.url}`));
      // app.use('/static/', express.static(resolve(join('./static'))));
    } else {
      return nextHandle(req, res);
    }
  });

  // Debug code
  process.on('unhandledRejection', console.dir);

  app.listen(PORT, (error: object) => {
    if (error) {
      console.error(error);
    } else {
      console.info(`==> Listening on port %s. Open up ${BASEURL}/ in your browser.`, PORT);
    }
  });
};

module.exports = startServer();
