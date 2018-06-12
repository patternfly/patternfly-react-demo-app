import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { EmptyState, Button } from 'patternfly-react';

class NadaPage extends React.Component<RouteComponentProps<any>, {}> {
  action(actionMsg) {
    alert(actionMsg);
  }
  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1>Nada Page</h1>
            </div>
          </div>
        </div>
        <EmptyState>
          <EmptyState.Icon />
          <EmptyState.Title>Nada</EmptyState.Title>
          <EmptyState.Info>
            This is the Empty State component. The goal of a empty state pattern
            is to provide a good first impression that helps users to achieve
            their goals. It should be used when a view is empty because no
            objects exists and you want to guide the user to perform specific
            actions.
          </EmptyState.Info>
          <EmptyState.Help onClick={() => this.action('help action')}>
            For more information please see{' '}
            <a
              href="#"
              onClick={event => {
                event.preventDefault();
              }}
            >
              pfExample
            </a>
          </EmptyState.Help>
          <EmptyState.Action>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={() => this.action('main action')}
            >
              Main Action
            </Button>
          </EmptyState.Action>
          <EmptyState.Action secondary>
            <Button
              onClick={() => this.action('secondary action 1')}
              title="Perform an action"
            >
              Secondary Action 1
            </Button>
            <Button
              onClick={() => this.action('secondary action 2')}
              title="Perform an action"
            >
              Secondary Action 2
            </Button>
            <Button
              onClick={() => this.action('secondary action 3')}
              title="Perform an action"
            >
              Secondary Action 3
            </Button>
          </EmptyState.Action>
        </EmptyState>
      </div>
    );
  }
}

export default withRouter(NadaPage);
