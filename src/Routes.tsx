import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './components/Router/AsyncComponent';
import { AuthenticatedRoute } from './components/Router/AuthenticatedRoute';
import { UnauthenticatedRoute } from './components/Router/UnauthenticatedRoute';

// Dynamic Imports added in ts 2.4.1, to be removed once 2.4 @types fixed in create-react-app-typescript
// https://github.com/Microsoft/TypeScript/issues/12364
declare global {
  interface System {
    import(request: string): Promise<any>;
  }
  var System: System;
}

const importHome = () => System.import('./pages/Home');
const importIpsum = () => System.import('./pages/Ipsum');
const importDolor = () => System.import('./pages/Dolor');
const importAmet = () => System.import('./pages/Amet');
const importOrbis = () => System.import('./pages/Orbis');
const importLogin = () => System.import('./pages/Login');
const importNotFound = () => System.import('./pages/NotFound');

interface Props {
  childProps: any;
}
export const Routes: React.StatelessComponent<Props> = props => {
  return (
    <Switch>
      <AuthenticatedRoute
        path="/"
        exact
        component={asyncComponent(importHome)}
        props={props.childProps}
      />
      <UnauthenticatedRoute
        path="/login"
        exact
        component={asyncComponent(importLogin)}
        props={props.childProps}
      />
      <AuthenticatedRoute
        path="/ipsum"
        exact
        component={asyncComponent(importIpsum)}
        props={props.childProps}
      />
      <AuthenticatedRoute
        path="/dolor"
        exact
        component={asyncComponent(importDolor)}
        props={props.childProps}
      />
      <AuthenticatedRoute
        path="/amet"
        exact
        component={asyncComponent(importAmet)}
        props={props.childProps}
      />
      <AuthenticatedRoute
        path="/orbis"
        exact
        component={asyncComponent(importOrbis)}
        props={props.childProps}
      />

      {/* Finally, catch all unmatched routes */}
      <Route component={asyncComponent(importNotFound)} />
    </Switch>
  );
};
