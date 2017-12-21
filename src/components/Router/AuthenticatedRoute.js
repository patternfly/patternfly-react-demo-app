import * as React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const AuthenticatedRoute = ({
  component: C,
  props: cProps,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        cProps.credentials && cProps.credentials.token ? (
          <C {...props} {...cProps} />
        ) : (
          <Redirect to={`/login`} />
        )
      }
    />
  );
};
AuthenticatedRoute.propTypes = {
  component: PropTypes.any,
  props: PropTypes.object
};
