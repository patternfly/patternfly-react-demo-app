import * as React from 'react';
import { Grid } from 'patternfly-react';
import { EmptyStateComponent } from '../components/EmptyStateComponent';

const DolorPage = () => (
  <Grid fluid className="container-pf-nav-pf-vertical">
    <EmptyStateComponent title="Dolor" />
  </Grid>
);

export default DolorPage;
