import * as React from 'react';
import { Grid } from 'patternfly-react';
import { EmptyStateComponent } from '../components/EmptyStateComponent';

const OrbisPage = () => (
  <Grid fluid className="container-pf-nav-pf-vertical">
    <EmptyStateComponent title="Orbis Page" />
  </Grid>
);

export default OrbisPage;
