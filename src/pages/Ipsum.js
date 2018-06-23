import * as React from 'react';
import { Alert, Grid } from 'patternfly-react';

const logo = require('../logo.svg');

interface State {
  alertVisible: boolean;
}

class IpsumPage extends React.Component<any, State> {
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
      <Grid fluid className="container-pf-nav-pf-vertical">
        <div className="page-header">
          <h2>Overview</h2>
        </div>
        <div className="App-body">
          {this.state.alertVisible && (
            <Alert type="success" onDismiss={this.dismissAlert}>
              <span>Well done! You&apos;ve installed this demo correctly.</span>
            </Alert>
          )}
          <div className="App-intro">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Patternfly React</h2>
          </div>
          <p className="App-paragraph">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Grid>
    );
  }
}

export default IpsumPage;
