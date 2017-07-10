import * as React from 'react';
import { Route } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

interface Props {
  href: string;
  onClick: Function;
  className: string;
}
export const RouteNavItem: React.StatelessComponent<Props> = props => {
  return (
    <Route
      path={props.href}
      exact
      children={({ match }) =>
        <NavItem
          active={match ? true : false}
          href={props.href}
          className={props.className}
          onSelect={(eventKey: any, e?: React.SyntheticEvent<{}>) =>
            props.onClick(e)}
        >
          {props.children}
        </NavItem>}
    />
  );
};
