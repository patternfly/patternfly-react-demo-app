import * as React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const UnauthenticatedRoute = ({
  component: C,
  props: cProps,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        cProps.credentials && cProps.credentials.token ? (
          <Redirect to={`/`} />
        ) : (
          <C {...props} {...cProps} />
        )
      }
    />
  );
};
UnauthenticatedRoute.propTypes = {
  component: PropTypes.any,
  props: PropTypes.object
};
