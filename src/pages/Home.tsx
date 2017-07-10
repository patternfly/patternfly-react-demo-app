import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { Alert } from 'patternfly-react';

const logo = require('../logo.svg');

interface State {
  alertVisible: boolean;
}
class HomePage extends React.Component<RouteComponentProps<any>, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      alertVisible: true
    };
  }

  dismissAlert = () => {
    this.setState({ alertVisible: false });
  };

  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="page-header">
          <h2>Overview</h2>
        </div>
        <div className="App-body">
          {this.state.alertVisible &&
            <Alert type="success" onDismiss={this.dismissAlert}>
              <span>Well done! You've installed this demo correctly.</span>
            </Alert>}
          <div className="App-intro">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Patternfly React</h2>
          </div>
          <p className="App-paragraph">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
