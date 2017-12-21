import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './components/Router/AsyncComponent';
import { AuthenticatedRoute } from './components/Router/AuthenticatedRoute';
import { UnauthenticatedRoute } from './components/Router/UnauthenticatedRoute';

const importHome = asyncComponent(() => import('./pages/Home'));
const importIpsum = asyncComponent(() => import('./pages/Ipsum'));
const importDolor = asyncComponent(() => import('./pages/Dolor'));
const importAmet = asyncComponent(() => import('./pages/Amet'));
const importOrbis = asyncComponent(() => import('./pages/Orbis'));
const importLogin = asyncComponent(() => import('./pages/Login'));
const importNotFound = asyncComponent(() => import('./pages/NotFound'));

type Props = {
  childProps: any
};
export const Routes = (props: Props) => {
  return (
    <Switch>
      <AuthenticatedRoute
        path="/"
        exact
        component={importHome}
        props={props.childProps}
      />
      <UnauthenticatedRoute
        path="/login"
        exact
        component={importLogin}
        props={props.childProps}
      />
      <AuthenticatedRoute
        path="/ipsum"
        exact
        component={importIpsum}
        props={props.childProps}
      />
      <AuthenticatedRoute
        path="/dolor"
        exact
        component={importDolor}
        props={props.childProps}
      />
      <AuthenticatedRoute
        path="/amet"
        exact
        component={importAmet}
        props={props.childProps}
      />
      <AuthenticatedRoute
        path="/orbis"
        exact
        component={importOrbis}
        props={props.childProps}
      />

      {/* Finally, catch all unmatched routes */}
      <Route component={asyncComponent(importNotFound)} />
    </Switch>
  );
};
