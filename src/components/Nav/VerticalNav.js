import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RouteNavItem } from './RouteNavItem';
import * as cx from 'classnames';

export const VerticalNav = props => {
  const overviewClass = cx({
    'list-group-item': true,
    'secondary-nav-item-pf': true,
    active: window.location.pathname === '/'
  });
  return (
    <div className="nav-pf-vertical">
      <ul className="list-group">
        <li className={overviewClass} data-target="#ipsum-secondary">
          <Link to="/">
            <span className="fa fa-dashboard" data-toggle="tooltip" />
            <span className="list-group-item-value">Overview</span>
          </Link>
          <div id="-secondary" className="nav-pf-secondary-nav">
            <div className="nav-item-pf-header">
              <a
                className="secondary-collapse-toggle-pf"
                data-toggle="collapse-secondary-nav"
              />
              <span>Overview</span>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/home">
                  <span className="list-group-item-value">Projects</span>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/stages">
                  <span className="list-group-item-value">Stages</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <RouteNavItem
          href="/ipsum"
          onClick={props.handleNavClick}
          className="list-group-item"
        >
          <span className="fa fa-shield" data-toggle="tooltip" title="Ipsum" />
          <span className="list-group-item-value">Ipsum</span>
        </RouteNavItem>
        <RouteNavItem
          href="/dolor"
          onClick={props.handleNavClick}
          className="list-group-item"
        >
          <span className="fa fa-users" data-toggle="tooltip" title="Dolor" />
          <span className="list-group-item-value">Dolor</span>
        </RouteNavItem>
        <RouteNavItem
          href="/amet"
          onClick={props.handleNavClick}
          className="list-group-item"
        >
          <span
            className="fa fa-space-shuttle"
            data-toggle="tooltip"
            title="Amet"
          />
          <span className="list-group-item-value">Amet</span>
        </RouteNavItem>
        <RouteNavItem
          href="/orbis"
          onClick={props.handleNavClick}
          className="list-group-item"
        >
          <span
            className="fa fa-paper-plane"
            data-toggle="tooltip"
            title="Orbis"
          />
          <span className="list-group-item-value">Orbis</span>
        </RouteNavItem>
      </ul>
    </div>
  );
};
VerticalNav.propTypes = {
  handleNavClick: PropTypes.func
};
