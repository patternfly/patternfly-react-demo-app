import * as React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { routes } from './routes';
import { VerticalNav, Dropdown, Icon, MenuItem } from 'patternfly-react';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.menu = routes();
  }
  handleNavClick = (event: Event) => {
    event.preventDefault();
    let target = (event.currentTarget: any);
    if (target.getAttribute) {
      let href = target.getAttribute('href');
      this.props.history.push(href);
    }
  };

  renderContent = () => {
    const { location } = this.props;
    return this.menu.map((item, index) => {
      return (
        <React.Fragment>
          <Route key={index} exact path={item.to} component={item.component} />
          {item.subItems &&
            item.subItems.map((secondaryItem, subIndex) => {
              return (
                <Route
                  key={subIndex}
                  exact
                  path={secondaryItem.to}
                  component={secondaryItem.component}
                />
              );
            })}
        </React.Fragment>
      );
    });
  };

  navigateTo = path => {
    const { history } = this.props;
    history.push(path);
  };

  renderMenuItems = () => {
    const { location } = this.props;
    const activeItem = this.menu.find(
      item => location.pathname.indexOf(item.to) > -1
    );

    return this.menu.map(item => {
      return (
        <VerticalNav.Item
          key={item.to}
          title={item.title}
          iconClass={item.iconClass}
          active={item === activeItem}
          onClick={() => this.navigateTo(item.to)}
        >
          {item.subItems &&
            item.subItems.map(secondaryItem => {
              return (
                <VerticalNav.SecondaryItem
                  key={secondaryItem.to}
                  title={secondaryItem.title}
                  iconClass={secondaryItem.iconClass}
                  active={secondaryItem.to === location.pathname}
                  onClick={() => this.navigateTo(secondaryItem.to)}
                />
              );
            })}
        </VerticalNav.Item>
      );
    });
  };

  render() {
    return (
      <div
        className={'layout-pf layout-pf-fixed'}
        style={{
          height: '100vh',
          paddingTop: 60,
          transform: 'translateZ(0px)'
        }}
      >
        <VerticalNav persistentSecondary={false}>
          <VerticalNav.Masthead>
            <VerticalNav.Brand titleImg="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.51.0/img/brand-alt.svg" iconImg="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.51.0/img/logo-alt.svg"/>
            <VerticalNav.IconBar>
              <Dropdown componentClass="li" id="help">
                <Dropdown.Toggle useAnchor className="nav-item-iconic">
                  <Icon type="pf" name="help" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem>Help</MenuItem>
                  <MenuItem>About</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown componentClass="li" id="user">
                <Dropdown.Toggle useAnchor className="nav-item-iconic">
                  <Icon type="pf" name="user" /> Brian Johnson
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem>Preferences</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </VerticalNav.IconBar>
          </VerticalNav.Masthead>
          {this.renderMenuItems()}
        </VerticalNav>
        {/* default route to /ipsum */}
        <Redirect from="/" to="/ipsum" />
        {this.renderContent()}
      </div>
    );
  }
}

export default withRouter(App);
