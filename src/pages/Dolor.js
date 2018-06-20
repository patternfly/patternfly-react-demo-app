import * as React from 'react';
import { Grid } from 'patternfly-react';
import { EmptyState } from '../components/EmptyState/EmptyState';

class DolorPage extends React.Component {
  render() {
    return (
      <Grid fluid className="container-pf-nav-pf-vertical">
        <EmptyState title="Dolor Page" />
      </Grid>
    );
  }
}

export default DolorPage;
