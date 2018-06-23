import * as React from 'react';
import { Breadcrumb, Grid } from 'patternfly-react';
import PaginatedTableView from '../components/PaginatedTableView';

const Ipsum1APage = () => (
  <Grid fluid className="container-pf-nav-pf-vertical">
    <Grid.Row className="toolbar-pf">
      <Grid.Col xs={12}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Ipsum</Breadcrumb.Item>
          <Breadcrumb.Item active>Ipsum 1A</Breadcrumb.Item>
        </Breadcrumb>
      </Grid.Col>
    </Grid.Row>
    <PaginatedTableView />
  </Grid>
);

export default Ipsum1APage;
