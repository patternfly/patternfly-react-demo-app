import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import { Alert } from 'patternfly-react';
import { Project } from '../models/project';
import { Stage } from '../models/stage';
import CreateProjectForm from '../components/Forms/CreateProjectForm';
import CreateStageForm from '../components/Forms/CreateStageForm';

type State = {
  projectAlertVisible: boolean,
  stageAlertVisible: boolean,
  newProject: Project,
  newStage: Stage
};

class IpsumPage extends React.Component<RouteComponentProps<any>, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      projectAlertVisible: false,
      stageAlertVisible: false,
      newProject: {
        name: '',
        description: ''
      },
      newStage: {
        name: '',
        description: ''
      }
    };
  }

  handleProjectChange = (e, prop: string) => {
    const o = Object.assign({}, this.state.newProject);
    o[prop] = e.currentTarget.value;
    this.setState({ newProject: o });
  };

  handleSubmitProject = (event: Event) => {
    event.preventDefault();
    this.setState({ projectAlertVisible: true });
  };

  dismissProjectAlert = () => {
    this.setState({ projectAlertVisible: false });
  };

  handleStageChange = (e, prop: string) => {
    const o = Object.assign({}, this.state.newStage);
    o[prop] = e.currentTarget.value;
    this.setState({ newStage: o });
  };

  handleSubmitStage = (event: Event) => {
    event.preventDefault();
    this.setState({ stageAlertVisible: true });
  };

  dismissStageAlert = () => {
    this.setState({ stageAlertVisible: false });
  };

  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Projects</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Tabs>
              <Tab title="Create Project">
                <br />
                {this.state.projectAlertVisible && (
                  <Alert type="warning" onDismiss={this.dismissProjectAlert}>
                    <strong>Warning</strong> This is just a demo, so your inputs
                    really aren't saved. You can dismiss me though.
                  </Alert>
                )}
                <CreateProjectForm
                  handleSubmit={this.handleSubmitProject}
                  handleChange={this.handleProjectChange}
                  value={this.state.newProject}
                />
              </Tab>
              <Tab title="Create Stage">
                <br />
                {this.state.stageAlertVisible && (
                  <Alert type="info" onDismiss={this.dismissStageAlert}>
                    <strong>Alright</strong>, you submitted another form.
                  </Alert>
                )}
                <CreateStageForm
                  handleSubmit={this.handleSubmitStage}
                  handleChange={this.handleStageChange}
                  value={this.state.newProject}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IpsumPage);
