import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
  VerticalNav,
  VerticalNavItem,
  VerticalNavSecondaryItem,
  Masthead,
  Icon,
  MenuItem
} from 'patternfly-react';
import pfLogo from 'patternfly/dist/img/logo-alt.svg';
import pfBrand from 'patternfly/dist/img/brand-alt.svg';
import { routes } from './routes';
import './App.css';

class App extends React.Component {
  state = {
    collapse: false
  };

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

  onCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  navigateTo = path => {
    const { history } = this.props;
    history.push(path);
  };

  render() {
    const { location } = this.props;
    const activeItem = this.menu.find(
      item => location.pathname.indexOf(item.to) > -1
    );

    const vertNavItems = this.menu.map(item => (
      <VerticalNavItem
        key={item.to}
        title={item.title}
        iconClass={item.iconClass}
        active={item === activeItem}
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
    ));

    return (
      <React.Fragment>
        <Masthead
          iconImg={pfLogo}
          titleImg={pfBrand}
          title="PatternFly React Demo App"
          onNavToggleClick={() => this.onCollapse()}
        >
          <Masthead.Collapse>
            <Masthead.Dropdown
              id="app-help-dropdown"
              noCaret
              title={<span title="Help" className="pficon pficon-help" />}
            >
              <MenuItem eventKey="1">Help</MenuItem>
              <MenuItem eventKey="2">About</MenuItem>
            </Masthead.Dropdown>
            <Masthead.Dropdown
              id="app-user-dropdown"
              title={[
                <Icon type="pf" name="user" key="user-icon" />,
                <span className="dropdown-title" key="dropdown-title">
                  Brian Johnson
                </span>
              ]}
            >
              <MenuItem eventKey="1">User Preferences</MenuItem>
              <MenuItem eventKey="2">Logout</MenuItem>
            </Masthead.Dropdown>
          </Masthead.Collapse>
        </Masthead>
        <VerticalNav
          persistentSecondary={false}
          hideMasthead
          navCollapsed={this.state.collapse}
        >
          {vertNavItems}
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
