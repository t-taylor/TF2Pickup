import feathers from 'feathers';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import handler from 'feathers-errors/handler';
import services from './services';
import globalHooks from './global-hooks';
import client from './client';

/**
 * Setup the feathers app and configure all of the parts.
 *
 * @param {Object} config - The config with the env keys.
 * @returns {JSX} - Returns the app.
 */
export default function setupApp(config) {
  const app = feathers();

  app.set('config', config);

  mongoose.Promise = global.Promise;
  mongoose.connect(config.MONGO_URL);

  app
    .options('*', cors())
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }));

  app
    .configure(hooks())
    .configure(rest())
    .configure(socketio({
      path: '/ws/',
      wsEngine: 'uws',
    }));

  app
    .hooks(globalHooks)
    .configure(services)
    .configure(client);

  app.use(handler({
    html(error, req, res) {
      app.service('logs').create({
        message: 'Something went wrong on the server!',
        info: error,
        environment: 'server',
      });

      res.send(`Something went wrong :(', ${JSON.stringify(error.message)}`);
    },
  }));

  return app;
}
