import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Routes } from './Routes';
import { MastHead } from './components/Nav/MastHead';
import { VerticalNav } from './components/Nav/VerticalNav';
import { Credentials } from './models/credentials';
import './css/App.css';

interface Props {
  history: Array<string>;
  credentials: Credentials;
}

interface State {}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  handleNavClick = (event: Event) => {
    event.preventDefault();
    let target = event.currentTarget as HTMLElement;
    let href = target.getAttribute('href') as string;
    this.props.history.push(href);
  };

  render() {
    return (
      <div>
        {this.props.credentials.token && <MastHead />}
        {this.props.credentials.token &&
          <VerticalNav handleNavClick={this.handleNavClick} />}
        <Routes childProps={this.props} />
      </div>
    );
  }
}

interface StateProps {
  loginReducer: Object;
}

const mapStateToProps = (state: StateProps) => {
  return {
    credentials: state.loginReducer
  };
};

export default withRouter(connect<any, StateProps, any>(mapStateToProps)(App));
