import * as React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

export const RouteNavItem = props => {
  return (
    <Route
      path={props.href}
      exact
      children={({ match }) => (
        <NavItem
          active={!!match}
          href={props.href}
          className={props.className}
          onSelect={(eventKey: any, e?: React.SyntheticEvent<{}>) =>
            props.onClick(e)
          }
        >
          {props.children}
        </NavItem>
      )}
    />
  );
};
RouteNavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};
