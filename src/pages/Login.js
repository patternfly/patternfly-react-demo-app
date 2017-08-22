// @flow
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions/login'
import { Credentials } from '../models/credentials'

const logo = require('../logo.svg')
const pfBrand = require('../img/brand-alt.svg')

interface Props {
  credentials: Credentials,
  loginClick: any
}
interface State {
  credentials: Credentials
}

class LoginPage extends React.Component<
  RouteComponentProps<any> & Props,
  State
> {
  constructor(props: any) {
    super(props)
    this.state = {
      credentials: props.credentials
    }
  }

  componentWillMount() {
    const element: ?HTMLElement = document.querySelector('html')
    if (element instanceof HTMLElement) {
      element.classList.add('login-pf')
    }
  }

  componentWillUnmount() {
    const element: ?HTMLElement = document.querySelector('html')
    if (element instanceof HTMLElement) {
      element.classList.remove('login-pf')
    }
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.credentials && nextProps.credentials.token) {
      this.props.history.push('/')
    }
  }

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>, prop: string) => {
    const o = Object.assign({}, this.state.credentials)
    o[prop] = e.currentTarget.value
    this.setState({ credentials: o })
  }

  render() {
    return (
      <div>
        <span id="badge">
          <img style={{ height: 69 }} src={logo} alt="logo" />
        </span>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div id="brand">
                <img
                  style={{ height: 18 }}
                  src={pfBrand}
                  alt="Patternfly Brand"
                />
              </div>
            </div>
            <div className="col-sm-7 col-md-6 col-lg-5 login">
              <form className="form-horizontal" action="index.html">
                <div className="form-group">
                  <label
                    htmlFor="inputUsername"
                    className="col-sm-2 col-md-2 control-label"
                  >
                    Username
                  </label>
                  <div className="col-sm-10 col-md-10">
                    <input
                      type="text"
                      value={this.state.credentials.username}
                      onChange={e => {
                        this.handleChange(e, 'username')
                      }}
                      className="form-control"
                      id="inputUsername"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-md-2 control-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10 col-md-10">
                    <input
                      type="password"
                      value={this.state.credentials.password}
                      onChange={e => {
                        this.handleChange(e, 'password')
                      }}
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-8 col-sm-offset-2 col-sm-6 col-md-offset-2 col-md-6">
                    <div className="checkbox">
                      <label htmlFor="remember">
                        <input id="remember" type="checkbox" />
                        Remember username
                      </label>
                    </div>
                    <span className="help-block">
                      {' '}Forgot <a href="#">username</a> or{' '}
                      <a href="#">password</a>
                      ?
                    </span>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 submit">
                    <button
                      id="loginBtn"
                      type="submit"
                      onClick={e => {
                        this.props.loginClick(e, this.state.credentials)
                      }}
                      className="btn btn-primary btn-lg"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-5 col-md-6 col-lg-7 details">
              <p>
                <strong>Welcome to Patternfly React</strong>
              </p>
              <p>
                The Patternfly React demo app showcases best approaches when
                using
                <br />
                Patternfly and React.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    credentials: state.loginReducer
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    loginClick: (
      e: SyntheticEvent<HTMLButtonElement>,
      credentials: Credentials
    ) => {
      e.preventDefault()
      dispatch(loginUser(credentials))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(LoginPage)
)
