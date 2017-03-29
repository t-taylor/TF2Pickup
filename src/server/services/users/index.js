import mongoose from 'mongoose';
import service from 'feathers-mongoose';

import schema from './schema';
import hooks from './hooks';
import filters from './filters';

export default function users() {
  const that = this;

  that.service('users', service({
    Model: mongoose.model('Users', schema),
    id: 'id',
    events: [
      'userLoggedIn',
      'userLoggedOut',
    ],
  }));

  that.service('users').hooks(hooks);
  that.service('users').filter(filters);
}
