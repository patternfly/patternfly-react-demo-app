import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  path: string;
  exact: any;
  component: React.ComponentClass<any>;
  props: any;
}
export const UnauthenticatedRoute: React.StatelessComponent<Props> = ({
  component: C,
  props: cProps,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        cProps.credentials && cProps.credentials.token
          ? <Redirect to={`/`} />
          : <C {...props} {...cProps} />}
    />
  );
};
