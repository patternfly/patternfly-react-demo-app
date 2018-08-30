import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
  VerticalNav,
  VerticalNavItem,
  VerticalNavSecondaryItem,
  VerticalNavMasthead,
  VerticalNavBrand,
  VerticalNavIconBar,
  Dropdown,
  Icon,
  MenuItem
} from 'patternfly-react';
import pfLogo from 'patternfly/dist/img/logo-alt.svg';
import pfBrand from 'patternfly/dist/img/brand-alt.svg';
import { routes } from './routes';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.menu = routes();
  }
  handleNavClick = (event: Event) => {
    event.preventDefault();
    const target = (event.currentTarget: any);
    const { history } = this.props;
    if (target.getAttribute) {
      const href = target.getAttribute('href');
      history.push(href);
    }
  };

  renderContent = () => {
    const allRoutes = [];
    this.menu.map((item, index) => {
      allRoutes.push(
        <Route key={index} exact path={item.to} component={item.component} />
      );
      if (item.subItems) {
        item.subItems.map((secondaryItem, subIndex) =>
          allRoutes.push(
            <Route
              key={subIndex}
              exact
              path={secondaryItem.to}
              component={secondaryItem.component}
            />
          )
        );
      }
      return allRoutes;
    });

    return (
      <Switch>
        {allRoutes}
        <Redirect from="*" to="/" key="default-route" />
      </Switch>
    );
  };

  navigateTo = path => {
    const { history } = this.props;
    history.push(path);
  };

  render() {
    const { location } = this.props;
    const vertNavItems = this.menu.map(item => {
      const active = location.pathname === item.to;
      const subItemActive = item.subItems && item.subItems.some(
        item => location.pathname === item.to
      );
      return (
        <VerticalNavItem
          key={item.to}
          title={item.title}
          iconClass={item.iconClass}
          active={active || subItemActive}
          onClick={() => this.navigateTo(item.to)}
        >
          {item.subItems &&
            item.subItems.map(secondaryItem => (
              <VerticalNavSecondaryItem
                key={secondaryItem.to}
                title={secondaryItem.title}
                iconClass={secondaryItem.iconClass}
                active={secondaryItem.to === location.pathname}
                onClick={() => this.navigateTo(secondaryItem.to)}
              />
            ))}
        </VerticalNavItem>
      );
    });

    const dropdownComponentClass = props => (
      <li className={props.className}>{props.children}</li>
    );

    return (
      <React.Fragment>
        <VerticalNav persistentSecondary={false}>
          <VerticalNavMasthead>
            <VerticalNavBrand titleImg={pfBrand} iconImg={pfLogo} />
            <VerticalNavIconBar>
              <Dropdown componentClass={dropdownComponentClass} id="help">
                <Dropdown.Toggle
                  className="nav-item-iconic"
                  bsStyle="link"
                  noCaret
                >
                  <Icon type="pf" name="help" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem eventKey="1">Help</MenuItem>
                  <MenuItem eventKey="2">About</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown componentClass={dropdownComponentClass} id="user">
                <Dropdown.Toggle className="nav-item-iconic" bsStyle="link">
                  <Icon type="pf" name="user" />{' '}
                  <span className="dropdown-title">Brian Johnson</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem eventKey="1">Preferences</MenuItem>
                  <MenuItem eventKey="2">Logout</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </VerticalNavIconBar>
          </VerticalNavMasthead>
          {vertNavItems}
          {/* <VerticalNavItem
            key="abc"
            title="Ipsum"
            iconClass="fa fa-dashboard"
            active
            onClick={() => this.navigateTo('/')}
          /> */}
        </VerticalNav>
        {this.renderContent()}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(App);
