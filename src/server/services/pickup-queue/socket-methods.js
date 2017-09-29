/* eslint-disable promise/prefer-await-to-callbacks */

import gamemodes from '@tf2-pickup/configs/gamemodes';

function queueWithoutPlayer(queue, playerId) {
  return Object.assign({}, queue, {
    classes: Object
      .keys(queue.classes)
      .reduce((classes, className) => Object.assign(
        {},
        classes,
        { [className]: queue.classes[className].filter(player => player.id !== playerId) },
      ), {}),
  });
}

/**
 * Setup the socket methods for the users.
 *
 * @param {Object} app - The feathers app object.
 * @param {Object} socket - The socket connection.
 */
export default function socketMethods(app, socket) {
  const pickupQueue = app.service('pickup-queue');

  socket.on('pickup-queue.join', async ({
    gamemode,
    className,
  }) => {
    if (socket.feathers.user) {
      const region = socket.feathers.user.settings.region;
      const userId = socket.feathers.user.id;
      const queue = await pickupQueue.get(`${region}-${gamemode}`);

      const newQueue = queueWithoutPlayer(queue, userId);

      newQueue.classes[className].push({
        id: userId,
        ready: false,
        map: null,
        preReady: null,
      });

      await pickupQueue.patch(queue.id, { $set: { classes: newQueue.classes } });
    }
  });

  socket.on('pickup-queue.remove', async ({ gamemode }) => {
    if (socket.feathers.user) {
      const region = socket.feathers.user.settings.region;
      const userId = socket.feathers.user.id;
      const queue = await pickupQueue.get(`${region}-${gamemode}`);

      const newQueue = queueWithoutPlayer(queue, userId);

      await pickupQueue.patch(queue.id, { $set: { classes: newQueue.classes } });
    }
  });

  socket.on('disconnect', () => {
    if (socket.feathers.user) {
      const userId = socket.feathers.user.id;

      setTimeout(async () => {
        const user = await app.service('users').get(userId);

        if (!user.online) {
          Object
            .keys(gamemodes)
            .forEach(async (gamemode) => {
              const queue = await pickupQueue.get(`${user.settings.region}-${gamemode}`);

              const newQueue = queueWithoutPlayer(queue, userId);

              await pickupQueue.patch(queue.id, { $set: { classes: newQueue.classes } });
            });
        }
      }, 60 * 1000);
    }
  });
}
