import * as React from 'react';
import { Breadcrumb, Grid } from 'patternfly-react';
import { EmptyStateComponent } from '../components/EmptyStateComponent';

const Ipsum1BPage = () => (
  <Grid fluid className="container-pf-nav-pf-vertical">
    <Grid.Row className="toolbar-pf">
      <Grid.Col xs={12}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Ipsum</Breadcrumb.Item>
          <Breadcrumb.Item active>Ipsum 1B</Breadcrumb.Item>
        </Breadcrumb>
      </Grid.Col>
    </Grid.Row>
    <br />
    <EmptyStateComponent />
  </Grid>
);

export default Ipsum1BPage;
