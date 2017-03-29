import React from 'react';
import { Switch, Route } from 'react-router-dom';
import gamemodes from '@tf2-pickup/configs/gamemodes';
import { ConnectedRouter } from 'react-router-redux';
import Helmet from 'react-helmet';

import app from '../app';
import BasicLayout from './layouts/basic-layout';
import MainLayout from './layouts/main-layout';
import LandingPageView from './views/landing-page';
import PickupView from './views/pickup';
import { titleSuffix } from '../config';

function gamemodeRoutes() {
  return Object
    .values(gamemodes)
    .reduce((current, gamemode) => {
      const aliasRoutes = gamemode.aliases.map(alias => (
        <Route
          path={`/${alias}`}
          key={`${gamemode.name}-${alias}`}
          component={PickupView}
        />
      ), []);

      aliasRoutes.push((
        <Route
          path={`/${gamemode.name}`}
          key={gamemode.name}
          component={PickupView}
        />
      ));

      return current.concat(aliasRoutes);
    }, []);
}

export default class App extends React.Component {
  state = { location: null };

  componentWillMount() {
    app.history.listen(() => {
      this.setState({ location: app.history.location });
    });

    this.setState({ location: app.history.location });
  }

  render() {
    return (
      <ConnectedRouter history={app.history}>
        <BasicLayout>
          <Switch location={this.state.location}>
            <Route
              strict
              exact
              path="/"
              component={LandingPageView}
            />

            {gamemodeRoutes()}

            <Route
              exact
              path="/about"
              component={MainLayout}
            />

            <Route
              exact
              path="/help"
              component={MainLayout}
            />

            <Route
              exact
              path="/rules"
              component={MainLayout}
            />

            <Route
              exact
              path="/join-slot/:gamemode/:class"
            />

            <Route
              exact
              path="/profile"
            />

            <Route
              exact
              path="/profile/:steamId"
            />

            <Route
              exact
              path="/settings"
            />

            <Helmet
              titleTemplate={`%s ${titleSuffix}`}
              link={[{
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700',
              }, {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic',
              }]}

              meta={[{ charset: 'utf-8' }, {
                name: 'twitter:card',
                content: 'summary',
              }, {
                name: 'twitter:site',
                content: '@TF2Pickup',
              }, {
                name: 'twitter:title',
                content: 'TF2Pickup.net | Web-based Pickup system',
              }, {
                name: 'twitter:description',
                content: [
                  'A web-based pickup system, where players can easily play',
                  'competitive Team Fortress 2 in a variety of formats',
                ].join(' '),
              }, {
                name: 'twitter:image',
                content: 'summary',
              }]}
            />
          </Switch>
        </BasicLayout>
      </ConnectedRouter>
    );
  }
}
