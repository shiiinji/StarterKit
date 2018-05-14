import {connectMongoose} from '../server/config/connectMongoose';

(async () => {
  await connectMongoose();
})();
