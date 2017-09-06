import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cookie from 'js-cookie';
import {
  Theme,
  Background,
  Animations,
  Snackbar,
  Dialog,
} from 'materialize-react';

import app from '../../app';
import Notifications from '../../components/notifications';

import Head from './head';

/**
 * Render a basic layout which will try login with the token from a cookie and make sure
 * the windows view is wide enough.
 *
 * @class
 */
export default class BasicLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    addNotification: PropTypes.func.isRequired,
  };

  /**
   * Tries to login with the token from the cookies.
   */
  async componentWillMount() {
    const token = cookie.get('feathers-jwt');

    if (token) {
      try {
        await app.authenticate({
          strategy: 'jwt',
          accessToken: token,
        });
      } catch (error) {
        this.props.addNotification(error.message);
      }
    }
  }

  render() {
    return (
      <Theme>
        <Dialog.Controller>
          <Snackbar.Controller>
            <Background>
              <Head />

              <Animations />

              <Snackbar.Container />

              <Notifications />

              {this.props.children}
            </Background>
          </Snackbar.Controller>
        </Dialog.Controller>
      </Theme>
    );
  }
}
