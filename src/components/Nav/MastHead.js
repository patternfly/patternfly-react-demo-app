import * as React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const pfLogo = require('../../img/logo-alt.svg')
const pfBrand = require('../../img/brand-alt.svg')

interface Props {}

export const MastHead: React.StatelessComponent<Props> = props => {
  return (
    <Navbar fluid collapseOnSelect className="navbar navbar-pf-vertical">
      <Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Brand>
          <Link to="/">
            <img className="navbar-brand-icon" src={pfLogo} alt="" />
            <img
              className="navbar-brand-name"
              src={pfBrand}
              alt="PatternFly Enterprise Application"
            />
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <li className="dropdown">
            <a
              className="dropdown-toggle nav-item-iconic"
              id="notifications"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span title="Notifications" className="fa pficon-flag" />
              <span className="badge">2</span>
            </a>
            <div className="dropdown-menu infotip bottom-right">
              <div className="arrow" />
              <ul className="list-group">
                <li className="list-group-item">
                  <span className="i pficon pficon-info" /> Modified Datasources
                  ExampleDS
                </li>
                <li className="list-group-item">
                  <span className="i pficon pficon-info" /> Error: System
                  Failure
                </li>
              </ul>
              <div className="footer">
                <a>Clear Messages</a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-toggle nav-item-iconic"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span title="Help" className="fa pficon-help" />
              <span className="caret" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-toggle nav-item-iconic"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span title="Username" className="fa pficon-user" />
              <span className="caret" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <a href="#">Preferences</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
